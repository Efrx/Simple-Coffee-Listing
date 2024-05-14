/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { getCoffeeList } from '../services/coffeeList'
import { DataList } from './mocks/with-results.json'

export const useData = () => {

    // const [data, setData] = useState(null)
    // const [error, setError] = useState(null)
    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(()=>{
    //     const fetchData = async () => {
    //         try {
    //             getCoffeeList().then(res => console.log(res))
    //             // if (!res.ok) {
    //             //     throw new Error('Failed to fetch data')
    //             // }

    //         } catch (error) {
    //             setError(error)
    //         } finally {
    //             setIsLoading(false)
    //         }
    //     }
    //     fetchData()
    //     return () => {
    //         setData(null)
    //         setError(null)
    //         setIsLoading(true)
    //     }
    // },[])

    return {  }
}