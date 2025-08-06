import React from "react";

const priorityColors = {
  Low: "bg-green-300 text-green-700 dark:bg-green-700 dark:text-green-100",
  Medium:
    "bg-yellow-300 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100",
  High: "bg-orange-300 text-orange-700 dark:bg-orange-700 dark:text-orange-100",
  Critical: "bg-red-300 text-red-700 dark:bg-red-700 dark:text-red-100",
};

const TaskCard = ({ task }) => {
  const badgeColor =
    priorityColors[task.priority] ||
    "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 mb-3 shadow-sm border dark:border-gray-700">
      <div className="flex justify-between items-start">
        <p className="font-medium text-sm text-gray-800 dark:text-gray-100">
          {task.title}
        </p>
        {task.priority && (
          <span
            className={`text-xs font-semibold px-2 py-1 rounded ${badgeColor}`}
          >
            {task.priority}
          </span>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
