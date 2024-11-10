import { Contributor } from "./api.model";

export const getRepoContributors = async (
  organization: string,
  repositoryName: string
): Promise<Contributor[]> => {
  const response = await fetch(
    `https://api.github.com/repos/${organization}/${repositoryName}/contributors`
  );

  return response.json();
};
