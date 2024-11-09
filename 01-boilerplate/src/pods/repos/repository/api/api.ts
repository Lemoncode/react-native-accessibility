import { Repo } from "./api.model";

export const getOrganizationRepos = async (
  organization: string
): Promise<Repo[]> => {
  const response = await fetch(
    `https://api.github.com/orgs/${organization}/repos?type=public&sort=pushed&direction=desc&per_page=100`
  );

  return response.json();
};
