/* eslint-disable react/prop-types */
// import { useCart } from '../hooks/useCart'
import { useFilter } from '../hooks/useFilter'
import './Footer.css'
export function Footer () {
    const { filter } = useFilter()
    // const { cart } = useCart()

    return (
        <footer className="footer">
            {
                JSON.stringify(filter, null, 2)
            }
            {/* 
            {
                JSON.stringify(cart, null, 2)
            } */}
            <strong>React ⚛ Technique test - 
                <a href="#">@efrain</a>
            </strong>
            <p>Shopping cart con useContext y useReducer</p>
        </footer>
    )
}