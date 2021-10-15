import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
//import * as actions from '../../redux/actions/centers'
import gouvernorat from '../../../constants/gouvernorat'
import villes from '../../../constants/villes'
import { Modal, Button } from "antd";
import { Form, Input, Select, InputNumber } from "antd";
import * as actions from '../../../redux/actions/centers'

function AddCenter() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const [cities,setCities] = useState([])
  const [selectedGov,setSelectedGov] = useState('--Choose Gov--')
  const [selectedCity,setSelectedCity] = useState('--Choose City--') 
  const [name,setName] = useState('') 
  const [capacity,setCapacity] = useState(0) 
  const dispatch = useDispatch() 
  
  useEffect(() => {
    dispatch(actions.fetchCenters())  
  }, [])
    const changeGov = (gover) => {
		setSelectedGov(gover);
      console.log(gover) 
		setCities(villes.find(ville => ville.gov === gover).cities);
        console.log(cities) 
	}

	const changeCity = (value) => {
		setSelectedCity(value); 
	}
  const handleSubmit = async (values) =>{
    dispatch(actions.addCenter(values))
  }



/*const handleAddCategory = async (values) => {

    await dispatch(addCategory(values.category_name)).then(result => {
      console.log(result)
      if (result === false) {

        setMessage("Category name exist ");
        setTypeMessage("error")
        setOpen(true);
        setClassicModal(false)


      }
      else {
        setMessage("Success add category");
        setTypeMessage("success")
        setOpen(true);
        setClassicModal(false)
      }
    })

  } */




  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add new center
      </Button>

      <Modal title="Add new center" visible={isModalVisible}>
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
            <Input name="center_name" onChange={value => {console.log(value);setName(value)}}/>
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
            <Input name="capacity" /* value={capacity} */ onChange={value => setCapacity(value)}/>
          </Form.Item>

          <Button onClick={handleSubmit}> Add center </Button>
        </Form>
      </Modal>
    </div>
  );
}
export default AddCenter;
