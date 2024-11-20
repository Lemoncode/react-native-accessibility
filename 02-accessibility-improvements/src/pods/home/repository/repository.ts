import * as api from "./api";
import { mapOrganizationFromApiToVm } from "./repository.mappers";

export const getOrganization = async (organization: string) => {
  const result = await api.getOrganization(organization);
  return mapOrganizationFromApiToVm(result);
};
