import { useEffect } from "react";

import { Project } from "@/interfaces/project.interface";

export const useSeo = (project?: Project) => {
  useEffect(() => {
    document.title = project ? `${project.title}` : "Sebastian - Portfolio";
  }, [project]);
};
