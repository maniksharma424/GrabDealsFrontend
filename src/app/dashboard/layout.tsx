
import { redirect } from "next/navigation";
import { isUserLoggedIn } from "@/serverFunctions";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const Layout = async ({ children }: AuthLayoutProps) => {
  const isLoggedIn = await isUserLoggedIn();
  if (!isLoggedIn) {
    redirect("/login");
  }

  return <>{children}</>;
};

export default Layout;
