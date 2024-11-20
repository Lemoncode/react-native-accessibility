import type { Repo } from "./api.model";

export const getOrganizationRepo = async (
  organization: string,
  repositoryName: string
): Promise<Repo> => {
  const response = await fetch(
    `https://api.github.com/repos/${organization}/${repositoryName}`
  );

  return response.json();
};
