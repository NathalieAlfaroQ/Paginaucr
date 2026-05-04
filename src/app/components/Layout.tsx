import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="bg-white min-h-screen flex flex-col relative overflow-x-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <Header />
      <main className="flex-1 relative flex items-center justify-center py-20 min-h-[500px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}