import { h } from 'vue';
import { makeTextClass } from '../../utils/class.util';

export const vhButtonClose = {
    name: 'vh-button-close',
    props: {
        class: {
            type: String,
            default: '',
        },
    },
    setup(props, { slots, attrs }) {
        const { class: classProps } = props;
        let className = makeTextClass('btn-close', '', classProps, '');
        // return the render function
        return () =>
            h(
                'div',
                {
                    ...attrs,
                    type: 'button',
                    'aria-label': 'Close',
                    class: className
                }, slots
            );
    }
};
