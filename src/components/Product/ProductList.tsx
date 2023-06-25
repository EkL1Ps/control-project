import ProductListItem from './ProductListItem'
import './ProductList.scss'
import './ProductListItem.scss'
import productsArray from '../../utils/productsArray'

type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            <div className="main-product-list">
                <div className="main-product-title">
                    <h6 className="vestibulum">VESTIBULUM</h6>
                    <h2 className="products-typography">PRODUCTS</h2>
                </div>
                <div className="row main-card">
                    {productsArray.map(({ id, title, price, image, alt }) => (
                        <div className="col-3 product-card" key={id}>
                            <ProductListItem
                                title={title}
                                price={price}
                                image={image}
                                alt={alt}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <a href="#" className="scarlet-button product-button">
                Go to shop
            </a>
        </>
    )
}

export default ProductList