import '../App.css';
function productList({ product,addTocart }) {
    return (
        <div className='flex'>
        {
            product.map((productItem, productIndex) => {
                return (
                    <div style={{ width: '50%' }}>
                    <div className='product-item'>
                    <img src={productItem.url} width="80%"/>
                    <p>{productItem.name} | {productItem.category} </p>
                    <p> {productItem.seller} </p>
                    <p> Rs. {productItem.price} /-</p>
                    <button 
                    onClick={() => addTocart(productItem)}
                    >Add To cart</button>
                    </div>
                    </div>
                )
            })
        }

        </div>
    )
}
export default productList;