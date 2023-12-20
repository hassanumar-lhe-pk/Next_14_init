"use client";
import { useRouter, usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

function getUserStatus(role: string) {
  if (role === "admin") {
    return true;
  } else {
    return false;
  }
}

export const AuthCheck = (props: any) => {
  const router = useRouter();
  const path = usePathname();
  const role =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("user") ?? "{}").role;
  const auth = getUserStatus(role);

  useLayoutEffect(() => {
    // Redirect if not authenticated
    if (!auth) {
      router.push("/");
    }
  }, [auth, router, path]);

  return props.children;
};
