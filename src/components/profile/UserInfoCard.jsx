import React from "react";

const UserInfoCard = ({ user }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 flex items-center gap-4">
      {/* Avatar */}
      <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
        {user.name.charAt(0).toUpperCase()}
      </div>

      {/* Info */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {user.name}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {user.email}
        </p>
        <span
          className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full ${
            user.role === "admin"
              ? "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
              : "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
          }`}
        >
          {user.role.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
