import Vue from 'vue'

export async function getProducts ({commit}) {

	try {
		const {data} = await Vue.axios({
			url: '/public/products-categories/sushidemo'
		})
		commit('setProducts', data.data)
	} catch (e) {
		commit('productsError', e.message)
	} finally {
		console.log('La petición para obtener los todos ha finalizado')
	}
}
