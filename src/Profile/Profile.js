import React, { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
import * as actions from "../redux/actions/users";
import { DownloadOutlined } from "@ant-design/icons";
import { Image, Layout, Row, Col, Button } from "antd";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Navbar from "../Navbar/Navbar";
import "./Profile.css";
import logo from "../img/logoTun.png";
const mapStateToProps = (state) => ({
  connectedUser: state.auth.loggedUser,
  selectedUser: state.users.selectedUser,
});

function Profile(props) {
  const showDate = (date) => {
    var convertedDate = new Date(date);
    return (
      convertedDate.getDay() +
      "-" +
      convertedDate.getMonth() +
      "-" +
      convertedDate.getFullYear()
    );
  };
  const downloadPdf = (e) => {
    e.preventDefault();
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      // if you want see your screenshot in body.
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(props.connectedUser);
    dispatch(actions.getUserByCin(props.connectedUser?.cin));
    console.log(props.selectedUser);
  }, [props.connectedUser]);
  return (
    <div>
      <Navbar />
      <Button type="primary" shape="round">
        Logout
      </Button>
      <Row
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        className="update"
      >
        <Col span={8}></Col>
        <Col span={10}>
          <div
            id="capture"
            title="PASS Sanitaire"
            style={{
              border: "1px solid black",
              padding: "35px",
            }}
          >
            <Image src={logo} className="logo" />
            <h2>PASS Sanitaire</h2>

            <p>Nom : {props.selectedUser.lastname}</p>
            <p>Prénom : {props.selectedUser.firstname}</p>
            <p>Cin : {props.selectedUser.cin}</p>
            <p>Age : {props.selectedUser.birthday}</p>
            {props.selectedUser.vaccines != null &&
            props.selectedUser.vaccines.length > 0 ? (
              <div>
                <p>
                  Date de vaccination :
                  {showDate(props.selectedUser.vaccines[0].date)}
                </p>
                <p>
                  Vaccin :
                  {props.selectedUser.vaccines[0].vaccine[0].vaccine_type}
                </p>
              </div>
            ) : (
              <p>Pas encore vacciné</p>
            )}
          </div>
          {props.selectedUser.vaccines != null &&
          props.selectedUser.vaccines.length > 0 ? (
            <Button
              className="but"
              type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              onClick={downloadPdf}
            >
              Download
            </Button>
          ) : null}
        </Col>
      </Row>
    </div>
  );
}

export default connect(mapStateToProps)(Profile);
