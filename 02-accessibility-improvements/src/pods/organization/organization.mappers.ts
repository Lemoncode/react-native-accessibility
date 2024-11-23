import type * as am from "./api/api.model";
import type * as vm from "./organization.vm";

export const mapOrganizationToVm = (
  organization: am.Organization
): vm.Organization => ({
  id: organization.id,
  login: organization.login,
  name: organization.name,
  avatarUrl: organization.avatar_url,
  description: organization.description,
  location: organization.location,
  reposUrl: organization.repos_url,
  blog: organization.blog,
  email: organization.email,
  followers: organization.followers,
  membersUrl: organization.members_url,
  publicRepos: organization.public_repos,
  htmlUrl: organization.html_url,
});
