import React from 'react'
import { GET_DETAIL_BY_ID } from '../../config'

export default function Detail(props) {

    const [cocktail, setCocktail] = React.useState()

    React.useEffect(()=>{
      let id = props?.match.params.id
      getDetail(id)
    },[])

    const getDetail = async (id)=>{
        const req = await fetch(GET_DETAIL_BY_ID+id)
        const res = await req.json()
        setCocktail(res.drinks[0])
    }

    return (
        <div>
          <h5>{cocktail?.strDrink}</h5>
          <img src = {cocktail?.strDrinkThumb}/>
          <h5> Glass: {cocktail?.strGlass}</h5>
          <p>Instruction: {cocktail?.strInstructions}</p>
        </div>
    )
}
