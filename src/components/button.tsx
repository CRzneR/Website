export const Button = ({
  a,
  text,
  className = "",
}: {
  a?: string;
  text: React.ReactNode;
  className?: string;
}) => {
  return (
    <a href={a ?? "#"} target="_blank" rel="noopener noreferrer">
      <button
        className={`inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition duration-300 ease-in-out bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${className}`}
      >
        {text}
      </button>
    </a>
  );
};
