export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const res = await 
    fetch("https://api.binance.com/api/v3/ticker/24hr?symbols=[\"BTCUSDT\",\"ETHUSDT\",\"LTCUSDT\",\"SOLUSDT\",\"BNBUSDT\"]", { cache: "no-store" });
    const data = await res.json();
    return Response.json(data, {
      headers: { 'Cache-Control': 'no-store' }
    });
  } catch (e) {
    return Response.json({ error: "failed" }, { status: 500 });
  }
}