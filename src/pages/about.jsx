import React from "react"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import aboutImg from "../assets/img/about-img.jpg";

const About = () => {
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
        <img src={aboutImg} alt="Фотография нашей аптеки" className="main__img" />
        <p className="main__text">Добро пожаловать в «Аптека у Юлии»! Мы находимся по адресу: С.Терекли-Мектеб, ул. Эдиге 13/1. Наша аптека специализируется на торговле розничными лекарственными средствами, принимаем заказы по запросу клиентов и предлагаем широкий ассортимент медицинских изделий и ортопедических товаров. Для связи с нами используйте электронную почту <b>ainaraduys@yandex.ru</b> или звоните по номеру <b>+7(988)269-96-15</b>. </p>
        <p className="main__text">Аптека не осуществляет дистанционную продажу рецептурных лекарственных средств и БАД. Реализация указанной продукции запрещена действующим законодательством РФ. Мы не нарушаем закон. Бронирование осуществляется на условиях последующего выкупа лекарственных препаратов и БАД в выбранном Вами аптечном пункте. Цены в аптечных пунктах могут отличаться от цен, указанных на сайте.</p>
      </main>
      <Footer />
    </>
  )
};

export default About;
