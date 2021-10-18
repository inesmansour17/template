import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal, Button } from "antd";
import { Form, Input, Select, InputNumber } from "antd";
import * as actions from "../../../redux/actions/vaccines";

function UpdateVaccine() {
  const isModalVisible = useSelector((state) => state.vaccines.displayUpdate);
  const vaccine = useSelector((state) => state.vaccines.selectedVaccine);

  const [vaccine_type, setVaccine] = useState(vaccine.vaccine_type);
  const [stock, setStock] = useState(vaccine.stock);

  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(actions.setDisplayUpdate(false));
  };
  useEffect(() => {}, []);

  const handleSubmit = async () => {
    const Updatedvaccine = {
      id: vaccine._id,
      stock: stock,
    };
    dispatch(actions.updateVaccine(Updatedvaccine));
  };

  return (
    <Modal
      title="Update new vaccine"
      visible={isModalVisible}
      okText={"update"}
      onOk={closeModal}
      onCancel={closeModal}
    >
      <Form
        name="control-ref"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item
          label="Vaccine name:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            name="vaccine_type"
            value={vaccine_type}
            onChange={(e) => setVaccine(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Vaccine stock:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            name="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </Form.Item>

        <Button onClick={handleSubmit}> Update center </Button>
      </Form>
    </Modal>
  );
}

export default UpdateVaccine;
