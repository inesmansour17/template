import React from "react";
import Navbar from "../Navbar/Navbar";
import { Form, Input, Button, DatePicker } from "antd";
import "./reportRdv.css";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actions/RDV/RDV.js";

const ReportRdv = () => {
  const dispatch = useDispatch();

  const reportRdv = (values) => {
    console.log("values", values);

    const { updateRDV } = actions;

    // first param take appointment id
    dispatch(updateRDV("1", values));
  };
  return (
    <div>
      <Navbar />

      <Form
        onFinish={reportRdv}
        name="control-ref"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        className="report"
      >
        <p className="pa">Reportez votre rendez-vous</p>
        <Form.Item
          name="CIN"
          label="CIN:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Num Inscription:"
          label="Num Inscription:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="appointmentDate"
          label="Nouvelle date:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Button type="primary" htmlType="submit" shape="round" className="bt">
          Reporter
        </Button>
      </Form>
    </div>
  );
};

export default ReportRdv;
