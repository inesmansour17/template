import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux" 
import gouvernorat from '../../../constants/gouvernorat'
import villes from '../../../constants/villes'
import { Modal, Button } from "antd";
import { Form, Input, Select, InputNumber } from "antd";
import * as actions from '../../../redux/actions/centers' 

function AddCenter() {
  const isModalVisible = useSelector((state) => state.centers.displayed) 
  const [cities,setCities] = useState([])
  const [selectedGov,setSelectedGov] = useState('')
  const [selectedCity,setSelectedCity] = useState('') 
  const [name,setName] = useState('') 
  const [capacity,setCapacity] = useState(0) 
  const dispatch = useDispatch() 
  const closeModal = () => {
    dispatch(actions.setDisplayed(false))  
  };
  useEffect(() => {
     
  }, [])
  
  const changeGov = (gover) => {
    setSelectedGov(gover);
    const found = villes.find((ville) => ville.gov === gover).cities 
    setCities(found ? found: []);
        
	}

	const changeCity = (value) => {
		setSelectedCity(value); 
	}
  const handleSubmit = async () =>{
    const center ={
      name, 
      governorate:selectedGov, 
      city:selectedCity,
      center_capacity:capacity,
      number_vaccine:capacity,
    } 
    dispatch(actions.addCenter(center)) 
  }
  return ( 
      <Modal 
        title="Add new center" visible={isModalVisible} 
        onCancel={closeModal}>
        <Form
          name="control-ref"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          
        >
          <Form.Item
            label="center_name:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input name="center_name" onChange={e => {console.log(e.target.value);setName(e.target.value)}}/>
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
                return <Select.Option key={key} value={gov} >{gov}</Select.Option>
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
              return <Select.Option key={key} value={city}>{city}</Select.Option>
            })}
            </Select>
          </Form.Item>
             
           
          <Form.Item
            label="center_capacity:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input name="capacity" /* value={capacity} */ onChange={e => setCapacity(e.target.value)}/>
          </Form.Item>

          <Button onClick={handleSubmit}> Add center </Button>
        </Form>
      </Modal>
     
  );
}
export default AddCenter;
