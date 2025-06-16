import DiamondIcon from "./DiamondIcon";
import { useUserStore } from "../store/useUserStore";
import { useTaskStore } from "../store/useTaskStore";
export default function TaskCard({ 
  id, 
  title = "Empty title", 
  description = "Empty description", 
  diamonds = 0,  
  xp = 0,
  gp = 0,
  dragHandleProps // ✅ New prop for drag handle
}) {
  const addXP = useUserStore(state => state.addXP);
  const addGP = useUserStore(state => state.addGP);
  const addDiamonds = useUserStore(state => state.addDiamonds);

  const handleComplete = () => {
    useTaskStore.getState().completeTask(id, 'todoTasks');
    addXP(xp);
    addGP(gp);
    addDiamonds(diamonds);
  };

  return (
    <div className="flex gap-5 flex-row bg-gray-800 w-full items-center justify-between text-white rounded-lg hover:border-blue-200 hover:border shadow-md h-fit h-full">
      
      <div 
        
        className=" flex h-full  bg-gray-600 flex justify-center items-center p-1 rounded-l-lg min-w-10"
      >
        <button className="flex justify-center items-center w-6 h-6 rounded-sm aspect-square bg-green-600 hover:bg-green-700" onClick={handleComplete}>
          ✔️
        </button>
      </div>

      {/* Card content */}
      <div {...dragHandleProps}  className="flex flex-col w-full h-full  cursor-grab touch-none select-none">
        <div className="flex w-full justify-between">
          <p className="flex flex-wrap font-bold text-left text-gray-100 min-w-20 text-base">
            {title}
          </p>
        </div>
        <p className="text-left text-sm text-gray-300">{description}</p>
      </div>

      {/* Reward section */}
      <div className="flex flex-row items-center gap-1 ml-1 mr-1">
        <p className="flex text-sm mr-4">Reward:</p>
        <p className="text-green-500">+{xp} XP</p>
        <p className="text-blue-500">+{diamonds}<DiamondIcon /></p>
        <p className="text-yellow-500">+{gp} GP</p>
      </div>
    </div>
  );
}