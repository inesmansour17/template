import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form, Input, InputNumber,Select,DatePicker} from "antd"; 

import * as actions from "../../../redux/actions/users";
import gouvernorat from "../../../constants/gouvernorat";
import villes from "../../../constants/villes";
function AddVolunteers() {
  const isModalVisible = useSelector((state) => state.users.displayed);
  const [cities, setCities] = useState([]);    
  const dispatch = useDispatch();
   
  const changeGov = (gover) => { 
    const found = villes.find((ville) => ville.gov === gover).cities;
    setCities(found ? found : []);
  };
  const handleSubmit = async (values) => {
    const user = {
      user_type:values.user_type,
      stock:values.stock,
    };
    dispatch(actions.addUser( {...user,role:"volunteer"}));
  };
  return (
    <Modal
      title="Add new volunteers"
      visible={isModalVisible}
      
      footer={null}
    >
      <Form
        name="control-ref"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={handleSubmit} 
      ><Form.Item
      label="Cin:"
      name="Cin"
      rules={[
        {
          required: true,
          type: 'number',
          min: 0,
        },
      ]}
    >
      <InputNumber />
    </Form.Item>

        <Form.Item
          label="First Name:"
          name="first_name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name:"
          name="last_name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email:"
          name="email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="birthday:"
          name="birthday"
          rules={[
            {
              required: true,
              type:'DatePicker'
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="gouvernorat"
          name="governorate"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select onChange={changeGov}>
            <Select.Option>--Choose Governorate--</Select.Option>
            {gouvernorat?.map((gov, key) => {
              return (
                <Select.Option key={key} value={gov}>
                  {gov}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label="city"
          name="city"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select >
            <Select.Option>--Choose City--</Select.Option>
            {cities?.map((city, key) => {
              return (
                <Select.Option key={key} value={city}>
                  {city}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        

        <Button type="primary" htmlType="submit" shape="round"> Add volunteers </Button>
      </Form>
    </Modal>
  );
}

export default AddVolunteers;