import DiamondIcon from "./DiamondIcon";

export default function TaskCard({ title = "Empty title", description = "Empty description", diamonds =0,  xp = 0 }) {
    return (
    <div className="
    flex
    gap-5
    flex-row
    bg-gray-800
    w-full
    items-center
    justify-between
    text-white
    rounded-lg 
    border-0
    hover:border-blue-200
    hover:border-1
    shadow-md 
    h-fit
    h-full">
        <div className="
        h-full
        bg-gray-600 
        flex
        justify-center
        p-1 
        rounded-l-lg
         min-w-10 
         ">
            <button className="
            flex
            justify-center
            rounded-sm
            items-center
            w-6 h-6 self-center 
            aspect-square">-</button>
        </div>


        <div className="flex flex-col w-full h-full">

            <div className="flex w-full justify-between">

                <p className="
                flex    
                flex-warp
                font-bold 
                text-left
                text-gray-100
                    min-w-20
                    text-base">
                    {title}
                </p>

                
            </div>

            <p className="text-left text-sm text-gray-300">{description}</p>

        </div>
        
        <div className="flex flex-row items-center gap-1 ml-1 mr-1 gap-1">
            <p className="flex text-sm  mr-4">Reward:</p>
            <p className="text-yellow-500">   +{xp} XP</p>
            <p className="text-blue-500">+{diamonds}<DiamondIcon/></p>
        </div>
          

    </div>
  );
}