import React from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};
const Loading = (props) => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={props.status === true ? handleOpen : handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{ overflowY: "scroll" }}
      >
        <Fade in={props.status}>
          <Box sx={style}>
            <div className="lds-ripple">
              <div></div>
              <div></div>
              <p style={{ textAlign: "center" }}>Loading</p>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Loading;
