import rickAndMortyApi  from "../api/rickAndMortyApi"

const getRickAndMorty = () => {
    const rickArr = Array.from( Array(825) )
   
    return rickArr.map( ( _, index ) => index + 1)
}


const getRickAndMortyOptions = async () => {

    const mixedRick =  getRickAndMorty()
                        .sort( () => Math.random() - 0.5 )


  const rickM= await getRickAndMortyNames( mixedRick.splice(0.4) )

    return rickM
   
}

const getRickAndMortyNames = async( [a] = [] ) => {

   

    const arrPromises = [
        rickAndMortyApi.get(`/${ a }`)
    ]

    const [ p1 ] = await Promise.all( arrPromises )

    return [
        { name: p1.data.name, id: p1.data.id }
    ]
}


export default getRickAndMortyOptions


