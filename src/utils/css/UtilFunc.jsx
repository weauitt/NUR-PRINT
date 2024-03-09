import React from "react";
import { CapsCircle } from "./CapsCircle";
import { Line } from "./Line";
import "./style.sass";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="overlap-group">
        <CapsCircle className="caps-circle-instance" />
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <Line className="line-instance" />
            <CapsCircle className="design-component-instance-node" />
          </div>
        </div>
      </div>
    </div>
  );
};