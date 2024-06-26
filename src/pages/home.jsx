import React from "react"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import aboutImg from "../assets/img/about-img.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <h2 className="main__title">Главная</h2>
        <img src={aboutImg} alt="Фотография нашей аптеки" className="main__img" />
        <p className="main__text">Добро пожаловать в «Аптека у Юлии»! Мы находимся по адресу: С.Терекли-Мектеб, ул. Эдиге 13/1. Наша аптека специализируется на торговле розничными лекарственными средствами, принимаем заказы по запросу клиентов и предлагаем широкий ассортимент медицинских изделий и ортопедических товаров. Для связи с нами используйте электронную почту <b>ainaraduys@yandex.ru</b> или звоните по номеру <b>+7(988)269-96-15</b>. </p>
        <p className="main__text">Аптека не осуществляет дистанционную продажу рецептурных лекарственных средств и БАД. Реализация указанной продукции запрещена действующим законодательством РФ. Мы не нарушаем закон. Бронирование осуществляется на условиях последующего выкупа лекарственных препаратов и БАД в выбранном Вами аптечном пункте. Цены в аптечных пунктах могут отличаться от цен, указанных на сайте.</p>
      </main>
      <Footer />
    </>
  )
};

export default Home;
