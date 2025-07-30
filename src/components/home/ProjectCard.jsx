import React from 'react'

const ProjectCard = ({ project }) => {
   return (
    <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg rounded-xl p-4 w-64 h-40 hover:shadow-lg dark:hover:shadow-xl transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
        {project.description}
      </p>
      <p className="text-xs text-gray-400 dark:text-gray-400 mt-4">
        Updated {project.lastUpdated}
      </p>
      <button className="mt-3 text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
        Open Board →
      </button>
    </div>
  );

}

export default ProjectCard