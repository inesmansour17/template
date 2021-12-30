import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions/auth";
import Navbar from "../Navbar/Navbar";
import { Form, Input, Button } from "antd";

import "./CitoyenSpace.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  errorMessage: state.auth.errorMessage,
});

function CitoyenSpace(props) {
  const dispatch = useDispatch();
  const [cin, setCin] = useState("");
  const [code, setCode] = useState("");
  const history = useHistory();
  const handleSubmit = (values) => {
    const user = {
      cin: values.cin,
      code: values.code,
    };
    dispatch(actions.login(user));
    console.log(props.isLoggedIn);
    if (props.isLoggedIn) {
      history.push("/Profile");
    }
  };
  useEffect(() => {
    if (props.isLoggedIn) {
      history.push("/Profile");
    }
  });

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
          <Input type="cin" onChange={(e) => setCin(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="code"
          label="Code:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="code" onChange={(e) => setCode(e.target.value)} />
        </Form.Item>
        <Button type="primary" className="bt" htmlType="submit" shape="round">
          Se connecter
        </Button>
        <p className="para2">{props.errorMessage}</p>
      </Form>
    </div>
  );
}
//export default connect(mapStateToProps, { loggedUser })(CitoyenSpace);
export default connect(mapStateToProps)(CitoyenSpace);
