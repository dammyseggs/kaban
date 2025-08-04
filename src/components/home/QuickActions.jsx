import React, { useState } from 'react'
import NewProjectModal from '../NewProjectModal';

const QuickActions = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md dark:shadow-lg h-full transition-colors">
      <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-100">
        🎯 Quick Actions
      </h3>
      <div className="flex flex-col gap-2">
        <button onClick={() => setShowModal(true)} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-sm">
          + New Project
        </button>
        <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition text-sm">
          + Invite Teammates
        </button>
      </div>

      <NewProjectModal isOpen={showModal} onClose={() => setShowModal(false)}/>
    </div>
  );
}

export default QuickActions