import { Link } from 'react-router-dom';

export default function InventoryPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🎒 Your Inventory</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
          <img src="/icons/sword.svg" alt="Sword" className="w-12 h-12 mb-2" />
          <span className="text-sm text-center">Sword</span>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
          <img src="/icons/potion.svg" alt="Potion" className="w-12 h-12 mb-2" />
          <span className="text-sm text-center">Health Potion</span>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
          <img src="../assets/icons/shield.svg" alt="Shield" className="w-12 h-12 mb-2" />
          <span className="text-sm text-center">Wooden Shield</span>
        </div>
      </div>
        <Link to="/" className="mt-6 inline-block text-blue-400 hover:underline">
          ← Back to Tasks
        </Link>
       </div>
  );
}