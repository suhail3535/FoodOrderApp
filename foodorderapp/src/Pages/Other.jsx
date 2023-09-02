import { Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import React from 'react'
import "./other.css"
import Navbar from '../Component/Navbar'
const Other = () => {
    return (
        <>
            <Navbar />



            <div className='other_container'>
                <h1 style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", marginTop: "6rem" }}>Welcomes you..</h1>
                <div className='select_option_tab_other'>
                    <form>
                        <FormControl isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input placeholder='Enter your Name' />
                        </FormControl><br />
                        <FormControl isRequired>
                            <FormLabel>Choice</FormLabel>
                            <Input placeholder='Enter your choice' />
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


                    </form>
                    <div className='btn_div'>
                        <Button colorScheme='blue'>Submit</Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Other