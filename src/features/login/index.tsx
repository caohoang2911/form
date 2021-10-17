import React, { ChangeEvent, ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { login, search } from "../../store/slices/authSlice";
import { useAppDispatch } from "./../../app/hooks";

interface Props {}

export default function Login({}: Props): ReactElement {
  const dispatch = useAppDispatch();
  const [info, setInfo] = useState({ username: "", password: "" });

  const [keysearch, setSearch] = useState<string>("");

  const auth = useSelector((state: RootState) => state.auth.auth);
  const logging = useSelector((state: RootState) => state.auth.logging);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInfo((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(login(info));
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    dispatch(search(keysearch));
  };

  return (
    <>
      <input type="text" placeholder="search" onChange={handleSearch} />
      <form onSubmit={onSubmitLogin}>
        <input type="text" name="username" onChange={handleChange} />
        <input type="text" name="password" onChange={handleChange} />
        <button type="submit">{logging ? "Logging" : "Sumbit"}</button>
      </form>
    </>
  );
}
