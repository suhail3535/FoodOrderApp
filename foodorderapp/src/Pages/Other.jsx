import { Button, FormControl, FormLabel, Input, Select, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import "./other.css"
import Navbar from '../Component/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Other = () => {
    const toast = useToast()
    const navigate = useNavigate()
    const [item, setItem] = useState({
        name: "",
        choice: "",
        quantity: "1",
    });

    const postotherData = async () => {
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
                "https://myapplication-9clu.onrender.com/other/add",
                item
            );
            toast({
                title: 'Choice Added successfully.',

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
                navigate("/order")
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



            <div className='other_container'>
                <h1 style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", marginTop: "6rem" }}>Welcomes you..</h1>
                <div className='select_option_tab_other'>
                    <form>
                        <FormControl isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input
                                value={item.name}
                                onChange={handleChange}
                                name="name"
                                placeholder='Enter your Name' />
                        </FormControl><br />
                        <FormControl isRequired>
                            <FormLabel>Choice</FormLabel>
                            <Input value={item.choice}
                                onChange={handleChange}
                                name="choice"
                                placeholder='Enter your choice' />
                        </FormControl>
                        <br />
                        <FormControl isRequired>
                            <FormLabel>Quantity</FormLabel>
                            <Select value={item.quantity}
                                onChange={handleChange}
                                name="quantity">
                                <option value='1'> 1</option>
                                <option value='2'> 2</option>
                                <option value='3'> 3</option>
                                <option value='4'> 4</option>
                                <option value='5'> 5</option>
                            </Select>
                        </FormControl>


                    </form>
                    <div className='btn_div'>
                        <Button onClick={postotherData} style={{ width: "150px" }} colorScheme='blue'>Submit</Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Other