import Vue from 'vue';
import VueI18n from 'vue-i18n';
import vueHeadful from 'vue-headful';
import vueSmoothScroll from 'vue2-smooth-scroll';
import PortalVue from 'portal-vue';

import BootstrapVue from 'bootstrap-vue';
import './assets/style.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleDown,
  faFile,
  faPhone,
  faEnvelopeOpen,
  faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import translations from './locales';

import 'animate.css/animate.min.css';

library.add(faAngleDown, faFile, faPhone, faEnvelopeOpen, faArrowCircleDown, faGithub, faFacebook);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('vue-headful', vueHeadful);
Vue.use(BootstrapVue);
Vue.use(vueSmoothScroll);
Vue.use(PortalVue);

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'en',
  messages: translations,
});

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
