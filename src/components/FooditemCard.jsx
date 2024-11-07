import './css/foodItemcard.css';

export default function FooditemCard({ image, name, expiryDate, onOrder }) {
    return (
        <div className="food-card">
            <img src={image} alt={name} className="food-image" />
            <div className="food-info">
                <h3 className="food-name">{name}</h3>
                <p className="food-expiry">Expires on: {expiryDate}</p>
                <button className="order-button" onClick={onOrder}>Order Now</button>
            </div>
        </div>
    )
}