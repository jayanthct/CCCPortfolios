import React, { useState } from "react";
import axios from "axios"; // Import Axios

import { motion } from "framer-motion";
import DOMPurify from "dompurify";

import toast from "react-hot-toast";
import ImageSlider from "./ImageSlider";

import upload from "../assets/upload.svg";

import { X } from "lucide-react";

import LogoInfinite from "./LogoInfinite";

import { useAuth } from "./AuthContext";

function Input({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    rollno: "",
    link: "",
    file: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [file, setFile] = useState(null);

  const { isLoggedin, handleLogin, user } = useAuth();

  const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;


    if (name === "file" && files.length > 0) {
      setFile(files[0]);
      setFormData((prevData) => ({
        ...prevData,
        img: sanitizeInput(files[0].name),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: sanitizeInput(value),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedin) {
      handleLogin(); // Trigger the login if not logged in
      return;
    }

    const { name, rollno, link, img } = formData;


    if (!name || !rollno || !link) {
      setError("All fields mandatory.");
      toast.error(error);
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:5000/users/add", {
        name,
        rollno,
        portfolio_link: link,
        image_link: img || "", // Send empty string if no image
      });

      if (response.status === 201) {
        setSuccess("Portfolio added successfully! ✅");
        toast.success(success);
        setFormData({ name: "", rollno: "", link: "", img: "" }); // Clear form
        onSubmit(response.data); // Send response data to parent
      }
    } catch (e) {
      setError("Failed to submit. ❌ Try again.");
      toast.error("Failed to submit. ❌ Try again.");
    }
  };

  const handleRemove = () => {
    setFile(null);
  };

  return (
    <section className="flex justify-center w-full mt-6 items-center gap-8 md:flex-row flex-col px-[16px] lg:px-[4%] min-h-fit">
      <motion.form
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 justify-between items-start bg-white px-12 py-8 rounded space-x-4 w-full"
      >
        <div className="quickchangebuttons flex w-full justify-around items-center gap-2 mt-2 bg-[#4946233b] lg:p-2 p-3 rounded-full mb-4">
          <div
            className={`flex gap-4 px-8 cursor-pointer justify-center items-center w-full py-2 rounded-full text-[14px] lg:text-[16px] h-[52px] font-bold bg-[#494623] text-white  hover:scale-[0.9] transition-all ease-in duration-200`}
          >
            List Your Portfolio Here
          </div>
        </div>
        <fieldset className="flex w-full flex-col items-start justify-between space-y-1">
          <label className="block text-sm font-bold text-[#494623] md:text-[16px] text-[14px]">
            Full Name <span className="text-[#FF4E59]">*</span>
          </label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Full Name"
            className="w-full h-[52px] mt-1 p-2 pl-4 border-1 border-[#746f2829] rounded-[6px] bg-white cursor-text hover:outline-1 hover:outline-[#746f2862] focus:outline-2 active:border-[#494623]  focus:outline-[#746f28a0] appearance-none"
          />
        </fieldset>
        <fieldset className="flex w-full flex-col items-start justify-between space-y-1">
          <label className="block text-sm font-bold text-[#494623] md:text-[16px] text-[14px]">
            Roll Number <span className="text-[#FF4E59]">*</span>
          </label>
          <input
            required
            type="text"
            name="rollno"
            pattern="^AP\d{11}$"
            value={formData.rollno}
            onChange={handleChange}
            placeholder="AP2XXXXXX"
            className="w-full h-[52px] mt-1 p-2 pl-4 border-1 border-[#746f2829] rounded-[6px] bg-white cursor-text hover:outline-1 hover:outline-[#746f2862] focus:outline-2 active:border-[#494623]  focus:outline-[#746f28a0] appearance-none"
          />
        </fieldset>
        <fieldset className="flex w-full flex-col items-start justify-between space-y-1">
          <label className="block text-sm font-bold text-[#494623] md:text-[16px] text-[14px]">
            Portfolio Link <span className="text-[#FF4E59]">*</span>
          </label>
          <input
            required
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="https://myportfolio.com"
            className="w-full h-[52px] mt-1 p-2 pl-4 border-1 border-[#746f2829] rounded-[6px] bg-white cursor-text hover:outline-1 hover:outline-[#746f2862] focus:outline-2 active:border-[#494623]  focus:outline-[#746f28a0] appearance-none"
          />
        </fieldset>

        <fieldset className="flex w-full flex-col items-start justify-between space-y-2">
          <label className="block text-sm font-semibold text-[#494623] md:text-[16px] text-[14px]">
            Upload Resume <span className="text-[#FF4E59]">*</span>
          </label>
          <div className="relative w-full h-[56px] mt-1 p-2 border-2 border-dashed border-[#746f28a0] rounded-[8px] bg-[#f9f9f9] hover:bg-[#f4f4f4] cursor-pointer transition duration-300 ease-in-out">
            <input
              required
              type="file"
              accept="application/pdf"
              onChange={handleChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <div className="flex items-center justify-center h-full gap-2 px-4">
              <img src={upload} alt="" className="upload w-4 h-4" />
              <p className="text-sm text-[#494623]">
                {file ? file.name : "Click to upload or drag and drop"}
              </p>
            </div>
          </div>

          {file && (
            <div className="flex items-center mt-2 gap-2">
              <a
                href={URL.createObjectURL(file)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {file.name}
              </a>
              <button onClick={handleRemove} className="text-red-500">
                <X size={16} />
              </button>
            </div>
          )}

          <span className="text-xs text-gray-500">
            Only Accepted format: PDF
          </span>
        </fieldset>

        <button
          type="submit"
          className="bg-[#494623] hover:bg-[#746f28] text-white px-4 py-2 rounded-full cursor-pointer w-full"
        >
          Submit
        </button>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="imageshowcase flex flex-col justify-between items-center md:w-[50%] w-full"
      >
        <ImageSlider></ImageSlider>
        <LogoInfinite></LogoInfinite>
      </motion.div>
    </section>
  );
}

export default Input;
