import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import gouvernorat from "../../../constants/gouvernorat";
import villes from "../../../constants/villes";
import { Modal, Button } from "antd";
import { Form, Input, Select, InputNumber } from "antd";
import * as actions from "../../../redux/actions/pharmacies";

function AddPharmacy() {
  const isModalVisible = useSelector((state) => state.pharmacies.displayed);
  const [cities, setCities] = useState([]);
  const [selectedGov, setSelectedGov] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState(0);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(actions.setDisplayed(false));
  };
  useEffect(() => {}, []);

  const changeGov = (gover) => {
    setSelectedGov(gover);
    const found = villes.find((ville) => ville.gov === gover).cities;
    setCities(found ? found : []);
  };

  const changeCity = (value) => {
    setSelectedCity(value);
  };
  const handleSubmit = async () => {
    const pharmacy = {
      name,
      governorate: selectedGov,
      city: selectedCity,
      pharmacy_capacity: capacity,
      number_vaccine: 0,
    };
    dispatch(actions.addPharmacy(pharmacy));
  };
  return (
    <Modal
      title="Add new pharmacy"
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
          label="pharmacy_name:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            name="pharmacy_name"
            onChange={(e) => {
              console.log(e.target.value);
              setName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="gouvernorat"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select value={selectedGov} onChange={changeGov.bind(this)}>
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
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select value={selectedCity} onChange={changeCity}>
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

        <Form.Item
          label="pharmacy_capacity:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            name="capacity"
            /* value={capacity} */ onChange={(e) => setCapacity(e.target.value)}
          />
        </Form.Item>

        <Button onClick={handleSubmit}> Add pharmacy </Button>
      </Form>
    </Modal>
  );
}
export default AddPharmacy;
