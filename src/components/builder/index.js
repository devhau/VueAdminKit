import builder from './builder.vue';
import pageBuilder from './page-builder.vue';
import builderView from './builder-view.vue';
export default (app) => {
    app.component(builderView.name, builderView);
    app.component(builder.name, builder);
    app.component(pageBuilder.name, pageBuilder);
};