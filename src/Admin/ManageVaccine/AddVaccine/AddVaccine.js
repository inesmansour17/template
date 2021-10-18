import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal, Button } from "antd";
import { Form, Input, Select, InputNumber } from "antd";
import * as actions from "../../../redux/actions/vaccines";

function AddVaccine() {
  const isModalVisible = useSelector((state) => state.vaccines.displayed);

  const [vaccine_type, setVaccine] = useState("");
  const [stock, setStock] = useState("");

  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(actions.setDisplayed(false));
  };
  useEffect(() => {}, []);

  const handleSubmit = async () => {
    const vaccine = {
      vaccine_type,
      stock,
    };
    dispatch(actions.addVaccine(vaccine));
  };
  return (
    <Modal
      title="Add new vaccine"
      visible={isModalVisible}
      onCancel={closeModal}
    >
      <Form
        name="control-ref"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item
          label="Vaccine Name:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            name="vaccine_type"
            onChange={(e) => {
              console.log(e.target.value);
              setVaccine(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Stock:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            name="stock"
            onChange={(e) => {
              console.log(e.target.value);
              setStock(e.target.value);
            }}
          />
        </Form.Item>

        <Button onClick={handleSubmit}> Add Vaccine </Button>
      </Form>
    </Modal>
  );
}

export default AddVaccine;
