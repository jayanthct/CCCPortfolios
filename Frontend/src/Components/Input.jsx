import React, { useState } from "react";

function Input({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    rollno: "",
    link: "",
    img: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, rollno, link } = formData;
    if (!name || !rollno || !link) {
      setError("All fields except Image are mandatory.");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("Form submitted successfully!");
    console.log(formData);

    // Send formData to parent
    onSubmit(formData);

    // Clear form after submission
    setFormData({
      name: "",
      rollno: "",
      link: "",
      img: "",
    });
  };

  return (
    <section className="flex justify-center mt-6 items-center gap-4 md:flex-row flex-col ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 justify-between items-start bg-white px-12 py-8 rounded space-x-4 w-fit"
      >
        <div className="flex w-full flex-col items-start justify-between space-y-1">
          <label className="text-[#494623] font-bold mb-1">
            Name:<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border w-full border-[#494623] rounded px-2 py-1 focus:outline-none focus:border-[#746f28] hover:border-[#746f28] active:border-[#494623] transition duration-300"
          />
        </div>

        <div className="flex w-full flex-col items-start justify-between space-y-1">
          <label className="text-[#494623] font-bold mb-1">
            Roll Number:<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="rollno"
            value={formData.rollno}
            onChange={handleChange}
            className="border w-full border-[#494623] rounded px-2 py-1 focus:outline-none focus:border-[#746f28] hover:border-[#746f28] active:border-[#494623] transition duration-300"
          />
        </div>

        <div className="flex flex-col w-full items-start justify-between space-y-1">
          <label className="text-[#494623] font-bold mb-1">
            Portfolio Link:<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="border w-full border-[#494623] rounded px-2 py-1 focus:outline-none focus:border-[#746f28] hover:border-[#746f28] active:border-[#494623] transition duration-300"
          />
        </div>

        <div className="flex flex-col items-start justify-between space-y-1 w-full">
          <label className="text-[#494623] font-bold mb-1">
            Image Link (Optional):
          </label>
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
            className="border border-[#494623] rounded px-2 py-1 focus:outline-none w-full focus:border-[#746f28] hover:border-[#746f28] active:border-[#494623] transition duration-300"
          />
        </div>

        <button
          type="submit"
          className="bg-[#494623] hover:bg-[#746f28] text-white  px-4 py-2 rounded-full cursor-pointer w-full"
        >
          Submit
        </button>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </form>


      <img src="https://i.ytimg.com/vi/7Aw7K3f9_Xc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBlZYrLdZ3xTplz342JdC3rW73I3w" alt="" className="w-[50%] h-fill" />
    </section>
  );
}

export default Input;
