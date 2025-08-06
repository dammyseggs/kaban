import React from "react";
import UserInfoCard from "../components/profile/UserInfoCard";
import UserProjectList from "../components/profile/UserProjectList";
import UserActivityTimeline from "../components/profile/UserActivityTimeline";

const dummyUser = {
  name: "Emmanuel Famakinde",
  email: "famakindeolamide@gmail.com",
  role: "admin",
};

const dummyProjects = [
  { id: "flowboard-v1", name: "Flowboard v1", role: "Admin" },
  { id: "inventory", name: "Inventory App", role: "Member" },
  { id: "crm-redesign", name: "CRM Redesign", role: "Viewer" },
];

const MyProfile = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-6">👤 My Profile</h1>
      <UserInfoCard user={dummyUser} />
      <div className="mt-6 flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2">
          <UserProjectList projects={dummyProjects} />
        </div>
        <div className="lg:w-1/2">
          <UserActivityTimeline />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
