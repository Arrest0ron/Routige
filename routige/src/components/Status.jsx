import DiamondIcon from "./DiamondIcon"
import StatBar from "./StatBar";

export default function Status({xp=0, gp=0, diamonds=0, level = 1, hp = 0}) {
    return (
    <>
    <div className="
    flex flex-row
    items-center
    justify-between
    bg-gray-700
    w-full
    ">
       

       
   <img src="./assets/react.svg"
    alt="Avatar"
    className="ml-5"></img>
    <div className="w-40 m-2"><StatBar  label="XP" value="40%" level={level}/>
</div>
    
    <div className="
    flex
    bg-gray-450
    gap-4
    m-2 
    mr-4">
        <p className="text-blue-500 text-xl flex flex-row gap-1">{diamonds} <DiamondIcon/></p>
        <p className="text-yellow-500 text-xl">{gp} GP </p>
    </div>

       </div>
    </>
        
    
  );
}