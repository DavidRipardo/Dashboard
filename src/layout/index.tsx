import { Header, Navbar } from "../components";

interface LayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex ">
      <Navbar filter={""} setFilter={() => {}} />
      <div className="flex-1  flex flex-col ml-5">
        <Header />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};
