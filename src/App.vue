<template>
	<div id="app">
		<navbar></navbar>
    <h1>Teste Inicial</h1>
		
	</div>
</template>

<script>
import Paises from './services/paises';
import Navbar from './components/navbar.vue';

export default {
	name: 'App',
	components: {
		Navbar
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
      console.log(this.paises[0].name)
		});
	}
};
</script>

<style>

</style>
