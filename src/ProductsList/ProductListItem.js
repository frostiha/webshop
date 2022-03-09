const ProductListItem = props => {
	console.log(props.product.DefaultImage.Value)
	return (
		<div className="grid-item">
			<div className="card">
        	<img className="cataloguePhoto" src={"http://rapido-343-full.websrv01.smartpage.dk/" + props.product.DefaultImage.Value} ></img>
        	<h1>{ props.product.Name}</h1>
			
        	<p className="price">{props.product.Price.PriceFormatted}</p>
        	<p dangerouslySetInnerHTML={{__html: props.product.ShortDescription}}></p>
        	<p><button>Add to Cart</button></p>
        	</div>
		</div>
	)
}
export default ProductListItem

