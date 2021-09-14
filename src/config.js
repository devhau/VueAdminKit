import { h } from 'vue';
import profileComponent from './components/application/part/profile.vue';
import sidebarAppComponent from './components/application/part/sidebar-app.vue';

export default {
    system: {
        title: 'VHApplication',
        'min-title': 'VHA',
        layout: 'sidebar',
        components: {
            profile: () => {
                return h(profileComponent);
            },
            sidebarApp: () => {
                return h(sidebarAppComponent)
            }
        }
    }
}