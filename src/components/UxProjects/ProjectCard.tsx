// components/ProjectCard.tsx
import React from "react";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  logo?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  logo,
}) => {
  // Default-Logo falls keins angegeben wurde
  const defaultLogo = "/image/default-logo.png";
  const logoPath = logo || defaultLogo;

  return (
    <div className="bg-gray-300 w-64 h-80 p-4 flex flex-col justify-end rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col h-full">
        <div className="flex-grow flex items-center justify-center">
          <div className="relative w-32 h-32">
            <Image
              src={logoPath}
              alt={`${title} logo`}
              fill
              className="object-contain"
              quality={100}
              priority={false}
            />
          </div>
        </div>
        <div className="mt-auto">
          <h3 className="font-bold text-lg">{title}</h3>
          <hr className="border-black my-2 w-full" />
          <p className="text-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
