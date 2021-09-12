import { h, resolveComponent } from 'vue';
import { makeTextClass, } from './../../utils/class.util';
import { VHMenuLink } from './menu-link';
import { VHMenuSub } from './menu-sub';

export const VHMenuItem = {
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
        sub: {
            type: Array,
            default: null
        }
    },
    setup(props, { attrs }) {
        const { class: classProps, tag, sub, router, icon, title } = props;
        let className = makeTextClass('vh-menu-item', '', classProps, '');

        const children = () => {
            if (sub != null && sub.length > 0) {
                const MenuSub = resolveComponent(VHMenuSub.name);
                return h(MenuSub, {
                    icon, title, sub
                });
            } else {
                const MenuLink = resolveComponent(VHMenuLink.name);
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
};
