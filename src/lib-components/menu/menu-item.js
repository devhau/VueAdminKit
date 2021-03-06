import { h, resolveComponent, defineComponent } from 'vue';
import { makeTextClass, } from '@/utils/class.util';

export const vhMenuItem = defineComponent({
    name: 'vh-menu-item',
    props: {
        class: {
            type: String,
            default: '',
        },
        tag: {
            type: String,
            default: 'li'
        },
        router: {
            default: null,
        },
        icon: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        level: {
            type: Number,
            default: 0
        },
        sub: {
            type: Array,
            default: null
        }
    },
    setup(props, { attrs }) {
        const { class: classProps, tag, sub, router, icon, title, level } = props;
        let className = makeTextClass('vh-menu-item', '', classProps, '');

        const children = () => {
            if (sub != null && sub.length > 0) {
                const MenuSub = resolveComponent('vh-menu-sub');
                return h(MenuSub, {
                    icon, title, sub, level
                });
            } else {
                const MenuLink = resolveComponent('vh-menu-link');
                return h(MenuLink, {
                    router, icon, title
                });
            }
        };
        // return the render function;
        return () => h(
            tag,
            {
                ...attrs,
                class: className,
            }, children()
        );
    }
});
