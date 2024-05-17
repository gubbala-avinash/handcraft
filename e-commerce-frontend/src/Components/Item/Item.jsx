import React, { useContext, useCallback } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import { ShopContext } from "../../Context/ShopContext";

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = useCallback(() => {
    addToCart(props.id);
  }, [addToCart, props.id]);

  return (
    <>
      <Card className='Card' style={{ width: '18rem' }}>
        <Link to={`/product/${props.id}`} style={{ textDecoration: 'none' }}>
          <Card.Img
            variant="top"
            className='cardimg'
            style={{ width: '18rem', height: '18rem' }}
            onClick={window.scrollTo(0, 0)}
            src={props.image}
            alt="products"
          />
        </Link>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text className='Cardtext'>
            <div className="item-price-new">${props.new_price}</div>
            <div className="item-price-old">${props.old_price}</div>
          </Card.Text>
          <button onClick={handleAddToCart}>ADD TO CART</button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;
