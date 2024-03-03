import React, { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "antd";

const Home = ({ handleProceed }) => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleCheckProceed = () => {
    if (code === "RASTA") {
      handleProceed();
      navigate("/question");
    } else {
      toast.error("please use the code 'RASTA'");
    }
  };

  return (
    <div className="home-wrapper">
      <div>
        <h1>Welcome to rastaTech Assessment</h1>
        <h3>use the code 'RASTA' to enter the assessment</h3>
        <Input
          size="large"
          placeholder="Your Code"
          onChange={(e) => setCode(e.target.value)}
        />
        <Button type="primary" size="large" onClick={handleCheckProceed}>
          Proceed to the Assessment
        </Button>
      </div>
    </div>
  );
};

export default Home;
