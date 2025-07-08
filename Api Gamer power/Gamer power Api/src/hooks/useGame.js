import { useEffect, useState } from "react";    
import { api } from "../services/api";

export const useGame = (id) => {
    const [ Games ,setGame] = useState([]);
    const [ loading ,setLoading] = useState(true);
    const [ error ,setError] = useState(null);


    useEffect(()=>{
        const fetchGames = async () =>{
            try {
                setLoading(true);
                const data = await api.getGames();
                setGame(data.Games);
            } catch (error) {
                setError(error.message);
            } finally{
                setLoading(false);
            }
        }
        fetchGames();
    },[]);

    return { Games , loading , error};
}