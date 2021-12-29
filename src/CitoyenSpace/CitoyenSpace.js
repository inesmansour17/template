import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actions/auth";
import Navbar from "../Navbar/Navbar";
import { Form, Input, Button } from "antd";
//import { useHistory } from "react-router";
import "./CitoyenSpace.css";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  console.log(state);
};
// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     user: state,
//   };
// };

function CitoyenSpace(props) {
  const dispatch = useDispatch();
  // const [cin, setCin] = useState("");
  // const [code, setCode] = useState("");

  const handleSubmit = async (values) => {
    const user = {
      cin: values.cin,
      code: values.pass,
    };
    dispatch(actions.login(user));

    console.log(props);
    // props.history.push("/Profile");
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
          <Input type="cin" onChange={(e) => setCin(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="code"
          label="Num Inscription:"
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
      </Form>
      {/* {!loggedUser} */}
    </div>
  );
}
// export default connect(mapStateToProps, { loggedUser })(CitoyenSpace);
export default connect(mapStateToProps, {})(CitoyenSpace);
