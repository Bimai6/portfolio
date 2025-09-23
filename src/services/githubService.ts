import { token } from "../../secret";
import { Repo } from "@/models/Repo";
import { selectedRepos } from "@/config/criteria";
import { Project } from "@/types/project";
import { projectExtras } from "@/data/projectExtraFields";

export async function getRepos(): Promise<Repo[]> {
  try {
    const response = await fetch("https://api.github.com/user/repos", {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    const data = await response.json();

    const repos = data
      .filter((repo: any) => selectedRepos.includes(repo.name))
      .map(
        (repo: any) =>
          new Repo(
            repo.name,
            repo.html_url,
            repo.description,
            repo.language,
            repo.name !== "eye-of-the-doom" ? repo.created_at : "2024-11-05T10:23:45Z",
            repo.visibility
          )
      );

    const projects: Project[] = repos.map((repo: Repo) => {
      const extras = projectExtras[repo.name] ?? {};
      Object.assign(repo, extras);
      return repo as Project;
    });


    return projects;
  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
}
