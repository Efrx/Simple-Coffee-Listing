/* eslint-disable react/prop-types */
import './CoffeeList.css'

export function CoffeeList ({ data }) {

    return (
        <ul>
            {data.map((item, index) => (
                <li key={index} className='card'>

                    <div className='card-img-container' >
                        <img src={item.image} alt="" />
                    </div>
                    <div className="card-info-container">
                        <strong>{item.name}</strong>
                        <span className='price'>{item.price}</span>
                    </div>

                    <div className="card-status-container">
                        {
                            item.votes > 0
                                ?
                                <span className='rating'>
                                    ⭐{item.rating}
                                    <span className='votes'>({item.votes} votes)</span>
                                </span>
                                :
                                <span className='no-ratings' >📉 No ratings</span>
                        }
                        {
                            !item.available &&
                            <strong className='is-sold-out' >Sold out</strong>
                        }
                    </div>
                </li>
            ))}
        </ul>
    )
}
