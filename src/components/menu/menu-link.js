import { h, resolveComponent } from 'vue';
import { makeTextClass } from './../../utils/class.util';

export const VHMenuLink = {
    name: 'vh-menu-link',
    props: {
        class: {
            type: String,
            default: '',
        },
        tag: {
            type: String,
            default: 'router-link'
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
    },
    setup(props, { attrs }) {
        const { class: classProps, tag, icon, title } = props;
        let router = props.router;
        let className = makeTextClass('vh-menu-link', '', classProps, '');
        let contentTitle = () => {
            if (icon) {
                return [h('i', {
                    class: icon,
                }), h('label', {}, title)];
            }
            return [h('label', {}, title)];
        }
        if (router === null || router === '') {
            router = {
                path: '/'
            };
        }

        const RouterLink = resolveComponent(tag);
        // return the render function
        return () =>
            h(
                RouterLink,
                {
                    ...attrs,
                    class: className,
                    to: router,
                }, contentTitle
            );
    }
};
