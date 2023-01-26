import axios from 'axios'


const rickandmortyApi = axios.create ({
    baseURL: 'https://rickandmortyapi.com/api/character',
    // baseURL: 'https://rickandmortyapi.com/api/location',
    // baseURL: 'https://rickandmortyapi.com/api/episode',
    
})

export default rickandmortyApi