import React, { useState } from 'react'
import ProjectCard from "../components/home/ProjectCard";
import ActivityFeed from "../components/home/ActivityFeed";
import QuickActions from "../components/home/QuickActions";
import NewProjectModal from '../components/NewProjectModal';



const Home = () => {
   const [showModal, setShowModal] = useState(false);

    const mockProjects = [
    {
      id: "1",
      title: "Frontend Refactor",
      description: "Sprint tasks for UI cleanup",
      lastUpdated: "2 hours ago",
    },
    {
      id: "2",
      title: "Marketing Dashboard",
      description: "Kanban setup for content workflow",
      lastUpdated: "Yesterday",
    },
  ];

  return (
    <div className="p-6 space-y-10 min-h-screen rounded-lg text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <div>
        <h1 className="text-3xl font-bold">👋 Welcome back, Emmanuel</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Here’s what’s happening today.
        </p>
      </div>

      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ActivityFeed />
        <QuickActions />
      </section>


      <section>
        <h2 className="text-xl font-semibold mb-4">📋 Recent Projects</h2>
        <div className="flex flex-wrap gap-4">
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <button onClick={() => setShowModal(true)} className="bg-white dark:bg-gray-800 border-dashed border-2 border-gray-300 dark:border-gray-600 p-6 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 w-64 h-40 transition">
            <span className="text-gray-500 dark:text-gray-300 font-medium">
              + New Project
            </span>
          </button>
        </div>
      </section>

      <NewProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Home;
