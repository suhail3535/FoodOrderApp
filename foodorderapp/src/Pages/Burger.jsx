import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./burger.css";
import axios from "axios";
import Navbar from "../Component/Navbar";
import { useNavigate } from "react-router-dom";

const Burger = () => {
    const navigate = useNavigate()
    const toast = useToast()
    const [item, setItem] = useState({
        name: "",
        choice: "",
        quantity: "1",
    });

    const postData = async () => {
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
                "https://myapplication-9clu.onrender.com/burger/add",
                item
            );
            console.log(response.data);
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

        } catch (error) {
            console.log(error);
        }
        setTimeout(() => {
            navigate("/order")
        }, 2000)

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

            <div className="burger_container">
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: "bold",
                        marginTop: "6rem",
                    }}>
                    Welcome to Burger King
                </h1>
                <div className="select_option_tab_burger">
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                            name="name"
                            placeholder="Enter your Name"
                            value={item.name}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <br />
                    <FormControl isRequired>
                        <FormLabel>Choice</FormLabel>
                        <Select
                            name="choice"
                            placeholder="Select"
                            value={item.choice}
                            onChange={handleChange}
                        >
                            <option value="Double Crispy Burger">Double Crispy Burger</option>
                            <option value="Classic Burger">Classic Burger</option>
                            <option value="other Burger">other Burger</option>
                        </Select>
                    </FormControl>
                    <br />
                    <FormControl isRequired>
                        <FormLabel>Quantity</FormLabel>
                        <Select
                            name="quantity"

                            value={item.quantity}
                            onChange={handleChange}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Select>
                    </FormControl>
                    <div className="btn_div">
                        <Button style={{ width: "150px" }} onClick={postData} colorScheme="blue">Submit</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Burger;
