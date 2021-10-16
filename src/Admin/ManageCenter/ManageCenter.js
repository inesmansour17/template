import SideBar from "../../SideBar/SideBar";
import AddCenter from "./AddCenter/AddCenter";
import { Layout, Button } from "antd";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../redux/actions/centers' 

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

function ManageCenter() {
  
  const centers = useSelector((state) => state.centers)   
  const dispatch = useDispatch() 
  
  useEffect(() => {
    try {
      dispatch(actions.fetchCenters()) 
    } catch (e) {
      console.log('errroooor')
    }  
    console.log('date', centers)
    
  }, [])

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar />
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <AddCenter />
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
                  </TableRow>
                </TableHead>
                {centers.loading && <div>Loading ... </div>}
                <TableBody>
                {!centers.loading && centers.list && centers.list.map((center, index) =>   
                  <StyledTableRow key={index}>
                    <StyledTableCell> {center.name}</StyledTableCell>
                    <StyledTableCell> {center.governorate}</StyledTableCell>
                    <StyledTableCell> {center.city}</StyledTableCell>
                    <StyledTableCell> {center.center_capacity}</StyledTableCell>
                    <StyledTableCell> {center.type_vaccine}</StyledTableCell>
                    <StyledTableCell> {center.number_vaccine}</StyledTableCell>
                    <StyledTableCell>
                      <Button>Update </Button>
                    </StyledTableCell>
                    <StyledTableCell> 
                      <IconButton>
                        <DeleteIcon className="btnColorDelete" />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>)
                  }
                </TableBody>
              </Table>
            </div>
          </Content>
        </Layout>{" "}
      </Layout>
    </div>
  );
}

export default ManageCenter;
