import React from "react"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link, useParams } from "react-router-dom";
import products from "../data/product.json"

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  React.useEffect(() => {
    setProduct(products.find(item => item.id == id));
  }, []);
  return (
    <>
      <Header />
      <div className="product__header">
        <Link to="/" className="product__header-link">
          <svg width="40px" height="40px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g id="Layer_2" data-name="Layer 2">
              <g id="invisible_box" data-name="invisible box">
                <rect width="48" height="48" fill="none"/>
              </g>
              <g id="Q3_icons" data-name="Q3 icons">
                <path fill="#022448" d="M19.7,6a.9.9,0,0,0-.8.4L2.4,23.1a1.5,1.5,0,0,0,0,2L18.9,41.6a.9.9,0,0,0,.8.4,1.2,1.2,0,0,0,1.1-1.3V31c15.7.7,21.1,3.8,23.5,9.2.4.8.8,1.1,1.1,1.1s.6-.4.6-1c-.2-10.5-10-20.9-25.2-22.4V7.3A1.2,1.2,0,0,0,19.7,6Z"/>
              </g>
            </g>
          </svg>
        </Link>
      </div>
      <main className="main">
        <div className="product">
          <div className="product__img-wrapper">
            <img src={product.image} alt={product.name} className="product__img" />
          </div>
          <div className="product__info">
            <h2 className="product__info-title">{product.name}</h2>
            <h3 className="product__info-volume">{product.volume} в упаковке</h3>
            <h3 className="product__info-composition">Состав: {product.composition}</h3>
            <h3 className="product__info-price">Цена: {product.price} ₽</h3>
            <p className="product__info-quantity">{product.quantity} шт в наличии</p>
            <p className="product__info-text">Для того, чтобы связаться с продавцом, по вопросу, интересующему вас, вы можете нажать по кнопке или же набрать номер +7(988)269-96-15</p>
            <a href="tel:+79882699615" className="product__info-link">Позвонить</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
};

export default Product;
