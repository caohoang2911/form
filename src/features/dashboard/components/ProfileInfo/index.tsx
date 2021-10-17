import { useState } from "react";
import FormProfileInfo from "./FormProfileInfo";
import OptionTab from "./OptionTab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";
interface Props {}

export const ProfileInfo = (props: Props) => {
  const [option, setOption] = useState(0);

  return (
    <>
      <OptionTab
        value={option}
        handleSelect={(e: any) => {
          setOption(e.target.value);
        }}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <FormProfileInfo />
      </LocalizationProvider>
    </>
  );
};
