export default function Settings(){
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-black rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-white font-bold text-xl mb-6">Settings</h2>
        <div className="space-y-4 text-white">
          <div className="flex justify-between bg-[#1a1a1a] p-3 rounded-xl">
            <span>Dark Mode</span>
            <span>On</span>
          </div>
          <div className="flex justify-between bg-[#1a1a1a] p-3 rounded-xl">
            <span>Notifications</span>
            <span>Enabled</span>
          </div>
          <div className="flex justify-between bg-[#1a1a1a] p-3 rounded-xl">
            <span>Language</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </div>
  )
}
