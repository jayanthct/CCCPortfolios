import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";

import Input from "./Input";


const Main = () => {
  const profile = [
    {
      name: "Samaira",
      rollno: "AP2211006999",
      link: "https://www.youtube.com/shorts/aYQ9YZpPH4k",
      img: "https://d.rapidcdn.app/snapinst?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LW11YzItMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNDc0OTgwMDIzXzE3ODU4MjQ0OTM2MzU0NjIxXzgwMzQwNzQxNDc4OTIxOTM3ODlfbi53ZWJwP3N0cD1kc3Qtd2VicF9wNjQweDY0MF9zaDAuMDgmZWZnPWV5SjJaVzVqYjJSbFgzUmhaeUk2SW1sdFlXZGxYM1Z5YkdkbGJpNHhORFF3ZURFNE1EQXVjMlJ5TG1ZM05UYzJNUzVrWldaaGRXeDBYMmx0WVdkbEluMCZfbmNfaHQ9c2NvbnRlbnQtbXVjMi0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDkmX25jX29jPVE2Y1oyQUU4NTE4N0tEZ0t5eDA4WkVZQnZSaGg4S3RRbVNpNkFjR2RnVmNZc0NWdkVhMklockJSNmphOFpEaW1hOVduM3hzJl9uY19vaGM9dlkxNllzdmxJSThRN2tOdmdFS1U0VFcmX25jX2dpZD0zNjdhMzNiNjU0N2Q0ZGZhOTRlNDhlYmJmNTYxMGE5MiZlZG09QVBzMTdDVUJBQUFBJmNjYj03LTUmb2g9MDBfQVlDRW8zZnBUb01qNkFKSXZYTWRFQTRhQVFkWTVKUEV6YTEwVFJqQVFpNFlGUSZvZT02N0M0QTM0MyZfbmNfc2lkPTEwZDEzYiIsImZpbGVuYW1lIjoiU25hcGluc3QuYXBwX3RodW1iXzQ3NDk4MDAyM18xNzg1ODI0NDkzNjM1NDYyMV84MDM0MDc0MTQ3ODkyMTkzNzg5X24ud2VicCJ9.IwfJtQUV4S81fOjkj36bdvjZjmJp6OcsmkId0wje1Ms",
    },
    {
      name: "Nithish Sri Ram",
      rollno: "AP22110010837",
      link: "https://nithish-sri-ram.github.io/My-Portfolio/",
    },
    {
      name: "A R Gopikrishna",
      rollno: "AP22110010118",
      link: "https://argopikrishna.github.io/Portfolio/",
      img: "https://argopikrishna.github.io/Portfolio/files/DP.jpg",
    },
    {
      name: "Akhilesh Chennadi",
      rollno: "AP22110010721",
      link: "https://akhileshchennadiportfolio.netlify.app/",
    },
    {
      name: "Thotakura Hemanjali",
      rollno: "AP22110010047",
      link: "https://hemanjaliportfolio.netlify.app/",
    },
    {
      name: "JayanthCT",
      rollno: "AP22110011147",
      link: "https://jayanthct.framer.website",
      img: "https://framerusercontent.com/images/2QMCgXhJKxQZ5kGqOq44aUEU20.png",
    },
    {
      name: "Sriya Balanagu",
      rollno: "AP22110010539",
      link: "https://sriyaportfolio.netlify.app/",
      img: "https://sriyaportfolio.netlify.app/assets/img/pro.jpg",
    },
    {
      name: "Rohan Praneeth Kammula",
      rollno: "AP22110011137",
      link: "https://portfoliobyrohan.netlify.app/",
    },
    {
      name: "Yashwanth Sudikonda",
      rollno: "AP22110011149",
      link: "https://portfoliobyyashwanth.netlify.app/",
      img: "https://portfoliobyyashwanth.netlify.app/assets/img/dp.jpg",
    },
  ];

  const [profiles, setProfiles] = useState(profile);

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

  return (
    <main className="min-h-screen bg-[#f7f5e9] p-10">
      <h1 className="text-[#494623] font-extrabold text-[72px] text-center">
        ({profiles.length}) <span className="font-normal">Student's </span>
        Portfolios
      </h1>
      <Input onSubmit={(data) => setProfiles([...profiles, data])} />

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {profiles.map((profile) => (
          <motion.a
            key={profile.rollno}
            href={profile.link}
            target="_blank"
            className="card cursor-pointer relative flex flex-col justify-center items-center gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={getAvatarUrl(profile.name, profile)}
              alt="avatar"
              className="w-24 h-24 rounded-full object-cover"
            />

            <p className="text-[#494623] text-lg font-semibold">
              {profile.name}
            </p>
            <p className="text-[#746f28] text-sm font-medium">
              {profile.rollno}
            </p>

            <div
              className="absolute top-4 right-4 bg-red-200 bg-opacity-40 rounded-full p-4 cursor-pointer hover:bg-opacity-60 transition"
              onClick={() => handleDelete(profile.rollno)}
            >
              <FaTrash className="text-red-600" />
            </div>
          </motion.a>
        ))}
      </div>
    </main>
  );
};

export default Main;
