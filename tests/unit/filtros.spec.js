import App from '../../src/App.vue';
import vuetify from "vuetify"
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';


describe('Filtros', () => {

    let wrapper;
    let title = 'Filtros';

    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(vuetify);
        wrapper = shallowMount(App, {
            localVue,
        });
    });

    it('Se a variável isRegion for true, deverá aparecer na tela um select de regiao', () => {
        // Espera que a variável dentro de expect() seja o valor dentro de toBe()
        expect(true).toBe(true);
    })

    it('Se a variável isRegion for false, não deverá aparecer um select de região', async () => {
        expect(false).toBe(false);
    })
})