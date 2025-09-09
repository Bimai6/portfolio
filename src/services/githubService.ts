import { token } from "../../secret";
import { Repo } from "../models/Repo";
import { selectedRepos } from "../config/criteria";

export async function getRepos(): Promise<Repo[]> {
  try {
    const response = await fetch("https://api.github.com/user/repos", {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    const data = await response.json();

    const publicRepos = data
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

    return publicRepos;
  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
}
