import type * as am from "./api/api.model";
import type * as vm from "./repository-list.vm";

export const mapGithubRepositoryToVM = (
  organization: am.OrganizationRepository
): vm.OrganizationRepository => ({
  id: organization.id,
  name: organization.name,
  description: organization.description,
  htmlUrl: organization.html_url,
  private: organization.private,
  fullName: organization.full_name,
  owner: {
    avatarUrl: organization.owner.avatar_url,
  },
});

export const mapOrganizationRepositoriesToVM = (
  organizationRepos: am.OrganizationRepository[]
): vm.OrganizationRepository[] =>
  organizationRepos.map(mapGithubRepositoryToVM);
