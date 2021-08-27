<template>
	<v-container fluid>
		<v-row align="center">
			<v-col class="d-flex" cols="12" sm="6">
				<v-select v-model="filter.name" :items="tiposDeFiltro.name" label="Standard" class="purple--text"></v-select>
			</v-col>
		</v-row>
	</v-container>
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
		filter: { id: 0, name: 'Região', value: 'region' },
	})
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
