import React from "react";
import { motion } from "framer-motion";

const profiles = [
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
    img:"https://framerusercontent.com/images/2QMCgXhJKxQZ5kGqOq44aUEU20.png"
  },
  {
    name: "Sriya Balanagu",
    rollno: "AP22110010539",
    link: "https://sriyaportfolio.netlify.app/",
    img:"https://sriyaportfolio.netlify.app/assets/img/pro.jpg"
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
    img:"https://portfoliobyyashwanth.netlify.app/assets/img/dp.jpg"
  },
  {
    name: "Avula Manaswini Reddy",
    rollno: "AP22110010706",
    link: "https://manaswinia-portfolio.netlify.app/",
  },
  {
    name: "Avinash Reddy Pothireddy",
    rollno: "AP22110010006",
    link: "https://avinashreddyportfolio.netlify.app/",
    img:"https://avinashreddyportfolio.netlify.app/img/file.png"
  },
  {
    name: "Tejaswi Darsi",
    rollno: "AP22110011503",
    link: "https://tejaswi-portifolio.netlify.app/",
  },
  {
    name: "Sushil Pandey",
    rollno: "AP22110010274",
    link: "https://contactsushil.me",
    img:"https://res.cloudinary.com/dsqztv2t1/image/upload/v1696940910/Assests/c9i37bvvd6mlrrwku1gi.jpg"
  },
  {
    name: "Donga Surendra",
    rollno: "AP22110011123",
    link: "https://portfolio-surendra-dongas-projects.vercel.app/",
  },
  {
    name: "Nikhil Sri Ram Pulluri",
    rollno: "AP22110011164",
    link: "https://student-portfolio-snowy.vercel.app/",
  },
  {
    name: "Sambangi Mouli",
    rollno: "AP22110011243",
    link: "https://moulisportofolio.netlify.app/",
  },
  {
    name: "V.Neeharika",
    rollno: "AP22110010906",
    link: "https://unique-rabanadas-90e7d0.netlify.app/",
    img:"https://unique-rabanadas-90e7d0.netlify.app/about.jpg"
  },
  {
    name: "Bahadursha Kowshik Sree",
    rollno: "AP22110011298",
    link: "https://gojo-domain-expansion.netlify.app/",
  },
  {
    name: "Likhith Edupuganti",
    rollno: "AP22110010386",
    link: "https://portfoliobylikhith.netlify.app/",
    img:"https://portfoliobylikhith.netlify.app/About%20me.JPG"
  },
  {
    name: "SRI HASITHA GUDIPATI",
    rollno: "AP22110010075",
    link: "https://srihasithagudipati.netlify.app/",
    img:"https://srihasithagudipati.netlify.app/assets/profile-pic.jpg"
  },
  {
    name: "YADLA SRIJA",
    rollno: "AP22110010108",
    link: "https://srijayadla.netlify.app/",
    img:"https://srijayadla.netlify.app/DP.jpg"
  },
];

const getAvatarUrl = (fullName, profile) => {
  if (profile?.img) {
    return profile.img;
  } else {
    const [firstName, lastName] = fullName.split(" ");
    const username = `${firstName}${lastName}`.toLowerCase();
    return `https://avatar.iran.liara.run/username?username=${username}`;
  }
};

const Main = () => {
  return (
    <main className="min-h-screen bg-[#f7f5e9] p-10">
      <h1 className="text-[#494623] font-extrabold text-[72px] text-center">
        Portfolios
      </h1>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {profiles.map((profile) => (
          <motion.a
            key={profile.rollno}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex flex-col justify-center items-center gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
          </motion.a>
        ))}
      </div>
    </main>
  );
};

export default Main;
