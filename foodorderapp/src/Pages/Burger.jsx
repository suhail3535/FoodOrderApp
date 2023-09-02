import { Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import React from 'react'
import "./burger.css"
import Navbar from '../Component/Navbar'
const Burger = () => {
    return (
        <>
            <Navbar />

            <div className='burger_container'>
                <h1 style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", marginTop: "6rem" }}>Welcome to Burger King</h1>
                <div className='select_option_tab_burger'>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input placeholder='Enter your Name' />
                    </FormControl><br />
                    <FormControl isRequired>
                        <FormLabel>Choice</FormLabel>
                        <Select placeholder='Select option'>
                            <option value='Double Crispy'>Double Crispy</option>
                            <option value='Classic'>Classic</option>
                            <option value='other'>other</option>
                        </Select>
                    </FormControl>
                    <br />
                    <FormControl isRequired>
                        <FormLabel>Quantity</FormLabel>
                        <Select placeholder='Select option'>
                            <option value='1'> 1</option>
                            <option value='2'> 2</option>
                            <option value='3'> 3</option>
                            <option value='4'> 4</option>
                            <option value='5'> 5</option>
                        </Select>
                    </FormControl>
                    <div className='btn_div'>
                        <Button colorScheme='blue'>Submit</Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Burger