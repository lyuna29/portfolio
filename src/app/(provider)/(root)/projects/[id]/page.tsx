"use client";

import { ProjectDetail } from "@/app/components/ProjectsDetail";
import { FC } from "react";
import { use } from "react";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProjectPage: FC<ProjectPageProps> = ({ params }) => {
  const resolvedParams = use(params);
  return <ProjectDetail projectId={decodeURIComponent(resolvedParams.id)} />;
};

export default ProjectPage;
