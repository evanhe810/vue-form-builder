import ViewFormAdaptor from './components/ViewFormAdaptor.vue';

const install = function installViewFormAdaptor(Vue) {
  Vue.component('view-form-adaptor', ViewFormAdaptor);
};

export { ViewFormAdaptor };

export default {
  install
};
