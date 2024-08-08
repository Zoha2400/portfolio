"use client";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    about: "",
    experience: "",
    skills: "",
    education: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="w-full min-h-screen  flex justify-center items-center bg-gradient-to-r from-purple-800 to-blue-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full m-4 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <h1 className="text-2xl mb-6 font-bold col-span-full">
          Resume Information
        </h1>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="surname" className="block text-sm font-medium mb-1">
            Surname:
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
            required
          />
        </div>

        <div className="mb-4 col-span-full">
          <label htmlFor="about" className="block text-sm font-medium mb-1">
            About:
          </label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
            required
          />
        </div>

        <div className="mb-4 col-span-full">
          <label
            htmlFor="experience"
            className="block text-sm font-medium mb-1"
          >
            Experience:
          </label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            rows="6"
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
            required
          />
        </div>

        <div className="mb-4 col-span-full">
          <label htmlFor="skills" className="block text-sm font-medium mb-1">
            Skills:
          </label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
            required
          />
        </div>

        <div className="mb-4 col-span-full">
          <label htmlFor="education" className="block text-sm font-medium mb-1">
            Education:
          </label>
          <textarea
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded col-span-full"
        >
          Get your resume
        </button>
      </form>
    </div>
  );
}
