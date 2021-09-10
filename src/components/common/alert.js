import { h } from 'vue';
import { makeTextClass } from './../../utils/class.util';

export const VHAlert = {
    name: 'vh-alert',
    props: {
        class: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: 'primary'
        }
    },
    setup(props, { slots, attrs }) {
        const { class: classProps, color } = props;
        let className = makeTextClass('alert', 'alert', color);
        className = makeTextClass(className, '', classProps, '');
        // return the render function
        return () =>
            h(
                'div',
                {
                    ...attrs,
                    class: className
                }, slots
            );
    }
};
