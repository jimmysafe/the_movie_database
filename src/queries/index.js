import axios from 'axios'

const { REACT_APP_API_URL: apiUrl, REACT_APP_API_KEY: apiKey } = process.env

export const getCategory= async(pageType, pageN) => {
    switch(pageType){
        case 'popular':
            const { data: populars } = await axios.get(`${apiUrl}/discover/movie?api_key=${apiKey}&page=${pageN}`)
            return populars
        case 'top_rated':
            const { data: topRated } = await axios.get(`${apiUrl}/movie/top_rated?api_key=${apiKey}&page=${pageN}`)
            return topRated
        case 'upcoming':
            const { data: upcomings } = await axios.get(`${apiUrl}/movie/upcoming?api_key=${apiKey}&page=${pageN}`)
            return upcomings
        default:
            return null;
    }
}

export const getGenre = async(genre_id, pageN) => {
    const { data } = await axios.get(`${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=${genre_id}&page=${pageN}`)
    return data
}

export const getGenresList = async() => {
    const { data } = await axios.get(`${apiUrl}/genre/movie/list?api_key=${apiKey}`)
    return data
}

export const getMovie = async(id) => {
    const { data } = await axios.get(`${apiUrl}/movie/${id}?api_key=${apiKey}&append_to_response=videos,credits,similar`)
    return data
}

export const getMovieCast = async(id) => {
    const { data } = await axios.get(`${apiUrl}/movie/${id}/credits?api_key=${apiKey}`)
    return data
}

export const getActor = async(id) => {
    const { data } = await axios.get(`${apiUrl}/person/${id}?api_key=${apiKey}&append_to_response=movie_credits`)
    return data
}

export const getSearch = async(query, pageN) => {
    const { data } = await axios.get(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}&page=${pageN}`)
    return data
}

export const getPopularActors = async() => {
    const { data } = await axios.get(`${apiUrl}/person/popular?api_key=${apiKey}&page=1`)
    return data
}