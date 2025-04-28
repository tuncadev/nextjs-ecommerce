type GetProfileLinkParams = {
  username: string;
  page?: string; // optional
};

export function getProfileLink({ username, page }: GetProfileLinkParams): string {
  if (!username) return "#";

  let base = `/profile/${username}`;
  if (page) {
    base += `/${page}`;
  }

  return base;
}
