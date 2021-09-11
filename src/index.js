
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import { moduleToRouter } from './utils/vh.util';
import VHComponent from './components/';
import system from './store/system';
export default (app, option) => {
    app.use(VHComponent);

    let { menu, module, store, routes } = option;
    /**
     * Store Setting
     */
    let storeConfig = {
        ...system,
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
    const moduleRouter = moduleToRouter(module);
    if (moduleRouter && moduleRouter.length > 0) {
        routesConfigs = [...moduleRouter, ...routesConfigs];
    }
    const router = createRouter({
        history: createWebHistory(),
        routes: routesConfigs,
    });
    app.use(router);
    app.config.globalProperties.$menu = menu;
    app.config.globalProperties.$module = module;
};