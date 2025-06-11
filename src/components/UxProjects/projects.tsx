export const UxCards = () => {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center gap-8 bg-white">
        <div ref={boxRef} className="w-64 h-40 bg-gray-400 rounded shadow-md" />
        <div className="w-64 h-40 bg-gray-500 rounded shadow-md" />
      </div>
    </>
  );
};

export default UxCards;
