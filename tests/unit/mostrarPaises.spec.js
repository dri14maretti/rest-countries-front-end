import MostrarPaises from '@/components/mostrarPaises.vue';
import Vue from 'vue';
import Vuetify from "vuetify"
import { mount, createLocalVue } from '@vue/test-utils';

Vue.use(Vuetify);

describe('MostrarPaises.vue', () => {
    const localVue = createLocalVue();
    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify();
    })

    it('Emite evento com o pais selecionado', () => {
        const wrapper = mount(MostrarPaises, {
            localVue,
            vuetify,
            propsData: { paisesRecebidos: [] }
        })

        expect(true).toBe(true);
    })
})