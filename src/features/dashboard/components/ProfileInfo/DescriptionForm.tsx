import React from "react";
import Typography from "@mui/material/Typography";
import styled from "@mui/styled-engine";
import { List, ListItemText, Theme } from "@mui/material";

interface Props {}
const Div: any = styled("div")((theme: Theme) => ({
  color: "red",
  marginTop: "1rem",
}));
export const DescriptionForm = (props: Props) => {
  return (
    <>
      <Div>
        <Typography variant="h6" component="div">
          Lưa ý:
        </Typography>
        <List sx={{ paddingLeft: "2rem" }}>
          <ListItemText
            primary={`• Việc đăng ký thông tin hoàn toàn bảo mật và phục vụ cho chiến dịch tiêm chủng Vắc xin COVID - 19`}
          />
          <ListItemText
            primary={`• Xin vui lòng kiểm tra kỹ các thông tin bắt buộc(VD: Họ và tên, Ngày tháng năm sinh, Số điện thoại, Số CMND/CCCD/HC ...)`}
          />
          <ListItemText
            primary={`• Bằng việc nhấn nút "Xác nhận", bạn hoàn toàn hiểu và đồng ý chịu trách nhiệm với các thông tin đã cung cấp.`}
          />
          <ListItemText
            primary={`• Cá nhân/Tổ chức đăng ký thành công trên hệ thống sẽ được đưa vào danh sách đặt tiêm. Cơ sở y tế sẽ thông báo lịch tiêm khi có vắc xin và kế hoạch tiêm được phê duyệt. Trân trọng cảm ơn!`}
          />
        </List>
      </Div>
    </>
  );
};
