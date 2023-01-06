import "./Intro.scss";
import Skidka from "../../images/chegirma.jpg";
import Bozor from "../../images/bozor.jpg";
import Twenty23 from "../../images/2023.jpg";
import Apteka from "../../images/apteka.jpg";
import Market from "../../images/market.jpg";
import Zakaz from "../../images/zakaz.jpg";
import Podarki from "../../images/vkusniyepadarki.jpg";
import Zvezda from "../../images/zvezdalyot.jpg";
import FastFood from "../../images/fastfood.jpg";
import ALotOfBurgers from "../../images/alotofburgers.jpg";
import DetskoeMenu from "../../images/deskimenyu.jpg";
import Express from "../../images/tolkoexpress.jpg";
import { useRef } from 'react';
import TheLoaf from "../../images/theloaf.jpg";
import TheMart from "../../images/themart.jpg";
import TheoxyMed from "../../images/oxymed.jpg";
import TheSaxovat from "../../images/thesaxovat.jpg";

function Intro() {
const FirstCarusel = useRef(null);
const SecondCarusel = useRef(null);

const scroll = (scrollOffset) => {
FirstCarusel.current.scrollLeft += scrollOffset;
};
const scroll2 = (scrollOffset) => {
SecondCarusel.current.scrollLeft += scrollOffset;
};
return (
  <section className='intro'>
    <div className="container">
      <div className="intro-box">
        <div ref={FirstCarusel} className="intro-box-mini">
          <button onClick={()=> scroll(-220)} className="intro-box-mini-prev"><img
              src="https://img.icons8.com/material-sharp/24/null/chevron-left.png" /></button>
          <button onClick={()=> scroll(220)} id='slideLeft' className="intro-box-mini-next"><img
              src="https://img.icons8.com/material-sharp/24/null/chevron-left.png" /></button>
          <img className='intro-box-mini-element' src={Skidka} alt="" />
          <img className='intro-box-mini-element' style={{marginLeft: "20px"}} src={Bozor}s alt="" />
          <img className='intro-box-mini-element' style={{marginLeft: "20px"}} src={Twenty23} alt="" />
          <img className='intro-box-mini-element' style={{marginLeft: "20px"}} src={Apteka} alt="" />
          <img className='intro-box-mini-element' style={{marginLeft: "20px"}} src={Market} alt="" />
          <img className='intro-box-mini-element' style={{marginLeft: "20px"}} src={Zakaz} alt="" />
          <img className='intro-box-mini-element' style={{marginLeft: "20px"}} src={Podarki} alt="" />
          <img className='intro-box-mini-element' style={{marginLeft: "20px"}} src={Zvezda} alt="" />
          <img className='intro-box-mini-element' style={{marginLeft: "20px"}} src={FastFood} alt="" />
          <img className='intro-box-mini-element' style={{marginLeft: "20px"}} src={ALotOfBurgers} alt="" />
          <img className='intro-box-mini-element' style={{marginLeft: "20px"}} src={DetskoeMenu} alt="" />
          <img className='intro-box-mini-element' style={{marginLeft: "20px"}} src={Express} alt="" />
        </div>
        <div className="intro-box-big">
          <h1 className='intro-box-big-title'>Магазины</h1>
          <div className="intro-box-big-carusel" ref={SecondCarusel}>
            <button onClick={()=> scroll2(-260)} className="intro-box-big-carusel-prev"><img
                src="https://img.icons8.com/material-sharp/24/null/chevron-left.png" /></button>
            <button onClick={()=> scroll2(260)} id='slideLeft' className="intro-box-big-carusel-next"><img
                src="https://img.icons8.com/material-sharp/24/null/chevron-left.png" /></button>
            <div className='intro-box-big-carusel-element'>
              <img src={TheLoaf} alt="" />
              <h1>The Loaf</h1>
              <p>Продукты</p>
            </div>
            <div className='intro-box-big-carusel-element'>
              <img src={TheMart} alt="" />
              <h1>The Mart</h1>
              <p>Продукты</p>
            </div>
            <div className='intro-box-big-carusel-element'>
              <img src={TheoxyMed} alt="" />
              <h1>Аптека OXYmed - Алайский</h1>
              <p>Здоровье</p>
            </div>
            <div className='intro-box-big-carusel-element'>
              <img src={TheSaxovat} alt="" />
              <h1>Saxovat Broiler - халяльная</h1>
              <p>Продукты</p>
            </div>
            <div className='intro-box-big-carusel-element'>
              <img src={TheoxyMed} alt="" />
              <h1>Аптека OXYmed - Алайский</h1>
              <p>Здоровье</p>
            </div>
            <div className='intro-box-big-carusel-element'>
              <img src={TheoxyMed} alt="" />
              <h1>Аптека OXYmed - Алайский</h1>
              <p>Здоровье</p>
            </div>
            <div className='intro-box-big-carusel-element'>
              <img src={TheoxyMed} alt="" />
              <h1>Аптека OXYmed - Алайский</h1>
              <p>Здоровье</p>
            </div>
            <div className='intro-box-big-carusel-element'>
              <img src={TheoxyMed} alt="" />
              <h1>Аптека OXYmed - Алайский</h1>
              <p>Здоровье</p>
            </div>
            <div className='intro-box-big-carusel-element'>
              <img src={TheoxyMed} alt="" />
              <h1>Аптека OXYmed - Алайский</h1>
              <p>Здоровье</p>
            </div>
            <div className='intro-box-big-carusel-element'>
              <img src={TheoxyMed} alt="" />
              <h1>Аптека OXYmed - Алайский</h1>
              <p>Здоровье</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}

export default Intro;