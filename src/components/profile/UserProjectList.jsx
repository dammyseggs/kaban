import React from "react";
import { Link } from "react-router-dom";

const UserProjectList = ({ projects }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mt-6">
      <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
        🗂️ Active Projects
      </h3>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              to={`/projects/${project.id}`}
              className="block p-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-800 dark:text-gray-100 font-medium">
                  📁 {project.name}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  {project.role}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProjectList;
