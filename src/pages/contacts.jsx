import React from "react"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Map } from "../components/map/Map";

const Contacts = () => {
  return (
    <>
      <Header />
      <main className="main contacts">
        <div className="contacts__info">
          <ul className="contacts__info-list">
            <li className="contacts__info-list__item"><b>Адрес:</b>&nbsp; С.Терекли-Мектеб, ул. Эдиге 13/1</li>
            <li className="contacts__info-list__item"><b>Номер телефона:</b>&nbsp; +7(988)269-96-15</li>
            <li className="contacts__info-list__item"><b>Эл. почта:</b>&nbsp; ainaraduys@yandex.ru</li>
            <li className="contacts__info-list__item"><b>ИП:</b>&nbsp; Аджикурманова К. А.</li>
            <li className="contacts__info-list__item"><b>Выходные:</b>&nbsp; Нет</li>
            <li className="contacts__info-list__item"><b>Часы работы:</b>&nbsp; 8:00 - 20:00</li>
          </ul>
        </div>
        <div className="contacts__map">
          <Map />
        </div>
        <p className="contacts__text">Ждём вас в нашей аптеке!</p>
      </main>
      <Footer />
    </>
  )
};

export default Contacts;
