import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../redux/types";
import * as actions from "../redux/actions/users";
import { Form, Input, Button, Select, InputNumber, notification } from "antd";

import Navbar from "../Navbar/Navbar";

import "../InscriptionInCenter/InscriptionInCenter.css";
import gouvernorat from "../constants/gouvernorat";
import villes from "../constants/villes";

function InscriptionInCenter() {
  const dispatch = useDispatch();
  const [cities, setCities] = useState([]);
  const changeGov = (gover) => {
    const found = villes.find((ville) => ville.gov === gover).cities;
    setCities(found ? found : []);
  };
  const error = useSelector((state) => state.errorReducer);
  const [err, setError] = useState("");
  const [code, setCode] = useState("");
  useEffect(() => {
    if (error.message) {
      setError(error.message);
      setCode(error.code);
    }
  }, [error]);
  const handleSubmit = async (values) => {
    const user = {
      cin: values.cin,
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      birthday: values.birthday,
      governorate: values.governorate,
      city: values.city,
    };
    dispatch(actions.registerCenter(user));
  };
  const clearError = () => {
    dispatch({
      type: types.CLEAR_ERRORS,
    });
    setError("");
    setCode("");
  };
  const popUp = (type) => {
    notification[type]({
      message: code,
      description: err,
      onClose: clearError,
    });
  };
  return (
    <div>
      <Navbar />
      {err && popUp("error")}
      <Form
        name="control-ref"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        className="inscriC"
        onFinish={handleSubmit}
      >
        <p className="parag">Veuillez remplir ces champs en langue française</p>
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
          label="firstname"
          name="firstname"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Prénom:"
          rules={[
            {
              required: true,
            },
          ]}
          name="lastname"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email:"
          rules={[
            {
              required: true,
            },
          ]}
          name="email"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Gouvernorat"
          name="governorate"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select onChange={changeGov}>
            <Select.Option>--Choisir votre Gouvernorat--</Select.Option>
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
          label="Ville"
          name="city"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            <Select.Option>--Choisir votre ville--</Select.Option>
            {cities?.map((city, key) => {
              return (
                <Select.Option key={key} value={city}>
                  {city}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          label="Age"
          name="birthday"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Button type="primary" block htmlType="submit" shape="round">
          S'inscrire
        </Button>
      </Form>
    </div>
  );
}

export default InscriptionInCenter;
