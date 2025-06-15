import { useState } from 'react'
import Status from './components/Status'
import TaskList from './components/TaskList'
import SortableTaskList from './components/SortableTaskList'
import Top from './components/Top'
import './App.css'

function App() {

  const daily_tasks = [
    {id: 1, 
    title:  "Walk for 10 minutes", 
    description: "Try to not look at your phone, just for a little bit! That's for your own sake~", 
    diamonds: 1, xp: 10},
    
    {id: 2, 
    title: "Brush your teeth!",
    description: "Make them shine like the diamonds, yeah ^^",
    diamonds: 1, xp: 20}
  
  ]

    const tasks = [
    {id: 3, 
    title:  "Physics assgment", 
    description: "Tasks 1-34, I really hope you won't delay it.", 
    diamonds: 2, xp: 35},
    
    {id: 4, 
    title: "Mechanics project",
    description: "Photo is in gallery, fix each mistake carefully. Next year will be easier.",
    diamonds: 1, xp: 20},
    
    {id: 5, 
    title: "Get a present for Ari",
    description: "I know, that's the owner, but you should always consider such a gift, since i'm very loving and trustful person!",
    diamonds: 7, xp: 100},

  
  ]
  // const [count, setCount] = useState(0)

  return (
    <main className="flex flex-col w-full h-full font-pixel bg-gray-900">
      <Top />
      <Status diamonds={10} />

      <div className="flex p-5 gap-5 m-5 grow">
        <SortableTaskList tasks={daily_tasks} />
        <SortableTaskList tasks={tasks} />
      </div>
    </main>
  );
}

export default App
