import Nav from "./Navigation/Nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg h-screen w-full bg-neutral-900 text-slate-100">
      <div className="mx-auto h-full max-w-5xl px-8 pt-16">
        <div className="h-[400px]">
          <Nav />
        </div>
        <main className=" w-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
