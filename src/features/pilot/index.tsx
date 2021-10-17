import React from "react";
import { useAppDispatch } from "./../../app/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export default function Pilot() {
  const dispatch = useAppDispatch();

  const handleFetchPilot = () => {
    dispatch({ type: "USER_FETCH_REQUESTED", payload: "3" });
  };
  return (
    <div>
      <button onClick={handleFetchPilot}>Click fetch pilot</button>
    </div>
  );
}
