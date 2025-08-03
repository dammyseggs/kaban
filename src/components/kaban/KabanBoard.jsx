import React, { useState } from "react";
import { DragDropContext, Draggable } from "@hello-pangea/dnd";
import Column from "./Column";

const initialData = {
  columns: {
    todo: {
      id: "todo",
      title: "To Do",
      taskIds: ["task-1", "task-2", "task-8"],
    },
    "in-progress": {
      id: "in-progress",
      title: "In Progress",
      taskIds: ["task-3", "task-7"],
    },
    "waiting-for-review": {
      id: "waiting-for-review",
      title: "Waiting for review",
      taskIds: ["task-4", "task-6"],
    },
    done: {
      id: "done",
      title: "Done",
      taskIds: ["task-5"],
    },
  },
  tasks: {
    "task-1": { id: "task-1", title: "Design wireframes" },
    "task-2": { id: "task-2", title: "Setup Tailwind config" },
    "task-3": { id: "task-3", title: "Create Navbar component" },
    "task-4": { id: "task-4", title: "Create Footer component" }, 
    "task-5": { id: "task-5", title: "Implement dark mode" }, 
    "task-6": { id: "task-6", title: "Add user auth" }, 
    "task-7": { id: "task-7", title: "API integration" }, 
    "task-8": { id: "task-8", title: "Write tests" },
  },
  columnOrder: ["todo", "in-progress", "waiting-for-review", "done"],
};

const KabanBoard = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      });
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </div>
    </DragDropContext>
  );
};

export default KabanBoard;
