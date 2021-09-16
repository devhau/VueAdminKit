import PageBuilder from './../components/builder/page-builder.vue';
export default {
    icon: 'bi bi-calendar4',
    title: 'Form Builder',
    name: 'builder',
    page: () => PageBuilder,
    config: {
        permission: {
            index: 'user.index',
        },
        columns: [],
    },
};
