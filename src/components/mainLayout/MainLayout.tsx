import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <main className="h-screen px-2 pt-2">
      <Outlet />
    </main>
  );
}
