"use client";

import { useEffect, useState } from "react";

export default function useUserSession() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.ok ? res.json() : null)
      .then((data) => setUser(data?.user ?? null))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading };
}
