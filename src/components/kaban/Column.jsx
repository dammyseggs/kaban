import React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";
import AddTaskForm from '../AddTaskForm';


const getHeaderClasses  = (id) => {
  switch (id) {
 case "todo":
      return "bg-blue-200 dark:bg-blue-600 text-blue-900 dark:text-white";
    case "in-progress":
      return "bg-yellow-200 dark:bg-yellow-600 text-yellow-900 dark:text-white";
    case "waiting-for-review":
      return "bg-red-200 dark:bg-red-600 text-red-900 dark:text-white";
    case "done":
      return "bg-green-200 dark:bg-green-600 text-green-900 dark:text-white";
    default:
      return "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white";
  }
};

const Column = ({ column, tasks, onAddTask  }) => {
      const headerClasses = getHeaderClasses(column.id);
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg w-62 flex-shrink-0">
      <div
        className={`p-3 rounded-t-lg mb-2 font-bold text-lg ${headerClasses}`}
      >
        {column.title}
      </div>

      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="min-h-[100px]"
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskCard task={task} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {column.id == "todo" && (
        <div>
           <AddTaskForm onAddTask={(newTask) => onAddTask(column.id, newTask)} />
        </div>
      )}
    </div>
  );
};

export default Column;
