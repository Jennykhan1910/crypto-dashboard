export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // FIX 1: Use binance.vision - it works from US/Vercel, api.binance.com does NOT
    const url = "https://data-api.binance.vision/api/v3/ticker/24hr?symbols=[\"BTCUSDT\",\"ETHUSDT\",\"LTCUSDT\",\"SOLUSDT\",\"BNBUSDT\"]";
    
    const res = await fetch(url, { 
      cache: "no-store",
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    if (!res.ok) {
      throw new Error(`Binance blocked: ${res.status}`);
    }

    const data = await res.json();

    // FIX 2: Format clean for frontend
    const formatted = data.map((c: any) => ({
      symbol: c.symbol,
      price: parseFloat(c.lastPrice),
      change: parseFloat(c.priceChangePercent),
      volume: parseFloat(c.quoteVolume),
      high: parseFloat(c.highPrice),
      low: parseFloat(c.lowPrice),
    }));

    return Response.json(formatted, {
      headers: { 
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (e: any) {
    console.error("Binance fail, using fallback", e.message);
    
    // FIX 3: Fallback to CoinGecko if Binance still blocks - so you NEVER show $...
    try {
      const fallbackRes = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,litecoin,solana,binancecoin&price_change_percentage=24h',
        { cache: 'no-store' }
      );
      const fg = await fallbackRes.json();
      const map: any = {
        bitcoin: 'BTCUSDT',
        ethereum: 'ETHUSDT',
        litecoin: 'LTCUSDT',
        solana: 'SOLUSDT',
        binancecoin: 'BNBUSDT'
      };
      const formatted = fg.map((c: any) => ({
        symbol: map[c.id],
        price: c.current_price,
        change: c.price_change_percentage_24h,
        volume: c.total_volume,
        high: c.high_24h,
        low: c.low_24h,
      }));
      return Response.json(formatted);
    } catch {
      return Response.json({ error: "both apis failed" }, { status: 500 });
    }
  }
}