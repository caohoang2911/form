import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../store/slices/authSlice";
// import { Dashboard } from './index';
import MainTabs from "./components/MainTabs/index";

interface Props {}

// export const Dashboard = (props: Props) => {
//   const dispatch = useAppDispatch();
//   const handleLogout = () => {
//     dispatch(logout());
//   };
//   return <button onClick={handleLogout}>Logout</button>;
// };

export const Dashboard = (props: Props) => {
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <MainTabs />
    </>
  );
};
