import builder from './builder.vue';
import pageBuilder from './page-builder.vue';
export default (app) => {
    app.component(builder.name, builder);
    app.component(pageBuilder.name, pageBuilder);
};