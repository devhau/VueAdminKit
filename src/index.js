
import { createStore } from 'vuex';
import { createRouter, createWebHashHistory } from 'vue-router';
import { moduleToRouter } from './utils/vh.util';
import VHComponent from './components/';
import systemStore from './store/system';
import optionDefault from './config';
import VHPageManager from './components/page/manager';
export default (app, option) => {
    app.use(VHComponent);

    let { menu, module, store, routes, system } = Object.assign(optionDefault, option);
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

};