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
      <button className="mt-auto border border-[#CEC9C9] rounded-full px-6 py-2 text-[#CEC9C9] hover:bg-[#CEC9C9] hover:text-black transition font-semibold w-fit">
        {text}
      </button>
    </a>
  );
};
