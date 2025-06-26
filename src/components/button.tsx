export const Button = ({
  a,
  text,
}: {
  a?: string;
  text: React.ReactNode;
  className?: string;
}) => {
  return (
    <a href={a ?? "#"} target="_blank" rel="noopener noreferrer">
      <button className="mt-auto border-2 border-black rounded-full px-6 py-2 text-black hover:bg-black hover:text-white transition font-semibold w-fit">
        {text}
      </button>
    </a>
  );
};
