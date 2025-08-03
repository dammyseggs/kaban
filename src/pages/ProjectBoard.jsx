import React from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import KabanBoard from "../components/kaban/KabanBoard";

const ProjectBoard = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-4">📌 Project Board</h1>
      <button
        onClick={() => navigate("/projects")}
        className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline mb-4"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        back
      </button>
      <p className="mb-4 text-gray-500 dark:text-gray-400">Project: {id}</p>
      <KabanBoard />
    </div>
  );
};

export default ProjectBoard;
