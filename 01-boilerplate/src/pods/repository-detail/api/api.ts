import type { GithubRepository } from "./api.model";

export const getGithubRepoDetail = async (
  organization: string,
  repositoryName: string
): Promise<GithubRepository> => {
  const response = await fetch(
    `https://api.github.com/repos/${organization}/${repositoryName}`
  );

  return response.json();
};
