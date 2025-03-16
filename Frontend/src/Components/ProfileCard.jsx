import { useState } from "react";

import resumeicon from "../assets/resumeicon.svg";
import globe from "../assets/global.svg";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";

import { useAuth } from "./AuthContext";

// Function to get avatar or fallback
const getAvatarUrl = (name) => {
  return `https://avatar.iran.liara.run/username?username=${name}`;
};

const handleDisabledButton = (name, rollno) => {
  const displayName = name || "";
  const match = displayName.match(/AP(\d{11})/);
  const isMatch = match && match[0] == rollno;

  return isMatch;
};

const upVote = (name, rollno, setVotes) => {
  if (!handleDisabledButton(name, rollno)) {
    const displayName = name || "";
    const match = displayName.match(/AP(\d{11})/);
    handleUpvote(match[0], rollno, setVotes);
  } else {
    toast.error("You Cant Vote to Yourself");
  }
};

//voting
const handleUpvote = async (rollno, voteto) => {
  try {
    const response = await axios.put("http://localhost:5000/upvote", {
      rollno,
      voterId: voteto,
    });

    if (response.status === 200) {
      toast.success("Vote increased successfully!");
    }
  } catch (error) {
    console.error("Error upvoting:", error);
    toast.error(error.response?.data?.error || "Failed to upvote.");
  }
};

// Function to handle profile deletion
const handleDelete = async (rollno, name, set) => {
  const displayName = name;
  const match = displayName.match(/AP(\d{11})/);
  if (match[0] == rollno) {
    try {
      const response = await axios.delete("http://localhost:5000/deleteuser", {
        data: { rollno }, // Send the rollno in the request body
      });

      if (response.status === 200) {
        toast.success("User deleted successfully!");
        // Update the state after deletion
        set((prevProfiles) =>
          prevProfiles.filter((profile) => profile.rollno !== rollno)
        );
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user. Please try again.");
    }
  } else {
    toast.error("You Don't Have Access to Delete Other User");
  }
};

function ProfileCard({ profile, set}) {
  const { user } = useAuth();
  return (
    <>
      <article
        key={profile.rollno}
        target="_blank"
        className="card relative flex flex-col justify-center items-center gap-3 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all border-1 border-[#67600f26]"
      >
        <div className="votebox flex justify-center items-center gap-4">
          <p className="text font-semibold">Total Votes : </p>
          <div className="votecount bg-[#49462338] text-[#494623] text-[18px] w-10 h-10 rounded-full font-bold flex justify-center items-center">
            {profile.votes}
          </div>
        </div>

        <img
          src={getAvatarUrl(profile.name)}
          alt="avatar"
          className="w-24 h-24 rounded-full object-cover"
        />

        <p className="text-[#494623] text-lg font-semibold">{profile.name}</p>
        <p className="text-[#746f28] text-sm font-medium">{profile.rollno}</p>
        <p className="text-[#5c3204bd] text-sm font-medium">{profile.specs}</p>

        <button
          type="button"
          className={`absolute hover:scale-[0.9] duration-100 ease-in top-4 right-4 rounded-full p-4 transition ${
            handleDisabledButton(user.displayName, profile.rollno)
              ? "bg-red-200 bg-opacity-40 hover:bg-opacity-60 cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          onClick={() => handleDelete(profile.rollno, user.displayName, set)}
          disabled={!handleDisabledButton(user.displayName, profile.rollno)}
        >
          <FaTrash
            className={
              handleDisabledButton(user.displayName, profile.rollno)
                ? "text-red-600"
                : "text-gray-600 opacity-50"
            }
          />
        </button>

        <div className="buttons flex justify-center gap-2 items-center w-full m-2">
          <button
            className="resume hover:scale-[0.9] transition-all duration-100 ease-in flex justify-center items-center  gap-2 px-6 py-2 bg-[#49462311] text-[#494623] rounded-full font-bold"
            href="#"
          >
            {" "}
            <img src={resumeicon} alt="" className="icon w-6 h-6" />
            Resume
          </button>
          <button>
            <a
              className="site hover:scale-[0.9] transition-all duration-100 ease-in flex justify-center  items-center gap-2 px-6 py-2 bg-[#4692DD22] text-[#4692DD] rounded-full font-bold"
              href={profile.portfolio_link}
              target="_blank"
            >
              {" "}
              <img src={globe} alt="" className="icon w-6 h-6" />
              Visit Site
            </a>
          </button>
        </div>

        <button
          className="vote w-full hover:scale-[0.9] transition-all duration-100 ease-in  rounded-full px-6 py-2 bg-green-600 text-white font-semibold cursor-pointer"
          onClick={() => upVote(user.displayName, profile.rollno)}
        >
          Up Vote
        </button>
      </article>
    </>
  );
}

export default ProfileCard;
