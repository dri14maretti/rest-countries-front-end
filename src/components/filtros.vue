<template>
	<div class="md-layout md-gutter">
		<div class="md-layout-item">
			<label for="filter" class="title">Filtrar por</label>
            <md-field>	
				<md-select v-model="filter" name="filter" id="filter">
					<md-option
						v-for="filtro in tiposDeFiltro"
						:value="filtro"
						:key="filtro.id"
					>
						{{ filtro.name }}
					</md-option>
				</md-select>
			</md-field>
		</div>
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
		filter: ''
	})
};
</script>

<style>
.title {
    color: #6D2080;
    margin-bottom: 0;
    font-size: 14px
}

.md-layout {
	width: 10%;
}
</style>
