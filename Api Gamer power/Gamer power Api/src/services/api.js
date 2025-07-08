const  BASE_URL = 'https://www.gamerpower.com/api'; 
export const api = {

    getGames:async (limit = 10 , skip = 0) => { 
    const response = await fetch(`${BASE_URL}/giveaways?limit=${limit}&skip=${skip}`);
    return response.json();
},

    getGameById: async (id) => {
        const response = await fetch(`${BASE_URL}/giveaway?id=${id}`);
        return response.json();
    },

    getGamesByPlatform: async (platform, limit = 10, skip = 0) => {
        const response = await fetch(`${BASE_URL}/giveaways?platform=${platform}&limit=${limit}&skip=${skip}`);
        return response.json();
    }

   

}
  
