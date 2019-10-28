import { useEffect } from "react";
import { useRouter } from "next/router";
import { route } from "next-server/dist/server/router";

export default () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/reports");
  });
  return <div></div>;
};
