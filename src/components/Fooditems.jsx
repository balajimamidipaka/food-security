import FooditemCard from './FooditemCard';

export default function Fooditems() {
    const items = [
        { 
            id: 1, 
            image: 'https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478_640.jpg',
            name: 'Pizza', 
            expiryDate: '2024-11-10' 
        },
        { 
            id: 2, 
            image: 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_640.jpg', 
            name: 'Burger', 
            expiryDate: '2024-11-12' 
        },
        { 
            id: 3, 
            image: 'https://www.recipetineats.com/tachyon/2021/08/Garden-Salad_47-SQ.jpg', 
            name: 'Salad', 
            expiryDate: '2024-11-15' 
        },
        { 
            id: 4, 
            image: 'https://www.authenticroyal.com/wp-content/uploads/2024/06/Chicken-Biryani-Royal-Chefs-Secret_03-scaled.jpg', 
            name: 'biryani', 
            expiryDate: '2024-11-20' 
        },
        { 
            id: 5, 
            image: 'https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg', 
            name: 'dosa', 
            expiryDate: '2024-11-17' 
        },
        { 
            id: 6, 
            image: 'https://www.savoryexperiments.com/wp-content/uploads/2022/11/Fried-Rice-9-500x500.jpg', 
            name: 'fried rice', 
            expiryDate: '2024-11-16' 
        },
        { 
            id: 7, 
            image: 'https://madhurasrecipe.com/wp-content/uploads/2023/01/Ration-Rice-Idli-Featured.jpg', 
            name: 'idly', 
            expiryDate: '2024-11-16' 
        },
    ]
    const handleOrder = (itemName) => {
        alert(`You ordered: ${itemName}`);
    };

    return (
        <div className="food-list">
            {items.map((item) => (
                <FooditemCard
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    expiryDate={item.expiryDate}
                    onOrder={() => handleOrder(item.name)}
                />
            ))}
        </div>
    )
}