import React from "react";

const activities = [
  {
    id: 1,
    type: "task-completed",
    description: 'Marked task **"Update UI styles"** as done',
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "task-added",
    description: 'Added task **"Invite new team member"**',
    time: "1 day ago",
  },
  {
    id: 3,
    type: "project-created",
    description: 'Created new project **"Internal CRM Redesign"**',
    time: "3 days ago",
  },
  {
    id: 4,
    type: "status-changed",
    description: 'Moved task **"Fix login bug"** to **In Progress**',
    time: "4 days ago",
  },
];

const getIcon = (type) => {
  switch (type) {
    case "task-completed":
      return "✅";
    case "task-added":
      return "➕";
    case "project-created":
      return "📁";
    case "status-changed":
      return "🔄";
    default:
      return "📌";
  }
};

const UserActivityTimeline = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mt-6">
      <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
        📊 Recent Activity
      </h3>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-start gap-3">
            <span className="text-lg">{getIcon(activity.type)}</span>
            <div>
              <p
                className="text-sm text-gray-800 dark:text-gray-200"
                dangerouslySetInnerHTML={{ __html: activity.description }}
              />
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {activity.time}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivityTimeline;
