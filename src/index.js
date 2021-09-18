
import { createStore } from 'vuex';
import { createRouter, createWebHashHistory } from 'vue-router';
import { moduleToRouter } from './utils/vh.util';
import VHComponent from './components/';
import systemStore from './store/system';
import optionDefault from './config';
import directives from './directives';
import VHPageManager from './components/page/manager';
import modules from './modules/index';
import { FieldType } from './components/form/field-type';

import { GridColumn } from './components/builder/grid-column';
import { console } from './utils/console.util';

export default (app, option) => {
    app.use(directives);
    app.use(VHComponent);

    let { menu, module, store, routes, system, FieldType: FieldType2, GridColumn: GridColumn2 } = Object.assign(optionDefault, option);
    module = Object.assign(modules, module);
    /**
     * Store Setting
     */
    let storeConfig = {
        ...systemStore,
    }
    if (store) {
        storeConfig.module = {
            ...store,
        };
    }
    const $store = createStore(storeConfig);
    const $can = (permission) => {
        return $store.getters['canPermission'](permission);
    };
    app.$store = $store;
    app.use($store);
    app.config.globalProperties.$can = $can;

    let routesConfigs = [];
    if (routes && routes.length > 0) {
        routesConfigs = [...routes];
    }
    const moduleRouter = moduleToRouter(module, VHPageManager);
    if (moduleRouter && moduleRouter.length > 0) {
        routesConfigs = [...moduleRouter, ...routesConfigs];
    }
    const router = createRouter({
        history: createWebHashHistory(),
        routes: routesConfigs,
    });
    app.use(router);
    app.config.globalProperties.$menu = menu;
    app.config.globalProperties.$module = module;
    app.config.globalProperties.$system = system;
    app.config.globalProperties.$FieldType = Object.assign(FieldType, FieldType2);
    app.config.globalProperties.$GridColumn = Object.assign(GridColumn, GridColumn2);
    console.log(app.config.globalProperties.$GridColumn);
};