import * as api from "./api";
import { mapContributorsToVM } from "./repository.mappers";

export const getRepoContributors = async (
  organization: string,
  repositoryName: string
) => {
  const result = await api.getRepoContributors(organization, repositoryName);
  const sorted = result.sort((a, b) =>
    a.contributions > b.contributions ? -1 : 1
  );
  return mapContributorsToVM(sorted);
};
