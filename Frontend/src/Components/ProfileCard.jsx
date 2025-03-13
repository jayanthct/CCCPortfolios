import React from "react";

import resumeicon from "../assets/resumeicon.svg";
import globe from "../assets/global.svg";
import { FaTrash, FaPen } from "react-icons/fa";

import { motion } from "framer-motion";


// Function to get avatar or fallback
const getAvatarUrl = (name, profile) => {
    return profile.img
      ? profile.img
      : `https://avatar.iran.liara.run/username?username=${name}`;
  };
  
  // Function to handle profile deletion
  const handleDelete = (rollno) => {
    const updatedProfiles = profiles.filter((item) => item.rollno !== rollno);
    setProfiles(updatedProfiles);
  };
  

function ProfileCard({profile}) {
    console.log(profile);
  return (
    <>
      <motion.a
        key={profile[4].rollno}
        // href={profile.link}
        target="_blank"
        className="card relative flex flex-col justify-center items-center gap-3 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        // whileHover={{ scale: 1.05 }}
      >
        <div className="votebox flex justify-center items-center gap-4">
          <p className="text font-semibold">Total Votes : </p>
          <div className="votecount bg-[#49462338] text-[#494623] text-[18px] w-10 h-10 rounded-full font-bold flex justify-center items-center">
            5
          </div>
        </div>

        <img
          src={getAvatarUrl(profile[4].name, profile)}
          alt="avatar"
          className="w-24 h-24 rounded-full object-cover"
        />

        <p className="text-[#494623] text-lg font-semibold">{profile[4].name}</p>
        <p className="text-[#746f28] text-sm font-medium">{profile[4].rollno}</p>

        <div
          className="absolute hover:scale-[0.9] duration-100 ease-in  top-4 right-4 bg-red-200 bg-opacity-40 rounded-full p-4 cursor-pointer hover:bg-opacity-60 transition"
          onClick={() => handleDelete(profile[4].rollno)}
        >
          <FaTrash className="text-red-600" />
        </div>
        <div
          className="absolute hover:scale-[0.9] duration-100 ease-in  right-4 top-18 bg-blue-200 bg-opacity-40 rounded-full p-4 cursor-pointer hover:bg-opacity-60 transition"
          onClick={() => handleDelete(profile[4].rollno)}
        >
          <FaPen className="text-blue-600" />
        </div>

        <div className="buttons flex justify-between items-center w-full m-2">
          <button
            className="resume hover:scale-[0.9] transition-all duration-100 ease-in flex justify-center items-center  gap-2 px-6 py-2 bg-[#49462311] text-[#494623] rounded-full font-bold"
            href="#"
          >
            {" "}
            <img src={resumeicon} alt="" className="icon w-6 h-6" />
            Resume
          </button>
          <button
            className="resume hover:scale-[0.9] transition-all duration-100 ease-in flex justify-center  items-center gap-2 px-6 py-2 bg-[#4692DD22] text-[#4692DD] rounded-full font-bold"
            href="#"
          >
            {" "}
            <img src={globe} alt="" className="icon w-6 h-6" />
            Visit Site
          </button>
        </div>

        <button className="vote w-full hover:scale-[0.9] transition-all duration-100 ease-in  rounded-full px-6 py-2 bg-green-600 text-white font-semibold cursor-pointer">
          Up Vote
        </button>
      </motion.a>
    </>
  );
}

export default ProfileCard;
