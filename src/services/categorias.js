import api from '../plugins/api'

class CategoriaService {
  async getAllCategorias() {
    const response = await api.get('/categorias/')
    console.log(response.data)
    return response.data
  }
  async saveCategoria(categorias) {
    const response = await api.post('/categorias/', categorias)
    return response.data
  }
  async deleteCategoria(categoria) {
    const response = await api.delete(`/categorias/${categoria.id}/`)
    return response.data
  }
}

export default new CategoriaService()



