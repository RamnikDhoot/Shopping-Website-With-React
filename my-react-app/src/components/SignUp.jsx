import React, { useState, useEffect } from "react";
import { User, Mail, Lock } from "react-feather";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "/src/assets/CSS/Signin.css";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordDescription, setPasswordDescription] = useState(
    "Enter a password to see its strength."
  );
  const [progressBarColor, setProgressBarColor] = useState("");
  const navigate = useNavigate(); // Initialize the navigate hook

  useEffect(() => {
    calculateStrength();
  }, [formData.password]);

  const calculateStrength = () => {
    let strength = 0;
    const { password } = formData;
    if (password.length >= 6) strength += 20;
    if (/[A-Z]/.test(password)) strength += 20;
    if (/[a-z]/.test(password)) strength += 20;
    if (/[0-9]/.test(password)) strength += 20;
    if (/[^A-Za-z0-9]/.test(password)) strength += 20;

    setPasswordStrength(strength);

    let description = "";
    let color = "";
    if (strength < 40) {
      description = "Weak - Try adding numbers or special characters.";
      color = "bg-danger";
    } else if (strength < 60) {
      description = "Moderate - Improve strength with mixed case letters.";
      color = "bg-warning";
    } else if (strength <= 80) {
      description = "Good - Make it stronger with more unique characters.";
      color = "bg-info";
    } else {
      description = "Strong - Great job!";
      color = "bg-success";
    }

    setPasswordDescription(description);
    setProgressBarColor(color);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a signup process
    if (formData.password === formData.confirmPassword && passwordStrength >= 60) {
      alert("Your account has been created successfully!");
      navigate("/signin"); // Redirect to sign-in page
    } else {
      alert("Please ensure the passwords match and meet the strength requirements.");
      // Optionally clear the form or password fields here
      setFormData({ ...formData, password: "", confirmPassword: "" });
    }
  };

  return (
    <div className="text-center">
      {/* Navbar and form code remains unchanged */}

      {/* Password strength indicator and footer code remains unchanged */}
    </div>
  );
}

export default Signup;
