import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const mockProjects = [
  {
    id: "1",
    title: "Frontend Refactor",
    description: "Sprint tasks for UI cleanup",
  },
  {
    id: "2",
    title: "Marketing Dashboard",
    description: "Kanban setup for content workflow",
  },
];

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Replace this with actual fetch in real app
    setProjects(mockProjects);
  }, []);

  useEffect(() => {
    if (projects.length === 1) {
      navigate(`/projects/${projects[0].id}`);
    }
  }, [projects, navigate]);

  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-4">🗂️ Your Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => navigate(`/projects/${project.id}`)}
            className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            <p className="mt-2 text-indigo-600 dark:text-indigo-400 text-sm">
              View Kanban →
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
