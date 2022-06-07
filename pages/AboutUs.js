import React, { useState } from "react";
import { Header } from "../newComponent";
import { useDispatch, useSelector } from "react-redux";
import { ChangeTheColor } from "../store/actions";

const AboutUs = () => {
  const GetData = useSelector((state) => state.ColorReducer.color);
  const [color, setColor] = useState(GetData);

  // console.log("GetData", GetData);
  const dispatch = useDispatch(GetData);

  const colorThem = () => {
    setColor(!color);
    dispatch(ChangeTheColor(!color));
  };
  return (
    <div>
      <Header changeColor={() => colorThem()} color={GetData} />
    </div>
  );
};
export default AboutUs;
