<template>
	<div data-app>
		<v-container fluid>
			<v-row justify="center">
				<v-col class="d-flex" cols="12" sm="3">
					<v-select
						v-model="filter"
						:items="tiposDeFiltro"
						item-text="name"
						label="Filtrar por"
						placeholder="Escolha uma das opções"
						class="purple--text"
						@change="filtroSelecionado()"
						return-object
					></v-select>
				</v-col>

				<v-col class="d-flex" cols="12" sm="3">
					<v-select
						v-if="isRegion"
						v-model="filtroDeRegiaoSelecionado"
						:items="regions"
						item-text="name"
						item-value="value"
						label="Região"
						placeholder="Escolha a região"
						class="purple--text"
						@change="regiaoSelecionada()"
						return-object
					></v-select>
				</v-col>
			</v-row>

			<v-row>
				<div id="adicionado"></div>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	setup() {},
	data: () => ({
		tiposDeFiltro: [
			{ id: 0, name: 'Região', value: 'region' },
			{ id: 1, name: 'Capital', value: 'capital' },
			{ id: 2, name: 'Língua', value: 'lang' },
			{ id: 3, name: 'País', value: 'country' },
			{ id: 4, name: 'Código de ligação', value: 'callingcode' }
		],
		filter: {},
		filtroDeRegiaoSelecionado: '',
		regions: [
			{ name: 'África', value: 'africa' },
			{ name: 'América', value: 'americas' },
			{ name: 'Asia', value: 'asia' },
			{ name: 'Europa', value: 'europe' },
			{ name: 'Oceania', value: 'oceania' }
		],
		isRegion: false,
		isOther: false
	}),

	methods: {
		filtroSelecionado() {
			const filtroEscolhido = this.filter.value;

			if (filtroEscolhido === 'region') {
				this.isRegion = true;
				this.isOther = false;
				return;
			}

			this.isRegion = false;
			this.isOther = true;
		},

		regiaoSelecionada() {
			this.$emit(
				'filtroPassado',
				`${this.filter.value}/${this.filtroDeRegiaoSelecionado.value}`
			);
		}
	}
};
</script>

<style>
.title {
	color: #6d2080;
	margin-bottom: 0;
	font-size: 14px;
}

.md-layout {
	width: 10%;
}
</style>
