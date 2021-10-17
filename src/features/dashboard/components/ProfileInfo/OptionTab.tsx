import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const OptionTab = ({ handleSelect, value }: any) => {
  return (
    <Box sx={{ display: "fex", justifyContent: "center" }}>
      <FormControl component="fieldset">
        <RadioGroup
          value={value}
          onChange={handleSelect}
          row
          aria-label="gender"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="0"
            control={<Radio />}
            label="Đăng ký bản thân"
          />
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="Đăng ký cho người thân"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default OptionTab;
