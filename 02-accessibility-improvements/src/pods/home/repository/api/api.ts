import { Organization } from "./api.model";

export const getOrganization = async (
  organization: string
): Promise<Organization> => {
  const response = await fetch(`https://api.github.com/orgs/${organization}`);
  if (!response.ok) {
    console.log(
      "Error fetching organization",
      response.statusText,
      response.status
    );
  }
  return response.json();
};
