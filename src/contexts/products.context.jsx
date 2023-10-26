import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

// import SHOP_DATA from '../shop-data';

export const ProductContext = createContext({
    products: []
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const value = {products};

    // used to post data to firestore, don't need it anymore
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    );
}