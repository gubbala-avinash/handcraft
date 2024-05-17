import React,{useContext} from 'react'
import './Homedecor.css'
import Item from '../Item/Item'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
import { useParams } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'  
const Homedecor = (props) => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products.find((e)=>e.id === Number(productId));
  return (
    <div className='popular'>
        <p className='popularp'>For the home</p>
        <h1 className='populartitle'>Where Your Heart Belongs</h1>
        <hr />
        <Carousel className='Carousel' responsive={responsive}>
            {props.data.map((item,i)=>{
              return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price} product={product}/>
            })}
        </Carousel>
    </div>
  )
}

export default Homedecor