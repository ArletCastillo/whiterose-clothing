import { useContext } from "react";

import { ProductContext } from "../../contexts/products.context";

const Shop = () => {
    const { products } = useContext(ProductContext);

    return (
        <div>
            {products.map(({id, name}) => (
                <div key={id}>
                    <h2>{name}</h2>
                </div>
            ))}
        </div>
    );
}

export default Shop;