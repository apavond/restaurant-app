import "./restaurantCard.css";

export const RestaurantCard = (props) => {
    const {
        name,
        phone,
        onlineEnabled,
        id
    } = props.restaurant;

    return (
        <div className="restaurant-card loading">
            <div>Carrusel</div>
            <form>
                <div>
                    <ul>
                        <li>
                            <input
                                type="checkbox"
                                onChange={() => console.log("make order")}
                            />
                            <span>Nombre plato</span>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <span>Nombre plato 2</span>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <span>Nombre plato 3</span>
                        </li>
                    </ul>
                </div>
                <div className="restaurant-info">
                    <span>{name}</span>
                    <span>Teléfono {phone}</span>
                    {onlineEnabled &&
                        <button>Pedir</button>
                    }
                </div>
            </form>
        </div>
    )
}