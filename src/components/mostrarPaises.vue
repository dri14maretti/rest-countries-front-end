<template>
	<v-container>
		<v-row justify="center">
			<a href="#">
				<img
					class="flags text-center"
					v-for="pais of paisesRecebidos"
					:src="pais.flag"
					:key="pais.name"
					:alt="pais.name"
				/>
			</a>
			<v-pagination
				v-model="page"
				:length="15"
				total-visible="6"
				color="#6d2080"
			>
			</v-pagination>
		</v-row>
	</v-container>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
	setup() {},
	props: ['paisesRecebidos'],
	data: () => ({
		page: 1
	}),
	mounted() {
		console.log(this.paisesRecebidos);
	}
});
</script>

<style>
.flags {
	width: 20rem;
	height: 20rem;
	margin-right: 3rem;
	margin-bottom: 2rem;
}
</style>
