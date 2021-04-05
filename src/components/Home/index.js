import React, {useEffect, useState} from 'react'
import Search from '../Seacrh'
import Output from '../Output'
import { GET_ALL_COCKTAILS } from '../../config'
export default function Home() {

    const [cocktails, setCocktails] = useState()


    useEffect(()=>{
        getAllCocktails()
    },[])

    const getAllCocktails = async()=>{
        const req = await fetch(GET_ALL_COCKTAILS)
        const res = await req.json()
        setCocktails(res.drinks)
    }

    return (
        <div>
            <Search/>
            <Output
                cocktails={cocktails}
            />
        </div>
    )
}
