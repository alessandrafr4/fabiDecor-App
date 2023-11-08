import api from '../plugins/api'

class TemaService {
  async getAllTemas() {
    const response = await api.get('/temas/')
    return response.data
  }
  async saveTema(tema) {
    const response = await api.post('/temas/', tema)
    return response.data
  }
  async deleteTema(tema) {
    const response = await api.delete(`/temas/${tema.id}/`)
    return response.data
  }
}

export default new TemaService()

