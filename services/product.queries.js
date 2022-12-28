import {products} from "../data/products";

export const getVisiibleProduct = (selectedLabel) => {
    if (!selectedLabel.length) return products

    return products.filter((product) => (
        selectedLabel.includes(product.category)
        )
    )
}