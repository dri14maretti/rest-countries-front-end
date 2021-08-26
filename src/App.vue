<template>
	<div id="app">
		<div class="nav">
			<navbar></navbar>
		</div>
		<div class="resto">
			<filtros></filtros>
		</div>
	</div>
</template>

<script>
import Paises from './services/paises';
import Navbar from './components/navbar.vue';
import Filtros from './components/filtros.vue';

export default {
	name: 'App',
	components: {
		Navbar,
		Filtros
	},

	data() {
		return {
			paises: []
		};
	},

	mounted() {
		Paises.listarTodos().then(resposta => {
			this.paises = resposta.data;
			console.log(this.paises);
			console.log(this.paises[0].name);
		});
	}
};
</script>

<style>
#app {
	font-family: 'Montserrat', sans-serif;
	font-style: normal;
	font-weight: normal;
}

.resto {
	margin-top: 3rem;
	margin-left: 3rem;
}
</style>
