import { h } from 'vue';
import { makeTextClass, } from '../../utils/class.util';

export const VHPage = {
    name: 'vh-page',
    props: {
        class: {
            type: String,
            default: '',
        },
        module: {
            default: null,
        },
    },
    setup(props, { slots, attrs }) {
        const { class: classProps } = props;
        let className = makeTextClass('vh-page', '', classProps, '');
        // return the render function
        return () =>
            h(
                'div',
                {
                    ...attrs,
                    class: className,
                },
                slots
            );
    }
};
