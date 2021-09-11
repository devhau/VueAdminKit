import application from './application.vue';
export default (app) => {
    app.component(application.name, application);
};