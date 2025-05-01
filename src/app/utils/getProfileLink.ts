
type GetProfileLinkParams = {
	user: { username: string } | null; // Only care about username
  page?: string;
};

export function getProfileLink({ user, page }: GetProfileLinkParams): string {
  if (user) {
    return `/profile/${user.username}${page ? `/${page}` : ''}`;
  }

  return `/${page || '#'}`;
}