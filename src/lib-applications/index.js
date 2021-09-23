import application from './application.vue';
import sidebarLayout from './layout/sidebar.vue';
import noSidebarLayout from './layout/no-sidebar.vue';
import fullLayout from './layout/full.vue';
export default (app) => {
    app.component(sidebarLayout.name, sidebarLayout);
    app.component(noSidebarLayout.name, noSidebarLayout);
    app.component(fullLayout.name, fullLayout);
    app.component(application.name, application);
};