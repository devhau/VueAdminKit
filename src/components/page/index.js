import { VHPage } from './page';
import VHPageManager from './manager/index.vue';
export default (app) => {
    app.component(VHPageManager.name, VHPageManager);
    app.component(VHPage.name, VHPage);
};