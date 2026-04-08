export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none -z-10">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      
      {/* Dynamic ambient blobs */}
      <div 
        className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[120px]" 
        style={{ animation: "pulse-glow 8s infinite ease-in-out" }} 
      />
      <div 
        className="absolute bottom-[5%] right-[-5%] w-[35%] h-[35%] rounded-full bg-indigo-500/10 blur-[120px]" 
        style={{ animation: "pulse-glow 12s infinite ease-in-out -2s" }} 
      />
      <div 
        className="absolute top-[20%] right-[10%] w-[25%] h-[25%] rounded-full bg-emerald-400/5 blur-[100px]" 
        style={{ animation: "pulse-glow 10s infinite ease-in-out -4s" }} 
      />
      <div 
        className="absolute bottom-[20%] left-[15%] w-[30%] h-[30%] rounded-full bg-violet-400/5 blur-[100px]" 
        style={{ animation: "pulse-glow 14s infinite ease-in-out -1s" }} 
      />
    </div>
  );
}
