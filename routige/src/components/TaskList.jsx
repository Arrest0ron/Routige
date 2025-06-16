import TaskCard from './TaskCard'

export default function TaskList({tasks}) {
    return (
    <div className="
    flex
    flex-col
    w-full
    space-y-4
    bg-gray-700
    p-4
    rounded-lg">
        {tasks.map(task => (
        <TaskCard id={task.id} title={task.title} description={task.description} diamonds={task.diamonds} xp={task.xp} gp={task.gp} />
      ))}
    </div>
  );
}