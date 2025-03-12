import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>{/* Tu navegación aquí */}</nav>
      <main>
        <Outlet />
      </main>
      <footer>{/* Tu footer aquí */}</footer>
    </div>
  );
}

export default Layout;
