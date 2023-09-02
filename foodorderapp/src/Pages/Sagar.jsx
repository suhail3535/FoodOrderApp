import { Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import React from 'react'
import "./sagar.css"
import Navbar from '../Component/Navbar'
const Sagar = () => {
    return (
        <>

            <Navbar />

            <div className='sagar_container'>
                <h1 style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", marginTop: "6rem" }}>Welcome to Sagar Sweets</h1>
                <div className='select_option_tab'>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input placeholder='Enter your Name' />
                    </FormControl> <br />
                    <FormControl isRequired>
                        <FormLabel>Choice</FormLabel>
                        <Select placeholder='Select option'>
                            <option value='Vadapao'>Vadapao</option>
                            <option value='Pao Wada'>Pao Wada</option>
                            <option value='Samosa'>Samosa</option>
                            <option value='Panner Sandwich'>Panner Sandwich</option>
                            <option value='Bread Sandwich'>Bread Sandwich</option>
                            <option value='Tandoor Role'>Dandoor Role</option>
                            <option value='Other'>Other</option>
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

export default Sagar