import { useNavigate } from "react-router-dom"
import { fetchProducts } from "../../API/CatalogueAPI.js"
import ProductListItem from "../../ProductsList/ProductListItem.js"
import { useContext, useEffect, useState} from "react";

const Catalogue = () => {

    const navigator = useNavigate()
  
    const gotoStartpage = () => {  
      navigator("/")
    }
  
    const gotoBasket = () => {  
      navigator("/basket")
    }

    // Local state - Hooks
	// 1. - State (VALUE)
	// 2. - Setter (UPDATE STATE) - Function
	const [state, setState] = useState({
		products: [],
		emptyArray: null
	})

	// Hook!
	useEffect(() => { // Lifecylce - ComponentDidMount

		fetchProducts()
			.then(products => {
				setState({
					...state,
					products
				})
			})
			.catch(error => {
				console.error(error.message)
			})

			return () => { // Lifecycle - ComponentWillUnmount
				// For Clean up code.
			}

	}, []) // - Lifecyle - ComponentDidUpdate

    
    return (
      <div className="start-page">
        <div className="title"><h1>Catalogue</h1></div>
        
        <div className="buttons">
        <button onClick={gotoStartpage}>Startpage</button>
        <button onClick={gotoBasket}>Basket</button>
        </div>


        <main>
			<h4>Products</h4>
            <div className="grid-container">
  
                
			    { state.products.map(product => <ProductListItem key={product.Id} product={ product } />) }
            </div>
           

        </main>
        
      </div>
    );
  

}

export default Catalogue