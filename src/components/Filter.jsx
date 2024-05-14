/* eslint-disable react/prop-types */
// import { useFilter } from '../hooks/useFilter'
import './Filter.css'
export function Filter ({ setFilter }) {
    // const { filter, setFilter } = useFilter()
    
    const handleChange = (event) => {
        const selectedValue = event.target.value
        setFilter(prevState => ({
            ...prevState,
            show: selectedValue
        }))
    }

    return(
        <form className='filter' onChange={handleChange}>
            <input 
                type="radio" 
                id='all' 
                name="filter" 
                value='all'
            />
            <label htmlFor='all' >All Products</label>

            <input 
                type="radio" 
                id='available' 
                name="filter" 
                value='available'
            />
            <label htmlFor='available' >Available Now</label>
        </form>
    )
}