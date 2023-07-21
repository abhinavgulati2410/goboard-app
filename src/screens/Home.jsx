/* import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
// import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
export default function Home() {
  const [gamesCat, setGamesCat] = useState([])
  const [gamesItems, setGamesItems] = useState([])
  const [search, setSearch] = useState('')
  const loadGamesItems = async () => {
    let response = await fetch(`${process.env.REACT_APP_BACKEND_URI}/api/auth/gamesData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }

    });
    response = await response.json()
    // console.log(response[1][0].CategoryName)
    setGamesItems(response[0])
    setGamesCat(response[1])
  }

  useEffect(() => {
    loadGamesItems()
  }, [])

  return (
    <div >
      <div>
        <Navbar />
      </div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

          <div className="carousel-inner " id='carousel'>
            <div class=" carousel-caption  " style={{ zIndex: "9" }}>
              <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */
               /* <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                <button className="btn text-white bg-danger" onClick={() => { setSearch('') }}>X</button>
              </div>
            </div>
            <div className="carousel-item active" >
              <img src="https://source.unsplash.com/random/900x700/?chess" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?ludo" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?darts" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='container'> {/* boootstrap is mobile first */
       /* {
          gamesCat !== []
            ? gamesCat.map((data) => {
              return (
                // justify-content-center
                <div className='row mb-3'>
                  <div key={data.id} className='fs-3 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                  {gamesItems !== [] ? gamesItems.filter(
                    (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                    .map(filterItems => {
                      return (
                        <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                          {console.log(filterItems.url)}
                          <Card gameName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card>
                        </div>
                      )
                    }) : <div> No Such Data </div>}
                </div>
              )
            })
            : ""}
      </div>
      <Footer />
    </div>









  )
}
*/


import React from 'react'
import Footer from "../components/Footer";
import Card from "../components/Card";
//import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import Navbar from '../components/Navbar';

export default function Home() {

  const [search,setSearch] = useState("");
  const [gamesCat,setGamesCat] = useState([]);
  const [gamesItem,setGamesItem] = useState([]);
  const loadData = async () =>{
    console.log(process.env.REACT_APP_BACKEND_URI);
    let response = await fetch(`${process.env.REACT_APP_BACKEND_URI}/api/auth/gamesdata`,{
      method:"POST",
      headers:{
        'Content-Type':'spplication/json'
      }
    });
    response = await response.json();
    setGamesItem(response[0])
    setGamesCat(response[1])

    //console.log(response[0],response[1]);
  }

  useEffect(()=>{
    loadData()
  },[])

  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
          >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control mr-sm-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value = {search}
                  onChange={(e)=>{
                    setSearch(e.target.value)
                  }}
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0 bg-success text-white "
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/300×300/?chess"
                className="d-block w-100"
                alt="..."
                style={{ filter: "brightness(30%)" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/300×300/?ludo"
                className="d-block w-100"
                alt="..."
                style={{ filter: "brightness(30%)" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/300×300/?darts"
                className="d-block w-100"
                alt="..."
                style={{ filter: "brightness(30%)" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
          <div className="container mb-5 ">
          {
            gamesCat !==[] 
            ? gamesCat.map((data)=>{
              return ( <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName} 
                  </div>
                  <hr />
                  {gamesItem !== [] ? gamesItem.filter((item)=>(item.CategoryName==data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) 
                  .map(filterItems=>{
                    return(
                      <div key ={filterItems._id} className="col-12 col-md-6 col-lg-3">
                        <Card gamesItems = {filterItems}
                        //gameName ={filterItems.name} 
                        options = {filterItems.options[0]}
                        //imgSrc = {filterItems.img}
                        //des = {filterItems.description}
                        > </Card>
                      </div>
                    )
                  })
                  :<div>No such Data Found</div> }
              </div>
              )
            })
            : ""
          }
        </div>
        <div mt-100>
          <Footer />
        </div>
      </div>
    </div>
  );
}
