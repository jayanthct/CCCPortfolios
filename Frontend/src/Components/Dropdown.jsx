import { useState } from "react";
import Select from "react-select";

const specs = [
  {
    value: "Artificial Intelligence and Machine Learning",
    label: "Artificial Intelligence and Machine Learning",
  },
  { value: "Big Data", label: "Big Data" },
  { value: "Cloud Computing", label: "Cloud Computing" },
  { value: "Cybersecurity", label: "Cybersecurity" },
];

const customStyles = {
  control: (base, state) => ({
    ...base,
    width: "100%",
    height: "52px",
    marginTop: "-0.5rem",
    padding: "8px 16px",
    borderWidth: "1px",
    boxShadow: "0px 1px 12px 0px rgba(144, 29, 120, 0.08)",
    borderColor: state.isFocused ? "#494623a0" : "#161b2d29",
    borderRadius: "6px",
    backgroundColor: "white",
    cursor: "pointer",
    outline: state.isFocused ? "2px solid #494623a0" : "none",
    "&:hover": {
      outline: "1px solid #49462362",
    },
  }),

  menu: (base) => ({
    ...base,
    backgroundColor: "white",
    borderRadius: "6px",
    boxShadow: "0px 1px 12px 0px rgba(144, 29, 120, 0.08)",
    padding: "5px 0",
  }),
  option: (base, state) => ({
    ...base,
    padding: "10px 15px",
    backgroundColor: state.isSelected
      ? "#494623"
      : state.isFocused
      ? "#494623"
      : "white",
    color: state.isSelected ? "white" : "#161b2d",
    transition: "all 150ms ease-in",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#494623",
      color: "white",
    },
  }),

  multiValue: () => ({
    display: "none",
  }),
};

const Dropdown = ({ formData, setFormData }) => {
  const handleChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      specs: selectedOption?.value || "",
    }));
  }

  return (
    <div className="w-full">
      {/* Label */}
      <label className="block font-bold text-[#494623] mb-4">
        Specialization <span className="text-[#FF4E59]">*</span>
      </label>

      {/* Select Box */}
      <Select
        styles={customStyles}
        options={specs}
        placeholder="Select Specialization"
        value={specs.find(
          (option) => option.value === formData["specs"]
        )}
        onChange={handleChange}
        getOptionLabel={(e) => (
          <div className="flex items-center">
            <span>{e?.label || "N/A"}</span>
          </div>
        )}
      />
    </div>
  );
};

export default Dropdown;
