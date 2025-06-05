export function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 flex flex-col items-center text-white/90">
      <span className="animate-bounce text-xl">↓</span>
      <span className="mt-1 text-xs tracking-widest">SCROLL</span>
    </div>
  );
}
