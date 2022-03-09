import { useContext } from "react"
import { useNavigate } from "react-router-dom"


const Basket = () => {
    // //use context
    // let currentUser = useContext(UserAPI)
    // //initiate navigator
    // const navigator = useNavigate()


    // //moves to translate page on click
    // const gotoTranslate = () => {
    //     navigator("/translate")
    //   }

    // //clears translations array on click
    // const handleClearButtonClicked = () => {
    //     while(currentUser.translations.length > 0){
    //         currentUser.translations.pop()
    //     }
    //     navigator("/profile")
    // }

    // //handles user logout
    // const handleLogOut = () => {
    //     //update API
    //     updateUser(currentUser.id, currentUser)
    //     //reset to default user
    //     currentUser.loggedIn = false
    //     currentUser.id = 0
    //     currentUser.username = ""
    //     currentUser.translations = []
    //     //go to startpage
    //     navigator('/')
    // }
    
//import React from "react";

  const navigator = useNavigate()
  
  const gotoStartpage = () => {  
    navigator("/")
  }

  const gotoCatalogue = () => {  
    navigator("/catalogue")
  }


  return (
    <div className="start-page">
      <div class="title"><h1>Basket</h1></div>
    
      <div className="buttons">
      <button onClick={gotoStartpage}>Startpage</button>
      <button onClick={gotoCatalogue}>Catalogue</button>
      </div>
    </div>
  );


}

export default Basket