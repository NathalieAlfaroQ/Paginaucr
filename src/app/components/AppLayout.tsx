import { Outlet } from "react-router";
import { AppHeader } from "./AppHeader";
import { Footer } from "./Footer";

export function AppLayout() {
  return (
    <div className="bg-white min-h-screen flex flex-col relative overflow-x-hidden">
      <AppHeader />
      <main className="flex-1 relative flex flex-col items-center py-20 w-full max-w-[1280px] mx-auto min-h-[500px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}