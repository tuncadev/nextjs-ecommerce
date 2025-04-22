import crypto from "crypto";

export function generateHash(data: unknown): string {
  return crypto.createHash("sha256")
    .update(JSON.stringify(data))
    .digest("hex")
    .toLowerCase();
}
