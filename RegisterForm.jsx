import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  height: 100vh;
  background-color: #f8f9fa;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 320px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

const Input = styled.input`
  padding: 8px;
  margin: 8px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #333333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  transition: 0.3s ease;

  &:hover {
    background-color: #0e0e0e;
  }
`;

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost/React_SQLl_Backend/register.php",
        formData
      );
      alert("User registered successfully!");
      setFormData({ name: "", email: "", mobile: "", address: "" });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "18px",
            marginBottom: "10px",
          }}
        >
          Register
        </h2>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <Button type="submit">Register</Button>
      </Form>
    </FormContainer>
  );
};

export default RegisterForm;
