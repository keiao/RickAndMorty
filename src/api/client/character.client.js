import { API }  from "../instance/rickAndMortyApi";

export const characterClient = {
  getCharacter (id) {
    return API.get(`character/${id}`)
  },
  getCharacters (params) {
    return API.get('character', {
      params,
    })
  },
}
