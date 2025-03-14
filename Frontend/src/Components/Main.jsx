import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import Input from "./Input";
import ProfileCard from "./ProfileCard";
import { useAuth } from "./AuthContext";
import LoginToShow from "./LoginToShow";
import toast from "react-hot-toast";

const Main = () => {
  const { isLoggedin } = useAuth();
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch profiles only if logged in
    if (isLoggedin) {
      axios
        .get("http://localhost:5000/see") // Add the full URL to avoid issues
        .then((response) => {
          if (Array.isArray(response.data)) {
            setProfiles(response.data); // Ensure the data is an array
          } else {
            console.error("Unexpected data format:", response.data);
            setProfiles([]); // Set to an empty array to prevent errors
          }
        })
        .catch((error) => {
          console.error("Error fetching profiles:", error);
          toast.error("Error in Fetching Data!");
        });
    }
  }, [isLoggedin]);

  return (
    <>
      <main
        className="bg-[#f7f5e9] p-10 h-full w-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='59.428' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23f7f5e9ff'/><path d='M0 70.975V47.881m20-1.692L8.535 52.808v13.239L20 72.667l11.465-6.62V52.808zm0-32.95l11.465-6.62V-6.619L20-13.24 8.535-6.619V6.619L20 13.24m8.535 4.927v13.238L40 38.024l11.465-6.62V18.166L40 11.546zM20 36.333L0 47.88m0 0v23.094m0 0l20 11.548 20-11.548V47.88m0 0L20 36.333m0 0l20 11.549M0 11.547l-11.465 6.619v13.239L0 38.025l11.465-6.62v-13.24L0 11.548v-23.094l20-11.547 20 11.547v23.094M20 36.333V13.24'  stroke-linecap='square' stroke-width='1' stroke='%2349462309' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`,
        }}
      >
        <h1 className="text-[#494623] font-extrabold text-[48px] text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            ({profiles.length}) <span className="font-normal">Student's</span>{" "}
            Portfolios
          </motion.div>
        </h1>
        <Input set={setProfiles} />
      </main>

      <div className="w-full px-[2%] py-[2%] bg-[#f7f5e9]">
        {isLoggedin ? (
          <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {profiles.map((profile, index) => (
              <ProfileCard key={index} profile={profile} set={setProfiles}/>
            ))}
          </div>
        ) : (
          <LoginToShow />
        )}
      </div>
    </>
  );
};

export default Main;
