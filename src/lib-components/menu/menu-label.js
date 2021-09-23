import { h } from 'vue';
import { makeTextClass, } from '@/utils/class.util';

export const vhMenuLabel = {
    name: 'vh-menu-label',
    props: {
        class: {
            type: String,
            default: '',
        },
        tag: {
            type: String,
            default: 'p'
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
        let className = makeTextClass('vh-menu-label', '', classProps, '');
        let contentTitle = () => {
            if (icon) {
                return [h('i', {
                    class: icon,
                }), h('label', {}, title)];
            }
            return [h('label', {}, title)];
        }
        // return the render function
        return () =>
            h(
                tag,
                {
                    ...attrs,
                    class: className,
                }, contentTitle()
            );
    }
};
