import Filtros from '@/components/filtros';
import Vue from 'vue';
import Vuetify from "vuetify"
import { mount, createLocalVue } from '@vue/test-utils';

Vue.use(Vuetify);

describe('Filtros', () => {

    const localVue = createLocalVue();
    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify();
    })

    test('Se a variável isRegion for false, não deverá aparecer na tela um select de regiao', () => {
        const wrapper = mount(Filtros, {
            localVue,
            vuetify,
        })

        const selectRegiao = wrapper.find('#filtro').find('#regiao');

        // Espera que a variável dentro de expect() seja o valor dentro de toBe()
        expect(selectRegiao.exists()).toEqual(false);
    })

    it('Se a variável isRegion for true, deverá aparecer um select de região', async () => {
        const wrapper = mount(Filtros, {
            localVue,
            vuetify,
            propsData: { isRegion: true }
        })

        const selectRegiao = wrapper.find('#filtro');
        await wrapper.vm.$nextTick();


        expect(selectRegiao.exists()).toBe(true);
        expect(selectRegiao.text()).toBe('');
    })
})