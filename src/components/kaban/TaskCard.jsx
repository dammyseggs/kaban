import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-md shadow-sm p-3 mb-3 text-sm text-gray-800 dark:text-gray-100">
      {task.title}
    </div>
  );
};

export default TaskCard;
