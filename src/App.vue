<template>
	<div id="app">
		<div class="nav">
			<navbar></navbar>
		</div>
		<div class="resto">
			<filtros></filtros>
      <mostrar-paises :paisesRecebidos="paises"></mostrar-paises>
		</div>
	</div>
</template>

<script>
import Navbar from './components/navbar.vue';
import Filtros from './components/filtros.vue';
import { http } from './services/config'
import MostrarPaises from './components/mostrarPaises.vue';

export default {
	name: 'App',
	components: {
		Navbar,
		Filtros,
    MostrarPaises
	},

	data() {
		return {
			paises: [],
      listarTodos: (value="all") => {
        return http.get(value)
      }
		};
	},

	mounted() {
		this.listarTodos().then(resposta => {
			this.paises = resposta.data;
			console.log(this.paises);
			console.log(this.paises[0]);
		});
	}
};
</script>

<style>
#app {
	width: 100%;
  font-family: 'Montserrat', sans-serif;
	font-style: normal;
	font-weight: normal;
}


.resto {
  margin-top: 3rem;
	margin-left: 3rem;
}
</style>
