import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer';
//import { useDispatchPrice, usePrice } from "../components/PriceContext";
import {Link} from 'react-router-dom';
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  //let dispatch2 = useDispatchPrice();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    )
  }
  // const handleRemove = (index)=>{
  //   console.log(index)
  //   dispatch({type:"REMOVE",index:index})
  // }
  const totalPrice = data.reduce((total, games) => total + games.price, 0)
  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    // console.log(data,localStorage.getItem("userEmail"),new Date())
    let response = await fetch(`${process.env.REACT_APP_BACKEND_URI}/api/auth/orderData`, {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    console.log("JSON RESPONSE:::::", response.status)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
      //dispatch2({type:"SETTOTAL",prcie:totalPrice})
    }
  }

  
  return (
    <div className='text-white'>

      {console.log(data)}
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((games, index) => (
              <tr className='text-white hv'>
                <th scope='row' >{index + 1}</th>
                <td >{games.name}</td>
                <td>{games.qty}</td>
                <td>{games.size}</td>
                <td>{games.price}</td>
                <td ><button type="button" className="btn p-1 btn-danger text-white" onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>Delete</button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <Link className='btn bg-success mt-5 ' onClick={handleCheckOut} to ='/checkout' > Check Out </Link>
        </div>
      </div>



    </div>
  )
}