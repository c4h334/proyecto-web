import type { ReactNode } from "react";
import Header from "./header.tsx";
import Footer from "./footer.tsx";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      { <Footer /> }
    </div>
  );
};

export default Layout;