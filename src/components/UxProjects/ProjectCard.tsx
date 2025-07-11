// components/ProjectCard.tsx
import React from "react";

type ProjectCardProps = {
  title: string;
  subtitle: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="bg-gray-300 w-64 h-80 p-4 flex flex-col justify-end">
      <div>
        <img src="" alt="" />
        <h3 className="font-bold text-lg">{title}</h3>
        <hr className="border-black my-1 w-full" />
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
};
