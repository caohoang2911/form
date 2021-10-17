import {
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import BootstrapInput from "../../../../components/BootstrapInput";
import { DescriptionForm } from "./DescriptionForm";
import SendIcon from "@mui/icons-material/Send";
import { DesktopDatePicker } from "@mui/lab";
import { useForm, NestedValue } from "react-hook-form";
import { register } from "./../../../../serviceWorker";
import { useEffect } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});



const styleLabel = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#111111",
};
const Required = () => {
  return <span style={{ color: "red" }}>&nbsp;(*)</span>;
};

type Option = {
  label: string;
  value: string;
};

const FormProfileInfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<{
    name: string;
    gender: number | string;
  }>({
    defaultValues: { name: "", gender: "" },
  });

  // useEffect(() => {
  //   register("name", {
  //     validate: (value: any) => !!value || "Yêu cầu họ và tên",
  //   });
  //   register("gender", {
  //     validate: (value: any) => !!value || "Yêu cầu giới tính.",
  //   });
  // }, [register]);
  console.log(errors, "errros");

  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data, null)));
  return (
    <form onSubmit={onSubmit}>
      <Box>
        <FormGroup>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel sx={styleLabel} shrink htmlFor="bootstrap-input">
                  Đăng ký tiêm mũi thứ <Required />
                </InputLabel>
                <BootstrapInput defaultValue="" id="bootstrap-inpsut" />
              </FormControl>
            </Grid>
          </Grid>
        </FormGroup>
        <FormGroup>
          <Typography variant="h6" sx={{ my: 2 }} color="initial">
            1. Thông tin người đăng ký tiêm
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel sx={styleLabel} shrink htmlFor="bootstrap-input">
                  Họ và tên
                  <Required />
                </InputLabel>
                <BootstrapInput
                  {...register("name", { required: true, maxLength: 10 })}
                  error={Boolean(errors?.name)}
                  placeholder="Họ và tên"
                  defaultValue=""
                  // onChange={(event) => {
                  //   setValue("name", event?.target.value as string);
                  // }}
                  id="bootstrap-input"
                />
                <FormHelperText error={Boolean(errors?.name)}>
                  {/* {errors?.name?.message} */}
                  {Boolean(errors?.name) && "Required"}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel sx={styleLabel} shrink htmlFor="bootstrap-input">
                  Ngày sinh <Required />
                </InputLabel>
                <Box
                  sx={{
                    marginTop: "1.5rem",
                    "& .MuiFormControl-root": {
                      width: "100%",
                    },
                  }}
                >
                  <DesktopDatePicker
                    inputFormat="MM/dd/yyyy"
                    value={new Date()}
                    onChange={() => { }}
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        sx={{
                          width: "100%",
                          "& .MuiOutlinedInput-input": {
                            paddingTop: "7.4px",
                            paddingBottom: "7.4px",
                          },
                        }}
                      />
                    )}
                  />
                </Box>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel sx={styleLabel} shrink htmlFor="bootstrap-input">
                  Giới tính <Required />
                </InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  error={Boolean(errors?.gender)}
                  onChange={(event) => {
                    setValue("gender", event.target.value as number);
                  }}
                  sx={{
                    "& .MuiSelect-select": {
                      paddingTop: "6px",
                      paddingBottom: "6px",
                    },
                  }}
                  input={<BootstrapInput />}
                >
                  <MenuItem value={1}>Nam</MenuItem>
                  <MenuItem value={2}>Nữ</MenuItem>
                  <MenuItem value={3}>Khác</MenuItem>
                </Select>
                <FormHelperText error={Boolean(errors?.gender)}>
                  {errors?.gender?.message}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel sx={styleLabel} shrink htmlFor="bootstrap-input">
                  Số điện thoại <Required />
                </InputLabel>
                <BootstrapInput
                  placeholder="Số điện thoại"
                  id="bootstrap-input"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Box sx={{ my: 2 }}></Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel sx={styleLabel} shrink htmlFor="bootstrap-input">
                  Email
                </InputLabel>
                <BootstrapInput placeholder="Email" id="bootstrap-input" />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel sx={styleLabel} shrink htmlFor="bootstrap-input">
                  Số CMND/CCCD/HC <Required />
                </InputLabel>
                <BootstrapInput
                  placeholder="Số CMND/CCCD/HC"
                  id="bootstrap-input"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel sx={styleLabel} shrink htmlFor="bootstrap-input">
                  Số thẻ BHYT
                </InputLabel>
                <BootstrapInput
                  placeholder="Số thẻ BHYT"
                  id="bootstrap-input"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel sx={styleLabel} shrink htmlFor="bootstrap-input">
                  Nghề nghiệp
                </InputLabel>
                <BootstrapInput
                  placeholder="Nghề nghiệp"
                  id="bootstrap-input"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Box sx={{ my: 2 }}></Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel sx={styleLabel} shrink htmlFor="bootstrap-input">
                  Số CMND/CCCD/HC <Required />
                </InputLabel>
                <BootstrapInput
                  placeholder="Số CMND/CCCD/HC"
                  id="bootstrap-input"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={9}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel sx={styleLabel} shrink htmlFor="bootstrap-input">
                  Đơn vị công tác
                </InputLabel>
                <BootstrapInput
                  placeholder="Đơn vị công tác"
                  id="bootstrap-input"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Box sx={{ my: 2 }}></Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel sx={styleLabel} shrink htmlFor="bootstrap-input">
                  Dân tộc
                </InputLabel>
                <BootstrapInput placeholder="Dân tộc" id="bootstrap-input" />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel sx={styleLabel} shrink htmlFor="bootstrap-input">
                  Quốc tịch
                </InputLabel>
                <BootstrapInput placeholder="Quốc tịch" id="bootstrap-input" />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel sx={styleLabel} shrink htmlFor="bootstrap-input">
                  Nhóm ưu tiên <Required />
                </InputLabel>
                <BootstrapInput
                  placeholder="Nhóm ưu tiên"
                  id="bootstrap-input"
                />
              </FormControl>
            </Grid>
          </Grid>
        </FormGroup>
        <FormGroup>
          <Typography variant="h6" sx={{ my: 2 }} color="initial">
            2. Thông tin đăng ký tiêm chủng
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel sx={styleLabel} shrink htmlFor="bootstrap-input">
                  Email
                </InputLabel>
                <BootstrapInput placeholder="Email" id="bootstrap-input" />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel sx={styleLabel} shrink htmlFor="bootstrap-input">
                  Số CMND/CCCD/HC <Required />
                </InputLabel>
                <BootstrapInput
                  placeholder="Số CMND/CCCD/HC"
                  id="bootstrap-input"
                />
              </FormControl>
            </Grid>
          </Grid>
        </FormGroup>
      </Box>
      <DescriptionForm />
      <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
        <Button
          type="button"
          sx={{ borderColor: "red", color: "red" }}
          variant="outlined"
        >
          Huỷ bỏ
        </Button>
        <Box sx={{ width: "2rem" }}></Box>
        <Button
          type="submit"
          sx={{ background: "#556ee6" }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Tiếp tục
        </Button>
      </Box>
    </form>
  );
};
export default FormProfileInfo;
