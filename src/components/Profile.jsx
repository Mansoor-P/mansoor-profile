import React from "react";
import mansoorImage from "../assets/mansoor.jpg";
import Resume from "./Resume";
import SocialLinks from "./SocialLinks";

const Profile = ({ showResume }) => {
  return (
    <div className="flex flex-col items-center mt-20">
      <img
        src={mansoorImage}
        alt="Profile"
        className="w-32 h-32 object-cover rounded-full"
      />
      <p className="text-xl text-center font-semibold p-4">
        Hi, I am Mansoor, a software engineer specializing in backend
        development and distributed systems.
      </p>

      {showResume ? <Resume /> : <SocialLinks />}
    </div>
  );
};

export default Profile;
