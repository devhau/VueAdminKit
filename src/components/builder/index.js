import builder from './builder.vue';
import pageBuilder from './page-builder.vue';
import { GridColumn } from './grid-column';
export default (app) => {
    app.config.globalProperties.$GridColumn = GridColumn;
    app.component(builder.name, builder);
    app.component(pageBuilder.name, pageBuilder);
};