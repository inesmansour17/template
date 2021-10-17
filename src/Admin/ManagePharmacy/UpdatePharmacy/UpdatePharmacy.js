import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
//import * as actions from '../../redux/actions/pharmacies'
import gouvernorat from '../../../constants/gouvernorat'
import villes from '../../../constants/villes'
import { Modal, Button } from "antd";
import { Form, Input, Select, InputNumber } from "antd";
import * as actions from '../../../redux/actions/pharmacies' 

function UpdatePharmacy() {
  const isModalVisible = useSelector((state) => state.pharmacies.displayUpdate) 
  const pharmacy = useSelector((state) => state.pharmacies.selectedPharmacy) 
  const [cities,setCities] = useState([])
  const [selectedGov,setSelectedGov] = useState(pharmacy.governorate)
  const [selectedCity,setSelectedCity] = useState(pharmacy.city) 
  const [name,setName] = useState(pharmacy.name) 
  const [capacity,setCapacity] = useState(pharmacy.pharmacy_capacity) 
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
    const Updatedpharmacy ={
      id:pharmacy._id,
      name, 
      governorate:selectedGov, 
      city:selectedCity,
      pharmacy_capacity:capacity,
      number_vaccine:capacity,
    } 
    dispatch(actions.updatePharmacy(Updatedpharmacy)) 
  }
   

  return ( 
     <Modal 
        title="Update new pharmacy" 
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
            label="pharmacy_name:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input name="pharmacy_name" value={name} onChange={e => setName(e.target.value)}/>
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
            label="pharmacy_capacity:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input name="capacity" value={capacity} onChange={e => setCapacity(e.target.value)}/>
          </Form.Item>

          <Button onClick={handleSubmit}> Update pharmacy </Button>
        </Form>
      </Modal>
     
  );
}
export default UpdatePharmacy;
