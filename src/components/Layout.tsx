const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg h-screen w-full bg-neutral-900 text-slate-100">
      {children}
    </div>
  );
};

export default Layout;
