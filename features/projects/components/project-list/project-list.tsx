import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import { Spinner } from "./../../../ui/spinner";
import styles from "./project-list.module.scss";

export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loading}>
          <Spinner>Loading</Spinner>
        </div>
      </div>
    );
  }

  if (isError) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul className={styles.list} id="project-list">
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
