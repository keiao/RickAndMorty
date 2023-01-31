import { API }  from "../instance/rickAndMortyApi";

export const characterClient = {
  getCharacter (id) {
    return API.get(`character/${id}`)
  },
  getCharacters () {
    return API.get('character')
  }
}