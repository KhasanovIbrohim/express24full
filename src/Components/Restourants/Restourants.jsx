import './Restourants.scss';
import foods from './data.js';
import { useRef, useState } from 'react';

function Restourants() {
const all = useRef(0);
const other = useRef(0);
const newRenrder = []
const [company, setCompany] = useState([]);
function getRenderFood(name) {
    all.current.style.display = "none"
    other.current.style.display = "flex"
    newRenrder.splice(0, newRenrder.length)
    for(var index = 0; index < foods.foods.length; index++){ 
        if(foods.foods[index].category !==name){ continue } 
        else {newRenrder.push(foods.foods[index]) } 
    } 
    setCompany(newRenrder)
    }
    function setFavourite(id){
        for(var index = 0; index < foods.foods.length; index++){ 
            if(foods.foods[index].id == id){ 
                foods.foods[index].category = "favourite"
            } 
        }
    }
    function getRenderAll(){
        other.current.style.display = "none"
    all.current.style.display = "flex"
    }
     return ( <section className='restourants'>
    <div className="container">
        <div className="restourants-top">
            <h1 className='restourants-top-title'>Рестораны</h1>
            <div className='restourants-top-category'>
                <div className="restourants-top-category-left">
                    <button onClick={()=> getRenderFood("favourite")}>❤️ Избранные</button>
                    <button onClick={()=> getRenderFood("uzcard")} style={{marginLeft: "8px"}}>Uzcard</button>
                    <button onClick={()=> getRenderFood("new")} style={{marginLeft: "8px"}}>Новинки</button>
                    <button onClick={()=> getRenderFood("bazaar")} style={{marginLeft: "8px"}}>Базары</button>
                    <button onClick={()=> getRenderFood("fastfood")} style={{marginLeft: "8px"}}>Fast Food</button>
                    <button onClick={()=> getRenderFood("national")} style={{marginLeft: "8px"}}>Национальная</button>
                    <button onClick={()=> getRenderFood("euro")} style={{marginLeft: "8px"}}>Европейская</button>
                    <button onClick={()=> getRenderFood("pizza")} style={{marginLeft: "8px"}}>Пицца</button>
                    <button onClick={()=> getRenderAll()} style={{marginLeft: "8px"}}>Все</button>
                </div>
                <select className="restourants-top-category-select" name="categoryName">
                    <option style={{display: "none"}}>Еще</option>
                    <option value="healthy">Здоровье</option>
                    <option value="euro">Европейская</option>
                    <option value="condision">Кондитерская</option>
                    <option value="barbeque">Барбекю</option>
                    <option value="products">Продукты</option>
                    <option value="icecream">Мороженое</option>
                    <option value="pp">ПП</option>
                </select>
            </div>
        </div>
        <div className="restourants-bott">
            <div className='restourants-bottom' ref={all}>
                {
                foods.foods.map((food, i) => (
                <div className="restourants-bottom-box" key={i}>
                    <img className='restourants-bottom-box-image' src={food.image} alt="image" />
                    <button className='restourants-bottom-box-fav' onClick={()=> setFavourite(food.id)}><img
                            src="https://img.icons8.com/ios/50/null/like--v1.png" /></button>
                    <h1 className='restourants-bottom-box-title'>{food.title}</h1>
                    <p className='restourants-bottom-box-text'>{food.text}</p>
                    <div className='restourants-bottom-box-mini'>
                        <div>
                            <img src="https://img.icons8.com/fluency-systems-regular/48/null/hand-drawn-star--v1.png" />
                            <p>{food.rating}</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/material-outlined/24/null/carpool.png" />
                            <p>{food.price}</p>
                        </div>
                    </div>
                </div>
                ))
                }
            </div>
            <div className='restourants-bottom other products-other' ref={other}>
                {
                company.map((food, i) => (
                <div className="restourants-bottom-box" key={i}>
                    <img className='restourants-bottom-box-image' src={food.image} alt="image" />
                    <button className='restourants-bottom-box-fav' onClick={()=> setFavourite(food.id)}><img
                            src="https://img.icons8.com/ios/50/null/like--v1.png" /></button>
                    <h1 className='restourants-bottom-box-title'>{food.title}</h1>
                    <p className='restourants-bottom-box-text'>{food.text}</p>
                    <div className='restourants-bottom-box-mini'>
                        <div>
                            <img src="https://img.icons8.com/fluency-systems-regular/48/null/hand-drawn-star--v1.png" />
                            <p>{food.rating}</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/material-outlined/24/null/carpool.png" />
                            <p>{food.price}</p>
                        </div>
                    </div>
                </div>
                ))         

                }
            </div>
        </div>
    </div>
    </section>
    );
    }

    export default Restourants;