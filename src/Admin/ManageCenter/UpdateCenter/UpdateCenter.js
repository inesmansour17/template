import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
//import * as actions from '../../redux/actions/centers'
import gouvernorat from '../../../constants/gouvernorat'
import villes from '../../../constants/villes'
import { Modal, Button } from "antd";
import { Form, Input, Select, InputNumber } from "antd";
import * as actions from '../../../redux/actions/centers' 

function UpdateCenter() {
  const isModalVisible = useSelector((state) => state.centers.displayUpdate) 
  const center = useSelector((state) => state.centers.selectedCenter) 
  const [cities,setCities] = useState([])
  const [selectedGov,setSelectedGov] = useState(center.governorate)
  const [selectedCity,setSelectedCity] = useState(center.city) 
  const [name,setName] = useState(center.name) 
  const [capacity,setCapacity] = useState(center.center_capacity) 
  const dispatch = useDispatch() 
  const closeModal = () => {
    dispatch(actions.setDisplayUpdate(false))  
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
    const Updatedcenter ={
      id:center._id,
      name, 
      governorate:selectedGov, 
      city:selectedCity,
      center_capacity:capacity,
      number_vaccine:capacity,
    } 
    dispatch(actions.updateCenter(Updatedcenter)) 
  }
   

  return ( 
     <Modal 
        title="Update new center" 
        visible={isModalVisible} 
        okText={'update'}
        onOk={closeModal}
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
            <Input name="center_name" value={name} onChange={e => setName(e.target.value)}/>
          </Form.Item>
          <Form.Item
            label="gouvernorat"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select value={selectedGov} onChange={changeGov}>
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
            <Input name="capacity" value={capacity} onChange={e => setCapacity(e.target.value)}/>
          </Form.Item>

          <Button onClick={handleSubmit}> Update center </Button>
        </Form>
      </Modal>
     
  );
}
export default UpdateCenter;
