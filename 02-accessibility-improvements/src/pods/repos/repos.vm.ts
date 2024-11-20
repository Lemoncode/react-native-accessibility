export interface Repo {
  id: number;
  name: string;
  fullName: string;
  private: boolean;
  htmlUrl: string;
  description: string;
  owner: {
    avatarUrl: string;
  };
}
