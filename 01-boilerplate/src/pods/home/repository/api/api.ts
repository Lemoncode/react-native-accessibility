import { Organization } from "./api.model";

export const getOrganization = async (organization: string): Promise<Organization> => {
  const response = await fetch(`https://api.github.com/orgs/${organization}`);
  return response.json();
};
