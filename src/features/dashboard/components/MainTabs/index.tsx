import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ProfileInfo } from "../ProfileInfo";
import { styled } from "@mui/material/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const LabelTab = ({ title, subTitle }: any) => {
  return (
    <Box>
      <div>{title}</div>
      <Typography variant="h6" component="h2">
        {subTitle}
      </Typography>
    </Box>
  );
};

export default function MainTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const matches = useMediaQuery("(min-width:950px)");

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          mt: 3,
          textAlign: "left",
          boxShadow: "3px 4px 20px 1px #dfdfdf",
          "& .MuiTab-root": {
            textAlign: "left",
          },
          "& .MuiTabs-indicator": {
            display: "none",
          },
          "& .Mui-selected": {
            backgroundColor: "#dfdfdf",
          },
          "& .MuiTabScrollButton-root": {
            display: "none",
          },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant={matches ? "fullWidth" : "scrollable"}
          scrollButtons="auto"
        >
          <Tab
            label={<LabelTab title="Bước 1" subTitle="Thông tin cá nhân" />}
            {...a11yProps(0)}
          />

          <Tab
            label={<LabelTab title="Bước 2" subTitle="Tiền sử bệnh" />}
            {...a11yProps(1)}
          />
          <Tab
            label={<LabelTab title="Bước 3" subTitle="Phiếu đồng ý tiêm" />}
            {...a11yProps(2)}
            disabled
          />
          <Tab
            label={<LabelTab title="Bước 4" subTitle="Hoàn thành" />}
            {...a11yProps(2)}
            disabled
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ProfileInfo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
