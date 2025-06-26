// components/ProjectCardList.tsx
import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectCardList = () => {
  return (
    <div className="flex gap-6 justify-center items-center">
      <ProjectCard title="Titel of the project" subtitle="Now it´s your turn" />
      <ProjectCard title="Titel of the project" subtitle="Now it´s your turn" />
      <ProjectCard title="Titel of the project" subtitle="Now it´s your turn" />
    </div>
  );
};
