import { h } from 'vue';
import { makeTextClass } from '../../utils/class.util';

export const VHBreadcrumbItem = {
    name: 'vh-breadcrumb-item',
    props: {
        class: {
            type: String,
            default: '',
        },
        link: {
            type: String,
            default: undefined
        },
        content: {
            type: String,
            default: undefined
        },
        active: {
            type: Boolean,
            default: false,
        }
    },
    setup(props, { slots, attrs }) {
        const { class: classProps, active, link } = props;
        let className = 'breadcrumb-item';
        className = makeTextClass(className, '', classProps, '');
        className = active ? `${className} active` : className;
        const children = () => {
            if (link) {
                return h('a', {
                    href: link
                }, props.content);
            }
            return slots.default();
        };
        // return the render function breadcrumb
        return () =>

            h(
                'li',
                {
                    ...attrs,
                    class: className
                },
                children()
            );
    }
};
