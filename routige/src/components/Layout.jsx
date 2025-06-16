import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Routige</h1>
        <nav className="space-x-4">
          <Link to="/">Tasks</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </header>

      <main className="flex-1 overflow-auto">
        <Outlet /> {/* This is where the current page shows up */} 
      </main>

      <footer className="bg-gray-800 p-4 text-center">
        Routige RPG Tracker
      </footer>
    </div>
  );
}