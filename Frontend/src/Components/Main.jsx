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
    {
      name: "Avula Manaswini Reddy",
      rollno: "AP22110010706",
      link: "https://manaswinia-portfolio.netlify.app/",
    },
    {
      name: "Avinash Reddy Pothireddy",
      rollno: "AP22110010006",
      link: "https://avinashreddyportfolio.netlify.app/",
      img: "https://avinashreddyportfolio.netlify.app/img/file.png",
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
      img: "https://res.cloudinary.com/dsqztv2t1/image/upload/v1696940910/Assests/c9i37bvvd6mlrrwku1gi.jpg",
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
      img: "https://unique-rabanadas-90e7d0.netlify.app/about.jpg",
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
      img: "https://portfoliobylikhith.netlify.app/About%20me.JPG",
    },
    {
      name: "SRI HASITHA GUDIPATI",
      rollno: "AP22110010075",
      link: "https://srihasithagudipati.netlify.app/",
      img: "https://srihasithagudipati.netlify.app/assets/profile-pic.jpg",
    },
    {
      name: "YADLA SRIJA",
      rollno: "AP22110010108",
      link: "https://srijayadla.netlify.app/",
      img: "https://srijayadla.netlify.app/DP.jpg",
    },
    {
      name: "Shaik Asif Baji",
      rollno: "AP22110010419",
      link: "https://asifbaji-portfolio-main-a6ede2.netlify.app",
      img: "https://asifbaji-portfolio-main-a6ede2.netlify.app/assets/img/asif.jpg",
    },
    {
      name: "Yelay Sai Chandana Sri",
      rollno: "AP22110011323",
      link: "https://saichandanasriyelay.github.io/Student-Portfolio/",
      img: "https://saichandanasriyelay.github.io/Student-Portfolio/images/Miss%20chandana.jpg",
    },
    {
      name: "Charan Aravind",
      rollno: "AP22110011417",
      link: "https://portfolio-charan-aravinds-projects.vercel.app/",
      img: null,
    },
    {
      name: "V Dhanush",
      rollno: "AP22110010017",
      link: "https://dhanushvemulapalli.github.io/Portofolio",
      img: null,
    },
    {
      name: "SATWIKA BOYAPATI",
      rollno: "AP22110010913",
      link: "https://satwikaboyapati.netlify.app/",
      img: null,
    },
    {
      name: "Purna Tejitha Daggubati",
      rollno: "AP22110011306",
      link: "https://purnatejitha.netlify.app/",
      img: "https://purnatejitha.netlify.app/assets/img/me.jpg",
    },
    {
      name: "D. Afrid",
      rollno: "AP22110011332",
      link: "https://github.com/Afrid21/portfolio",
      img: null,
    },
    {
      name: "Nelakuditi Jaya sri sai",
      rollno: "AP22110011319",
      link: "https://jayasrisai2004.github.io/portfolio/",
      img: null,
    },
    {
      name: "K. Surya Vamsi",
      rollno: "AP22110011010",
      link: "https://k-surya-vamsi.github.io/Portfolio/",
      img: null,
    },
    {
      name: "Chakilam Srija",
      rollno: "AP22110010418",
      link: "https://srija-portfolio-9caff5.netlify.app/",
      img: null,
    },
    {
      name: "Nikitha Sri",
      rollno: "AP22110010351",
      link: "https://extraordinary-cascaron-3af7c5.netlify.app/",
      img: null,
    },
    {
      name: "Vaishnovi Paladugu",
      rollno: "AP22110010420",
      link: "https://vaishnovi-portfolio.netlify.app/",
      img: null,
    },
    {
      name: "MUKHESH KUMAR REDDY",
      rollno: "AP22110011614",
      link: "https://mukheshkumarreddy.netlify.app/",
      img: null,
    },
    {
      name: "Atmakuru Sathwik",
      rollno: "AP22110011170",
      link: "https://sathwik1923.github.io/portfoliosample/",
      img: null,
    },
    {
      name: "Gajja Boaz",
      rollno: "AP22110011165",
      link: "https://boazgajja.github.io/MyPortfolio/",
      img: null,
    },
    {
      name: "Golla Srividya",
      rollno: "AP22110011401",
      link: "https://gollasrividya.netlify.app/",
      img: null,
    },
    {
      name: "AP22110011562",
      rollno: "AP22110011562",
      link: "https://vishnuvardhan-responsive-portfolio.netlify.app/",
      img: null,
    },
    {
      name: "Bhowmik Chawda",
      rollno: "AP22110010962",
      link: "https://portfolio-beige-two-18.vercel.app",
      img: null,
    },
    {
      name: "Amulya Rachapudi",
      rollno: "AP22110010430",
      link: "https://amulya-portfolioresume.netlify.app/",
      img: null,
    },
    {
      name: "ILLURU VIJAY KUMAR REDDY",
      rollno: "AP22110011593",
      link: "https://vijayilluru-portfolio.netlify.app/",
      img: null,
    },
    {
      name: "Keerthan Reddy Oduru",
      rollno: "AP22110011363",
      link: "https://okeerthan-portfolio.netlify.app/",
      img: null,
    },
    {
      name: "Venna Leena Reddy",
      rollno: "AP22110010428",
      link: "https://leenareddyportfolio.netlify.app/",
      img: null,
    },
    {
      name: "Namala Dhanush",
      rollno: "AP22110010995",
      link: "https://dhanushnamala.github.io/PersonalPortfolio/",
      img: null,
    },
    {
      name: "Pasam Bindu",
      rollno: "AP22110011135",
      link: "https://bindu2306.github.io/portfolio/",
      img: null,
    },
    {
      name: "KAMMARA KESAVA",
      rollno: "AP22110011172",
      link: "https://keshava-portfolio.netlify.app/",
      img: "https://keshava-portfolio.netlify.app/images/log.png",
    },
    {
      name: "Venkata Suraj Bankupalli",
      rollno: "",
      link: "https://student-portfolio-tal6.vercel.app/",
      img: "https://student-portfolio-tal6.vercel.app/wedxwqx.jpg",
    },
    {
      name: "Kesava Sai Ayyappa Yakkala",
      rollno: "AP22110010394",
      link: "https://keshavyakkalaportfoliotrain.netlify.app/#contact",
      img: "https://keshavyakkalaportfoliotrain.netlify.app/photo.jpg.png",
    },
    {
      name: "Vejju Mohan Raghava",
      rollno: "AP22110011428",
      link: "https://visionary-daffodil-492375.netlify.app/",
      img: null,
    },

    {
      name: "Jagadeesh Ospari",
      rollno: "AP22110011304",
      link: "https://thisisjagadeesh7569.netlify.app/",
      img: null
    },
    {
      name: "M.V.N. Sahithi",
      rollno: "AP22110011133",
      link: "https://sahithimvn09.github.io/Portfolio/",
      img: null
    },
    {
      name: "M. Tarun Reddy",
      rollno: "Ap22110011314",
      link: "https://eloquent-phoenix-c7c298.netlify.app/",
      img: null
    },
    {
      name: "P. Vamsi",
      rollno: "AP22110011376",
      link: "https://portfolio-p-vamsi.netlify.app/",
      img: null
    },
    {
      name: "K. Pranav Rithwik",
      rollno: "AP22110010337",
      link: "https://pranavportfolio8080.netlify.app/",
      img: null
    },
    {
      name: "Jagan Venkat Merugu",
      rollno: "AP22110011396",
      link: "https://venkat4097.github.io/Portfolio/",
      img: null
    },
    {
      name: "Gali Lakshmi Pujitha",
      rollno: "AP22110010206",
      link: "https://portfolio-glp-232abd.netlify.app/",
      img: null
    },
    {
      name: "Shaik Nagur Meeravali",
      rollno: "AP22110010061",
      link: "https://nagur-meera.netlify.app/",
      img: null
    },
    {
      name: "Rishitha Pentyala",
      rollno: "AP22110010054",
      link: "https://courageous-florentine-1b786d.netlify.app/",
      img: null
    },
    {
      name: "Guthi Akash",
      rollno: "AP22110011411",
      link: "https://akashguthi.github.io/Portfolio/",
      img: null
    },
    {
      name: "V Bala Narendra Kumar",
      rollno: "AP22110011386",
      link: "https://balanarendra-vallamsetty.github.io/portfolio/",
      img: null
    },
    {
      name: "Harshith Sanisetty",
      rollno: "AP22110010826",
      link: "https://harshithsanisettyportfolio.netlify.app/",
      img: null
    },
    {
      name: "Padyala Chakravarthi",
      rollno: "AP22110011269",
      link: "https://chakri-padyala.netlify.app/",
      img: null
    },
    {
      name: "N. Poojitha Sai Priya",
      rollno: "AP221100110187",
      link: "https://poojithasaipriya1.netlify.app/",
      img: null
    },
    {
      name: "Shaik Khajavali",
      rollno: "AP22110011377",
      link: "https://khajavali7869.github.io/portfolio/",
      img: null
    },
    {
      name: "B. Venkata Gopi Chand",
      rollno: "AP22110011303",
      link: "https://thisisgopi.netlify.app/",
      img: null
    },
    {
      name: "Neshab Alam Ansari",
      rollno: "AP22110011516",
      link: "https://neshabansari.netlify.app/",
      img: null
    }
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
