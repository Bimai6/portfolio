import { token } from '../../secret';
export interface Repo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  created_at: string;
  visibility: string;
}

const Fetch: () => Promise<Repo[]> = async () => {
  try {
    const response = await fetch("https://api.github.com/user/repos", {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    const data: Repo[] = await response.json();

    const publicRepos = data
      .filter((repo) => repo.name === "theuss" || repo.name === "magnolia-hotels" || repo.name === "EyeOfTheDoom" || repo.name === "mugen-the-seinen-manga-gate" )
      .map((repo) => ({
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        language: repo.language,
        created_at: repo.created_at,
        visibility: repo.visibility,
      }));

    return publicRepos;
  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
};

export default Fetch;