import type * as am from "./api/api.model";
import type * as vm from "./contributors.vm";

export const mapContributorToVM = (
  organization: am.Contributor
): vm.Contributor => ({
  id: organization.id,
  login: organization.login,
  avatarUrl: organization.avatar_url,
  contributions: organization.contributions,
});

export const mapContributorsToVM = (
  organizationRepos: am.Contributor[]
): vm.Contributor[] => organizationRepos.map(mapContributorToVM);
