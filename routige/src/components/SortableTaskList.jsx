import { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import  TaskCard  from './TaskCard';
function SortableTask({ task }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    transition,
    opacity: transform ? 0.9 : 1,
  } : {};

  return (
    <div ref={setNodeRef} style={style}>
      <TaskCard 
        id={task.id}
        title={task.title}
        description={task.description}
        diamonds={task.diamonds}
        xp={task.xp}
        gp={task.gp}
        isDragging={!!transform}
        dragHandleProps={{ ...attributes, ...listeners }}
      />
    </div>
  );
}


export default function SortableTaskList({ tasks = [] }) {
  const [taskOrder, setTaskOrder] = useState(tasks);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = taskOrder.findIndex(task => task.id === active.id);
    const newIndex = taskOrder.findIndex(task => task.id === over.id);

    const newOrder = arrayMove(taskOrder, oldIndex, newIndex);
    setTaskOrder(newOrder); 
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={taskOrder.map(task => task.id)} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col w-full space-y-4 bg-gray-700 p-4 rounded-lg">
          {taskOrder.map(task => (
            <SortableTask id={task.id} task={task} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}