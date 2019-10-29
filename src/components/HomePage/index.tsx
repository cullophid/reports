import { useEffect } from "react";
import { useRouter } from "next/router";
import { route } from "next-server/dist/server/router";

export const HomePage = () => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      router.replace("/reports");
    }
  });
  return <div></div>;
};
