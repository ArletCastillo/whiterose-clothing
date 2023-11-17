import { Link } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';

import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
    return(
        <CategoryPreviewContainer>
            <h2>
                <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {
                    // first parameter is the product, is being ignored
                    // second parameter is the product's index, we just need the first 4 products
                    products.filter((_, index) => index < 4)
                            .map((product) => <ProductCard key={product.id} product={product}/> )
                }
            </Preview>
        </CategoryPreviewContainer>
    );
}

export default CategoryPreview;