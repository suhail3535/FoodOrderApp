import { Button, FormControl, FormLabel, Input, Select, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import "./sagar.css"
import Navbar from '../Component/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Sagar = () => {
    const toast = useToast()
    const navigate = useNavigate()
    const [item, setItem] = useState({
        name: "",
        choice: "",
        quantity: "1",
    });

    const postSagarData = async () => {
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
                "https://myapplication-9clu.onrender.com/sagar/add",
                item // Send the 'item' state object
            );
            toast({
                title: 'Thankyou!Choice Added successfully.',
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
                navigate("/")
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

            <div className='sagar_container'>
                <h1 style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", marginTop: "6rem" }}>Welcome to Sagar Sweets</h1>
                <div className='select_option_tab'>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input value={item.name}
                            onChange={handleChange}
                            name="name" placeholder='Enter your Name' />
                    </FormControl> <br />
                    <FormControl isRequired>
                        <FormLabel>Choice</FormLabel>
                        <Select value={item.choice}
                            onChange={handleChange}
                            name="choice">
                            <option value=''>Select</option>
                            <option value='Vada pav'>Vada pav</option>
                            <option value='Pav Vada'>Pav vada</option>
                            <option value='Samosa'>Samosa</option>
                            <option value='Panner Sandwich'>Panner Sandwich</option>
                            <option value='Bread Sandwich'>Bread Sandwich</option>
                            <option value='Tandoor Roll'>Tandoor Roll</option>
                            <option value='Other'>Other</option>
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
                        <Button onClick={postSagarData} style={{ width: "150px" }} colorScheme='blue'>Submit</Button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Sagar