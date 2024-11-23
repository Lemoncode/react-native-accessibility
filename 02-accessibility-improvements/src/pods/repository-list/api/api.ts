import { OrganizationRepository } from "./api.model";

export const getOrganizationRepositories = async (
  organization: string
): Promise<OrganizationRepository[]> => {
  const response = await fetch(
    `https://api.github.com/orgs/${organization}/repos?type=public&sort=pushed&direction=desc&per_page=100`
  );

  const result: OrganizationRepository[] = await response.json();

  return result
    .filter((repo) => !repo.private)
    .sort((a, b) => (a.pushed_at > b.pushed_at ? -1 : 1));
};
