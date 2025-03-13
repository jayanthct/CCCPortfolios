import React, { useState } from "react";
import { motion } from "framer-motion";

import Input from "./Input";
import ProfileCard from "./ProfileCard";
import { useAuth } from "./AuthContext";
import LoginToShow from "./LoginToShow";

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

const Main = () => {
  const { isLoggedin } = useAuth();
  const [profiles, setProfiles] = useState(profile);

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
        <Input onSubmit={(data) => setProfiles([...profiles, data])} />
      </main>

      {/* <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10"> */}
        {/* <ProfileCard profile={profile}></ProfileCard> */}
        {/* {isLoggedin ? <h1>Welcome</h1> : <LoginToShow></LoginToShow>} */}
      {/* </div> */}

      <div className="w-full">
        {/* <ProfileCard profile={profile}></ProfileCard> */}
        {isLoggedin ? <h1>Welcome</h1> : <LoginToShow></LoginToShow>}
      </div>
    </>
  );
};

export default Main;
