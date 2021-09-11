// initial state
const state = () => ({
    auth: false,
    user: false,
    layout: false,
    site: false,
    admin: false,
    permissions: false,
})

// getters
const getters = {
    canPermission: (state) => (permission) => {
        if (!state.auth) {
            return false;
        }
        if (state.admin) {
            return true;
        }
        if (!state.permissions || state.permissions.length === 0) return false;
        if (Array.isArray(permission)) {
            return permission.filter((item) => state.permissions.indexOf(item) > -1).length > 0;
        }
        return state.permissions.indexOf(permission) > -1;
    }
}

// actions
const actions = {
    touchLayout({ commit }) {
        commit('changeLayout');
    },
    setAuth({ commit }) {
        commit('setAuth', true)
    }
}

// mutations
const mutations = {
    setAuth(state, isAuth) {
        state.auth = isAuth
    },
    changeLayout(state) {
        state.layout = state.layout === false;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
