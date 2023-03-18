import Nav from "./Navigation/Nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg h-screen w-full bg-neutral-900 text-slate-100">
      <Nav />
      <div className="mx-auto h-full max-w-5xl px-8 pt-16">
        <main className=" w-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
