// components/ProjectCardList.tsx
import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectCardList = () => {
  return (
    <div className="flex gap-6 justify-center items-center">
      <ProjectCard title="LIFAS" subtitle="Online Marketplace" />
      <ProjectCard title="Verte City " subtitle="Service Application" />
      <ProjectCard title="Titel of the project" subtitle="Now it´s your turn" />
    </div>
  );
};
