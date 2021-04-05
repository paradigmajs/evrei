import React from 'react'
import { Link } from 'react-router-dom'

export default function Output({cocktails}) {
    return (
        <div>
            {
                cocktails && cocktails.map(el=>{
                    return(
                        <Link to={'/detail/' + el.idDrink} key={el.idDrink}>  
                            <img src={el.strDrinkThumb} alt={el.strDrink}/>
                            <h5>{el.strDrink}</h5>
                        </Link>
                    )
                })
            }
        </div>
    )
}
