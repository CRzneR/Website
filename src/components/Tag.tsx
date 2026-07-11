interface TagProps {
  text: string;
}

export function Tag({ text }: TagProps) {
  return (
    <span className="px-4 py-1.5 rounded-full border border-[#CEC9C9]/40 text-xs text-[#CEC9C9] whitespace-nowrap">
      {text}
    </span>
  );
}
