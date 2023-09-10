import { Button, FormControl, FormLabel, Input, Select, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import "./pizza.css"
import Navbar from '../Component/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Pizza = () => {
    const toast = useToast()
    const navigate=useNavigate()
    const [item, setItem] = useState({
        name: "",
        choice: "",
        quantity: "1",
    });

    const postPizzaData = async () => {
        try {
            if (!item.name) {

                toast({
                    title: "Name is required!",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                    position: "top-center"
                });
                return;
            }
            const response = await axios.post(
                "https://myapplication-9clu.onrender.com/pizza/add",
                item
            );
            toast({
                title: 'Thankyou !Choice Added successfully.',

                description: "",
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: "top-center"
            })
            setItem({
                name: "",
                choice: "",
                quantity: "1",
            });
            setTimeout(() => {
                navigate("/orderplaced")
            }, 2000)
            // console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem((prevItem) => ({
            ...prevItem,
            [name]: value
        }));
    };


    return (
        <>
            <Navbar />



            <div className='pizza_container'>
                <h1 style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", marginTop: "1rem" }}>Welcome to Domino's Pizza Point</h1>
                <div className='select_option_tab_pizza'>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input value={item.name}
                            onChange={handleChange}
                            name="name" placeholder='Enter your Name' />
                    </FormControl><br />
                    <FormControl isRequired>
                        <FormLabel>Choice</FormLabel>
                        <Select value={item.choice}
                            onChange={handleChange}
                            name="choice" placeholder='Select'>
                            <option value='Panner Pizza'>Panner Pizza</option>
                            <option value='other Pizza'>Other Pizza</option>

                        </Select>
                    </FormControl>
                    <br />
                    <FormControl isRequired>
                        <FormLabel>Quantity</FormLabel>
                        <Select value={item.quantity}
                            onChange={handleChange}
                            name="quantity" placeholder='Select'>
                            <option value='1'> 1</option>
                            <option value='2'> 2</option>
                            <option value='3'> 3</option>
                            <option value='4'> 4</option>
                            <option value='5'> 5</option>
                        </Select>
                    </FormControl>
                    <div className='btn_div'>
                        <Button onClick={postPizzaData} style={{ width: "150px" }} colorScheme='blue'>Submit</Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Pizza