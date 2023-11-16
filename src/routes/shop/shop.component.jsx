import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} /> {/*Parent route*/}
            <Route path=':category' element={<Category />} /> {/*category is a parameter that is going to change */}
        </Routes>
    );
}

export default Shop;