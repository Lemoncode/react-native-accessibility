import * as api from "./api";
import { mapOrganizationRepoToVM } from "./repository.mappers";

export const getOrganizationRepo = async (
  organization: string,
  repositoryName: string
) => {
  const result = await api.getOrganizationRepo(organization, repositoryName);
  return mapOrganizationRepoToVM(result);
};
