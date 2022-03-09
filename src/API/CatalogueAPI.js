const cataloguePostURL = "http://rapido-343-full.websrv01.smartpage.dk/dwapi/ecommerce/products?RepositoryName=Products&QueryName=Products"             




// 
export const fetchProducts = async () => {
    try {
        const response = await fetch(cataloguePostURL,{
            method:'POST'
        })
        if(!response.ok){
            throw new Error(`Error `)
        }
        const data = await response.json()
        return data.Products
    }
    catch(error) {
        return [error.message, []]
    }
}

