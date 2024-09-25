import { useState } from "react";
import { Header, Navbar } from "../components";

interface LayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isexpanded, setexpanded] = useState<boolean>(true);

  return (
    <div className="flex ">
      <Navbar
        isExpanded={isexpanded}
        setExpanded={setexpanded}
        filter={""}
        setFilter={() => {}}
      />
      <div
        className={`flex-1  flex flex-col  ${
          isexpanded ? " ml-52 sm:ml-52  md:ml-64" : "ml-20  md:ml-24"
        }`}
      >
        <Header />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};
