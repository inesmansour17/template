import React from "react";

import Navbar from "../Navbar/Navbar";
import { Form, Input, Button } from "antd";
import "./updateInscri.css";

function UpdateInscri() {
  return (
    <div>
      <Navbar />

      <Form
        name="control-ref"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        className="update"
      >
        <p className="para">Mettez à jour votre inscription à EVAX</p>
        <Form.Item
          name="code"
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
          name="email"
          label="Email:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" className="bt" htmlType="submit" shape="round">
          Mettre à jour
        </Button>
      </Form>
    </div>
  );
}

export default UpdateInscri;
