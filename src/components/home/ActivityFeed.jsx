import React from 'react'
  


const activity = [
    "✅ Jane moved 'Login UI' to Done",
    "✏️ You edited 'Sidebar Layout'",
    "🆕 Alex added a new column to 'Design Board'",
  ];

const ActivityFeed = () => {
   return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md dark:shadow-lg h-full transition-colors">
      <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-100">
        📢 Recent Activity
      </h3>
      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
        {activity.map((item, idx) => (
          <li key={idx}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityFeed