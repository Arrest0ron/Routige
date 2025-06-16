import Status from '../components/Status';
import SortableTaskList from '../components/SortableTaskList';
import Top from '../components/Top';
import { Link } from 'react-router-dom';

import {useUserStore} from '../store/useUserStore';
import { useTaskStore } from '../store/useTaskStore';

export default function MainPage() {

  const { xp, gp, hp, level, diamonds, addXP, addGP, addDiamonds, spendGP } = useUserStore();
  const { dailyTasks, todoTasks, completeTask } = useTaskStore();

  return (
    <main className="flex flex-col w-full h-full font-pixel bg-gray-900">
        <Top/>
      {/* Stats */}
      <Status xp={xp} gp={gp} hp={hp} level={level} diamonds={diamonds} />

      {/* Task Lists */}
      <div className="flex  p-5 gap-5 m-5 grow flex-wrap md:flex-nowrap">
        {/* Daily Tasks (Left) */}
        <SortableTaskList 
          tasks={dailyTasks} 
          listType="dailyTasks" 
        />

        {/* Todo Tasks (Right) */}
        <SortableTaskList 
          tasks={todoTasks} 
          listType="todoTasks"
        />
      </div>

      {/* Navigation */}
      <nav className="bg-gray-800 text-center items-center  max-h-10">
        <Link to="/inventory" className="text-blue-400 hover:underline">
          🎒 Go to Inventory
        </Link>
      </nav>
    </main>
  );
}