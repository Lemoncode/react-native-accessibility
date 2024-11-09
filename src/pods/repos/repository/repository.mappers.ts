import type * as am from "./api/api.model";
import type * as vm from "../repos.vm";

export const mapOrganizationRepoFromApiToVM = (
  organization: am.Repo
): vm.Repo => ({
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

export const mapOrganizationReposFromApiToVM = (
  organizationRepos: am.Repo[]
): vm.Repo[] => organizationRepos.map(mapOrganizationRepoFromApiToVM);
