import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions/auth";
import Navbar from "../Navbar/Navbar";
import { Form, Input, Button } from "antd";
import "./CitoyenSpace.css";

function CitoyenSpace() {
  // const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    const loggedUser = {
      cin: values.cin,
      code: values.pass,
    };
    dispatch(actions.login(loggedUser));
    console.log(loggedUser);
  };
  return (
    <div>
      <Navbar />

      <Form
        name="control-ref"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        className="update"
        onFinish={handleSubmit}
      >
        <p className="para">Veuillez vous connecter à votre espace citoyen</p>
        <Form.Item
          name="cin"
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
          name="pass"
          label="Num Inscription:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" className="bt" htmlType="submit" shape="round">
          Se connecter
        </Button>
      </Form>
    </div>
  );
}

export default CitoyenSpace;
