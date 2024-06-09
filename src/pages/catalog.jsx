import React from "react"
import Header from './../components/header/Header';
import Footer from "../components/footer/Footer";
import products from "../data/product.json"
import { Link } from "react-router-dom";

const Catalog = () => {
  return (
    <>
      <Header />
      <main className="main">
        <h2 className="main__title">Наш ассортимент товаров</h2>
        <div className="main__wrapper-products">
          {
            products.map((item) => (
              <Link to={`/${item.id}`} className="main__product" key={item.id}>
                <img className="main__product-img" src={item.image} />
                <div className="main__product__wrapper-info">
                  <h3 className="main__product-title">{item.name}</h3>
                  <p className="main__product-description">Состав: {item.composition}</p>
                  <p className="main__product-button">Подробнее</p>
                </div>
              </Link>
            ))
          }
        </div>
      </main>
      <Footer />
    </>
  )
};

export default Catalog;
