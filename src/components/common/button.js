import { h } from 'vue';
import { makeTextClass, } from './../../utils/class.util';

export const VHButton = {
    name: 'vh-button',
    props: {
        class: {
            type: String,
            default: '',
        },
        tag: {
            type: String,
            default: 'button'
        },
        color: {
            type: String,
            default: 'primary'
        },
        size: {
            type: String,
            default: '',
            validator: (val) => ['', 'sm', 'lg'].includes(val),
        },
    },
    setup(props, { slots, attrs }) {
        const { class: classProps, color, tag, size } = props;
        let className = makeTextClass('btn', 'btn', color);
        className = makeTextClass(className, 'btn', size);
        className = makeTextClass(className, '', classProps, '');
        // return the render function
        return () =>
            h(
                tag,
                {
                    ...attrs,
                    class: className
                }, slots
            );
    }
};
