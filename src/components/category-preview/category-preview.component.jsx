import ProductCard from '../product-card/product-card.component';

import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {
    return(
        <div className='category-preview-container'>
            <h2>
                <span className='title'>{title.toUpperCase()}</span>
            </h2>
            <div className='preview'>
                {
                    // first parameter is the product, is being ignored
                    // second parameter is the product's index, we just need the first 4 products
                    products.filter((_, index) => index < 4)
                            .map((product) => <ProductCard key={product.id} product={product}/> )
                }
            </div>
        </div>
    );
}

export default CategoryPreview;