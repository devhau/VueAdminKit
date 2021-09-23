import { h } from 'vue';
import { makeTextClass } from './../../utils/class.util';
export const vhContainer = {
    name: 'vh-container',
    props: {
        tag: {
            type: String,
            default: 'div',
        },
        class: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: '',
            validator: (val) => ['', 'sm', 'md', 'lg', 'xl', 'xxl', 'fluid'].includes(val),
        },
    },
    setup(props, { slots, attrs }) {
        const { tag, size, class: classProps } = props;
        let className = 'container';
        className = makeTextClass(className, 'container', size);
        className = makeTextClass(className, '', classProps, '');

        // return the render function
        return () =>
            h(
                tag,
                {
                    ...attrs,
                    class: className
                },
                slots
            );
    }
};
