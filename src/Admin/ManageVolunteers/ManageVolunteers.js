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
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../redux/actions/users";

import SideBar from "../../SideBar/SideBar";
import AddVolunteers from "./AddVolunteers/AddVolunteers";
const { Content } = Layout;

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

function ManageVolunteers() {
  const isAddVisible = useSelector((state) => state.users.displayed);
  const isUpdateVisible = useSelector((state) => state.users.displayUpdate);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(actions.getAllUsers());
    } catch (e) {
      console.log("errroooor");
    }
    console.log("user state : ", users);
  }, []);
  
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
              Add new volunteers
            </Button>
            {isAddVisible && <AddVolunteers />}
           
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Cin</TableCell>
                  <TableCell>Birthday</TableCell>
                  <TableCell>Role</TableCell>
                  
                  <TableCell>Update</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              {users.loading && <div>Loading ... </div>}
              <TableBody>
                {!users.loading &&
                  users.list &&
                  users.list.map((user, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell> {user.firstName}</StyledTableCell>
                      <StyledTableCell> {user.lastName}</StyledTableCell>
                      <StyledTableCell> {user.email}</StyledTableCell>
                      <StyledTableCell> {user.cin}</StyledTableCell>
                      <StyledTableCell> {user.birthday}</StyledTableCell>
                      <StyledTableCell> {user.role}</StyledTableCell>
                      <StyledTableCell>
                        <Button >
                          Update{" "}
                        </Button>
                      </StyledTableCell>
                      <StyledTableCell>
                        <IconButton >
                          <DeleteIcon className="btnColorDelete" />
                        </IconButton>
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

export default ManageVolunteers;