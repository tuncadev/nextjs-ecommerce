export function getPathPart(pathname: string, index: number): string {
  const parts = pathname.split('/').filter(Boolean);
  return parts[index] ?? '';
}