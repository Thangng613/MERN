import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { PostContext } from "../../contexts/PostContext";
import { useContext } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast = () => {
  const {
    showToast: { show, message, type },
    setShowToast,
  } = useContext(PostContext);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowToast({
      show: false,
      message: "",
      type: "success",
    });
  };

  return (
    <Stack spacing={2} sx={{ bottom: "2%", left: "2%", position: "fixed" }}>
      <Snackbar open={show} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={`${type}`}
          sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Toast;
