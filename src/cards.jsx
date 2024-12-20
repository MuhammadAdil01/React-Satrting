let Cards = ({ name, price, image , para}) => {
    return <div class="jewelry-card">
        <img src={image} alt="hello" />
        <h2>{name}</h2>
        <p>A timeless piece of elegance.</p> 
        <div class="price">
            <span class="buying-rate">Buying Rate:</span> {price}
        </div>
        <button>Add to Cart</button>
    </div>
}
export default Cards
