import DiamondIcon from "./DiamondIcon"
import StatBar from "./StatBar";

export default function Status({diamonds=0}) {
    return (
    <>
    <div className="
    flex flex-row
    items-center
    justify-between
    bg-purple-500
    w-full
    ">
       
   <p>This is person image</p>

      <div className="
    flex
    gap-20
    w-70
    bg-gray-450">
        <StatBar label="XP" value="40%" level={4}/>
        <p className="text-blue-500">{diamonds} <DiamondIcon/></p>

      </div>

       
       </div>
    </>
        
    
  );
}