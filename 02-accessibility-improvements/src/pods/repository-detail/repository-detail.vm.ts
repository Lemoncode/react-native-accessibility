export interface GithubRepository {
  id: number;
  name: string;
  fullName: string;
  private: boolean;
  htmlUrl: string;
  description: string;
  owner: {
    avatarUrl: string;
  };
  createdAt: string;
  pushedAt: string;
  stars: number;
  language: string;
  topics: string[];
  collaboratorsUrl: string;
}
