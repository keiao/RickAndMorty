import { API }  from "../instance/rickAndMortyApi";

export const episodeClient = {
  getEpisode (id) {
    return API.get(`episode/${id}`)
  },
  getEpisodes (params) {
    return API.get('episode', {
      params,
    })
  },
}
