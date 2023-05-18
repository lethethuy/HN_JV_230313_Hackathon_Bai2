import React, { useState } from "react";

function Product({ product }) {
  return (
    <div>
      <div className="cart-container">
        {product.map((element) => (
          <ProductItem key={element.id} product={element} />
        ))}
      </div>
    </div>
  );
}

function ProductItem({ product }) {
  const [count, setCount] = useState(0);

  const handleChangeAdd = () => {
    setCount(count + 1);
  };

  const handleChangeTru = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="img">
      <img src={product.imageUrl} alt="" />
      <div className="sub-img">
        <div>
          <p>{product.name}</p>
        </div>
        <div>
          <i className="fa-solid fa-heart" />
        </div>
      </div>
      <div className="addProduct">
        <button onClick={handleChangeAdd} className="buttonCong">
          +
        </button>
        <p>{count}</p>
        <button onClick={handleChangeTru} className="buttonTru">
          -
        </button>
      </div>
    </div>
  );
}

export default Product;