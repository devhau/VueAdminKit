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
            default: 'li'
        },
    },
    setup(props, { slots, attrs }) {
        const { class: classProps, tag } = props;
        let className = makeTextClass('vh-menu-item', '', classProps, '');

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
