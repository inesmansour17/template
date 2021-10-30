import React, { useEffect } from "react";
import { Layout, Button } from "antd";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
  Box,
  Modal,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/centers";

import UpdateCenter from "./UpdateCenter/UpdateCenter";
import SideBar from "../../SideBar/SideBar";
import AddCenter from "./AddCenter/AddCenter";

const { Content } = Layout;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#DDD",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    padding: "7px 8px !important",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function ManageCenter() {
  const isAddVisible = useSelector((state) => state.centers.displayed);
  const isUpdateVisible = useSelector((state) => state.centers.displayUpdate);
  const centers = useSelector((state) => state.centers);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    try {
      dispatch(actions.fetchCenters());
    } catch (e) {
      console.log("errroooor");
    }
    console.log("center state : ", centers);
  }, []);
  const handleUpdate = (center) => {
    dispatch(actions.setSelectedCenter(center));
    dispatch(actions.setDisplayUpdate(true));
  };
  const handleDelete = (name) => {
    dispatch(actions.deleteCenter(name));
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Button
              type="primary"
              onClick={() => dispatch(actions.setDisplayed(true))}
            >
              Add new center
            </Button>
            {isAddVisible && <AddCenter />}
            {isUpdateVisible && <UpdateCenter />}
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Governorate</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Capacity</TableCell>
                  <TableCell>Vac-Type</TableCell>
                  <TableCell>Vac-Stock</TableCell>
                  <TableCell>Update</TableCell>
                  <TableCell>Delete</TableCell>
                  <TableCell>Assign Vaccine</TableCell>
                </TableRow>
              </TableHead>
              {centers.loading && <div>Loading ... </div>}
              <TableBody>
                {!centers.loading &&
                  centers.list &&
                  centers.list.map((center, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell> {center.name}</StyledTableCell>
                      <StyledTableCell> {center.governorate}</StyledTableCell>
                      <StyledTableCell> {center.city}</StyledTableCell>
                      <StyledTableCell>
                        {" "}
                        {center.center_capacity}
                      </StyledTableCell>
                      <StyledTableCell> {center.type_vaccine}</StyledTableCell>
                      <StyledTableCell>
                        {" "}
                        {center.number_vaccine}
                      </StyledTableCell>
                      <StyledTableCell>
                        <Button onClick={() => handleUpdate(center)}>
                          Update{" "}
                        </Button>
                      </StyledTableCell>
                      <StyledTableCell>
                        <IconButton onClick={() => handleDelete(center.name)}>
                          <DeleteIcon className="btnColorDelete" />
                        </IconButton>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Button onClick={() => handleOpen}>assign</Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              Hope
                            </Typography>
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                            >
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula.
                            </Typography>
                          </Box>
                        </Modal>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </Content>
      </Layout>{" "}
    </Layout>
  );
}

export default ManageCenter;
