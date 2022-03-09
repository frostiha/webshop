import { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";


//import React from "react";

const StartPage = () => {

  const navigator = useNavigate()

  const gotoCatalogue = () => {  
    navigator("/catalogue")
  }

  const gotoBasket = () => {  
    navigator("/basket")
  }

  
  return (
    <div className="start-page">
      <div className="title"><h1>Start Page</h1></div>
      
      <div className="buttons">
      <button onClick={gotoCatalogue}>Catalogue</button>
      <button onClick={gotoBasket}>Basket</button>
      </div>
    </div>
  );
};

export default StartPage;