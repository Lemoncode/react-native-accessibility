import * as api from "./api";
import { mapOrganizationReposToVM } from "./repository.mappers";

export const getOrganizationRepos = async (organization: string) => {
  const result = await api.getOrganizationRepos(organization);
  const sorted = result
    .filter((repo) => !repo.private)
    .sort((a, b) => (a.pushed_at > b.pushed_at ? -1 : 1));
  return mapOrganizationReposToVM(sorted);
};
