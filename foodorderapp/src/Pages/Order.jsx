import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import axios from 'axios';
import './order.css';
import { MdDeleteForever } from "react-icons/md"
import { useToast } from '@chakra-ui/react';

const Order = () => {
  const [samosaTotal, setSamosaTotal] = useState(0);
  const [wadaTotal, setwadaTotal] = useState(0);
  const [paowadaTotal, setpaowadaTotal] = useState(0);
  const [paneer, setpannerTotal] = useState(0);
  const [bread, setbreadTotal] = useState(0);
  const [tandoorTotal, settandoorTotal] = useState(0);

  const [otherItemTotal, setOtherItemTotal] = useState(0);
  const toast = useToast()
  const [burgerorder, setburgerOrder] = useState([]);
  const [sagarrorder, setsagarOrder] = useState([]);
  const [pizzaorder, setpizzaOrder] = useState([]);
  const [otherorder, setotherOrder] = useState([]);

  const getBurgerData = async () => {
    try {
      const response = await axios.get(
        'https://myapplication-9clu.onrender.com/burger'
      );
      // console.log('all choice', response.data);
      setburgerOrder(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getSagarData = async () => {
    try {
      const response = await axios.get(
        'https://myapplication-9clu.onrender.com/sagar'
      );
      // console.log('all choice', response.data);
      setsagarOrder(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPizzaData = async () => {
    try {
      const response = await axios.get(
        'https://myapplication-9clu.onrender.com/pizza'
      );
      // console.log('all choice', response.data);
      setpizzaOrder(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const otherData = async () => {
    try {
      const response = await axios.get(
        'https://myapplication-9clu.onrender.com/other'
      );
      // console.log('all choice', response.data);
      setotherOrder(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = async (_id) => {
    try {

      await axios.delete(`https://myapplication-9clu.onrender.com/burger/delete/${_id}`);

      setburgerOrder(burgerorder.filter((item) => item.id !== _id));

      getBurgerData()
      toast({
        title: 'Choice Deleted.',
        description: "",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: "top-center"
      })
      // console.log('Item deleted successfully.');

    } catch (error) {

      console.error('Error deleting item:', error);
    }
  };
  const handleDeleteClicksagar = async (_id) => {
    try {

      await axios.delete(`https://myapplication-9clu.onrender.com/sagar/delete/${_id}`);

      setsagarOrder(sagarrorder.filter((item) => item.id !== _id));
      toast({
        title: 'Choice Deleted.',
        description: "",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: "top-center"
      })
      getSagarData()
      // console.log('Item deleted successfully.');
    } catch (error) {

      console.error('Error deleting item:', error);
    }
  };
  const handleDeleteClickpizza = async (_id) => {
    try {

      await axios.delete(`https://myapplication-9clu.onrender.com/pizza/delete/${_id}`);

      setpizzaOrder(pizzaorder.filter((item) => item.id !== _id));
      toast({
        title: 'Choice Deleted.',
        description: "",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: "top-center"
      })
      getPizzaData()
      // console.log('Item deleted successfully.');
    } catch (error) {

      console.error('Error deleting item:', error);
    }
  };
  const handleDeleteClickother = async (_id) => {
    try {

      await axios.delete(`https://myapplication-9clu.onrender.com/other/delete/${_id}`);

      setotherOrder(otherorder.filter((item) => item.id !== _id));
      toast({
        title: 'Choice Deleted.',
        description: "",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: "top-center"
      })
      otherData()
      // console.log('Item deleted successfully.');
    } catch (error) {

      console.error('Error deleting item:', error);
    }
  };
  useEffect(() => {
    getBurgerData();
    getSagarData();
    getPizzaData();
    otherData();

    // Calculate Samosa total
    const samosaTotal = sagarrorder.reduce(
      (total, item) => (item.choice === 'Samosa' ? total + item.quantity : total),
      0
    );

    // Calculate total for all other items
    const wadaTotal = sagarrorder.reduce(
      (total, item) => (item.choice === 'Vada pav' ? total + item.quantity : total),
      0
    );
    const paowadaTotal = sagarrorder.reduce(
      (total, item) => (item.choice === 'Pav Vada' ? total + item.quantity : total),
      0
    );
    const paneer = sagarrorder.reduce(
      (total, item) => (item.choice === 'Panner Sandwich' ? total + item.quantity : total),
      0
    );
    const bread = sagarrorder.reduce(
      (total, item) => (item.choice === 'Bread Sandwich' ? total + item.quantity : total),
      0
    );
    const tandoorTotal = sagarrorder.reduce(
      (total, item) => (item.choice === 'Tandoor Roll' ? total + item.quantity : total),
      0
    );

    setSamosaTotal(samosaTotal);
    setwadaTotal(wadaTotal);
    setpaowadaTotal(paowadaTotal);
    setpannerTotal(paneer);
    setbreadTotal(bread);
    settandoorTotal(tandoorTotal);
    // setpannerTotal(paneer);
  }, [sagarrorder]);

  return (
    <div>
      <Navbar />
      <div className='content-container'>

        {burgerorder.length > 0 && (<div className='order_container'>
          <h1 style={{ textAlign: "center", marginBottom: "10px", fontWeight: "bold", fontSize: "20px" }}>Burger King All Orders</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Choice</th>
                <th>Quantity</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {burgerorder.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.choice}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button onClick={() => handleDeleteClick(item._id)}>
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>)}


        {sagarrorder.length > 0 && (
          <div className='order_container'>
            <h1 style={{ textAlign: "center", marginBottom: "10px", fontWeight: "bold", fontSize: "20px" }}>Sagar Sweets All Orders</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Choice</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {sagarrorder.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.choice}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button onClick={() => handleDeleteClicksagar(item._id)}>
                        <MdDeleteForever />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>


            {samosaTotal > 0 && <h2>Total Samosa: {samosaTotal}</h2>}
            {wadaTotal > 0 && <h2>Total Vada Pav: {wadaTotal}</h2>}
            {paowadaTotal > 0 && <h2>Total Pav Vada: {paowadaTotal}</h2>}
            {paneer > 0 && <h2>Total Paneer Sandwich: {paneer}</h2>}
            {bread > 0 && <h2>Total Bread Sandwich: {bread}</h2>}
            {tandoorTotal > 0 && <h2>Total Tandoor Roll: {tandoorTotal}</h2>}
          </div>
        )}


        {pizzaorder.length > 0 && (<div className='order_container'>
          <h1 style={{ textAlign: "center", marginBottom: "10px", fontWeight: "bold", fontSize: "20px" }}>Domino's Pizza All Orders</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Choice</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pizzaorder.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.choice}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button onClick={() => handleDeleteClickpizza(item._id)}>
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>)}


        {otherorder.length > 0 && (

          <div className='order_container'>
            <h1 style={{ textAlign: "center", marginBottom: "10px", fontWeight: "bold", fontSize: "20px" }}>Other Choice All Orders</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Choice</th>
                  <th>Quantity</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
                {otherorder.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.choice}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button onClick={() => handleDeleteClickother(item._id)}>
                        <MdDeleteForever />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
};

export default Order;
