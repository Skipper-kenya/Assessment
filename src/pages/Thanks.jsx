import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Thanks = () => {
  const navigate = useNavigate();
  return (
    <div className="thanks-wrapper">
      <h3>Thank you for participating.</h3>
      <br />
      <p>
        my bad! i was just practicing Object Oriented Proggramming. There's
        nothing to be assesed.
      </p>
      <br />

      <Button type="primary" size="large" onClick={() => navigate("/")}>
        navigate to Homepage
      </Button>
    </div>
  );
};

export default Thanks;
