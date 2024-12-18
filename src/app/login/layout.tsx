import { redirect } from "next/navigation";
import { isUserLoggedIn } from "@/serverFunctions";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const Layout = async ({ children }: AuthLayoutProps) => {
  const isLoggedIn = await isUserLoggedIn();
  if (isLoggedIn) {
    redirect("/dashboard");
  }

  return <>{children}</>;
};

export default Layout;
