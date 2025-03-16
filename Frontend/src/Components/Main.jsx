import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import Input from "./Input";
import ProfileCard from "./ProfileCard";
import { useAuth } from "./AuthContext";
import LoginToShow from "./LoginToShow";
import toast from "react-hot-toast";

import PaginationRounded from "./PaginationRounded";

const Main = () => {
  const { isLoggedin } = useAuth();
  const [profiles, setProfiles] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const indexOfLastProfile = currentPage * itemsPerPage;
  const indexOfFirstProfile = indexOfLastProfile - itemsPerPage;
  const currentProfiles = profiles.slice(
    indexOfFirstProfile,
    indexOfLastProfile
  );

  useEffect(() => {
    if (isLoggedin) {
      axios
        .get("http://localhost:5000/see")
        .then((response) => {
          if (Array.isArray(response.data)) {
            setProfiles(response.data);
            setCurrentPage(1); // Reset page on data change
          } else {
            console.error("Unexpected data format:", response.data);
            setProfiles([]);
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
      <main className="bg-[#f7f5e9] p-10 h-full w-full">
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

      <div className="w-full px-[2%] py-[2%] bg-[#f7f5e9] flex flex-col justify-center items-center">
        {isLoggedin ? (
          <>
            <p className="textheading mb-4 font-bold text-[24px] text-[#494623] self-start">
              Top 3 Profiles:⭐
            </p>
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
              {profiles
                .slice()
                .sort((a, b) => b.votes - a.votes)
                .slice(0, 3)
                .map((profile, index) => (
                  <ProfileCard
                    key={`top-${index}`}
                    profile={profile}
                    set={setProfiles}
                  />
                ))}
            </div>

            <p className="textheading mb-4 font-bold text-[24px] text-[#494623] self-start">
              Recently Added:
            </p>
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {currentProfiles.map((profile, index) => (
                <ProfileCard
                  key={`recent-${index}`}
                  profile={profile}
                  set={setProfiles}
                />
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <PaginationRounded
                count={Math.ceil(profiles.length / itemsPerPage)}
                page={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </>
        ) : (
          <LoginToShow />
        )}
      </div>
    </>
  );
};

export default Main;
