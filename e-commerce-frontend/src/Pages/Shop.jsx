import React, { useEffect, useState } from 'react'
import '../Pages/CSS/Shop.css'
// import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
//import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import CarouselPage from '../Components/Carousel/CarouselPage'
import About from '../Components/About/About'
import Convectional from '../Components/Convectional/Convectional'
import Homedecor from '../Components/Homedecor/Homedecor'


const Shop = () => {

  const [popular, setPopular] = useState([]);
  const [newcollection, setNewCollection] = useState([]);
  const [homedecor, sethomedecor] = useState([]);

  const fetchInfo = () => { 
    fetch('http://localhost:4000/popularinwomen') 
            .then((res) => res.json()) 
            .then((data) => setPopular(data))
    fetch('http://localhost:4000/newcollections') 
            .then((res) => res.json()) 
            .then((data) => setNewCollection(data))
    fetch('http://localhost:4000/homedecor')
            .then((res) => res.json()) 
            .then((data) => sethomedecor(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])


  return (
    <>
      <CarouselPage/>
    <div className='shop' >
      {/* <Hero/> */}
      <Popular data={popular}/>
      <About/>
      {/*<Offers/>*/}
      <NewCollections data={newcollection}/>
      <Convectional/>
      <Homedecor data={homedecor}/>
       <NewsLetter/> 
    </div>
    </>
  )
}

export default Shop
