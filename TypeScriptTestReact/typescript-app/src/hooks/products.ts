import {useEffect, useState} from "react";
import {IProducts} from "../models";
import axios, {AxiosError} from "axios";


export function useProducts(){
    const [protucts, setProducts] = useState<IProducts[]>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    async function getProducts (){
        try{
            setError('')
            setLoading(true)
            const response = await axios.get<IProducts[]>('https://fakestoreapi.com/products')
            console.log(response)
            setProducts(response.data)
            setLoading(false)
        } catch (e:unknown){
            const error = e as AxiosError
            setError(error.message)
        }

    }
    useEffect(()=>{
        getProducts()
        console.log('effect')
    },[])

    return {protucts, error, loading}
}