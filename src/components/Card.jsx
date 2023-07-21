import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";


export default function Card(props) {
  const dispatch = useDispatchCart();
  let data = useCart()
  const priceRef = useRef();
  let options = props.options
  let priceOptions = Object.keys(options)
  const [qty,setQty] = useState(1);
  const [size,setSize] = useState("");
  const handleAddToCart = async()=>{
    let games = []
    for(const item of data){
      if(item.id === props.gamesItems._id){
        games = item;
        break;
      }
    }
    if(games !==[] ){
      if(games.size==size){
        await dispatch({type:"UPDATE",id:props.gamesItems._id,price:finalPrice,qty:qty})
        return 
      }
    else if (games.size!==size){
      await dispatch({type:"ADD",id:props.gamesItems._id,name:props.gamesItems.name,price:finalPrice,qty:qty, size:size, img:props.gamesItems.img })
      //await console.log(data);
      return
    } return
  }
    await dispatch({type:"ADD",id:props.gamesItems._id,name:props.gamesItems.name,price:finalPrice,qty:qty, size:size, img:props.gamesItems.img })
  }
  const finalPrice = qty*parseInt(options[size]);
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img className="card-img-top" src={props.gamesItems.img} alt="Card image cap" style={{height:"150px", objectFit:"fill"}} />
        <div className="card-body">
          <h5 className="card-title">{props.gamesItems.name}</h5>
          {/*<p className="card-text">{props.des}</p>*/}
          <div className="container w-100">
            <select className="m-2 h-100  bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded" ref = {priceRef} onChange={(e)=>setSize(e.target.value)}>
              {priceOptions.map((data)=>{
                return <option key= {data} value = {data}>{data}</option>
              })}
            </select>
            <div className="fs-5 d-inline"> Rs. {finalPrice}/- </div>
          </div>
          <hr />
          <button className={"btn btn-success justify-center ms-2"} onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
