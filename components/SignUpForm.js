// components/SignupForm.js
import { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("/api/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       // Handle success (e.g., redirect to a thank-you page)
  //       const data = await response.json();
  //       console.log(data);
       
  //     } else {
  //       // Handle error
  //       console.error("Signup failed");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      // Handle form submission (e.g., send data to an API)
      console.log("Form submitted:", formData);
    };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          className="outline-none border px-3 py-2 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="outline-none border px-3 py-2 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="outline-none border px-3 py-2 rounded-md"
        />
      </div>
      <button
        className="border rounded-md px-3 py-2 hover:bg-gray-500"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
