import { useState } from "react"

export const useFilter = () => {
    const [filter, setFilter] = useState({
        show: 'all',
    })

    const filterProducts = (products) => {
        return products.filter(product => {
            if (filter.show === 'available') {
                return product.available === true
            } else {
                return (product.available === true || product.available === false)
            }
        })
    }

    return { filter, setFilter, filterProducts }
}