import { h } from 'vue';
import { makeTextClass } from './../../utils/class.util';

export const VHRenderNode = {
    name: 'vh-render-node',
    props: {
        class: {
            type: String,
            default: '',
        },
        node: {
            default: null
        }
    },
    setup(props, { attrs }) {
        const { class: classProps, node } = props;
        let className = makeTextClass('', '', classProps, '');
        // return the render function
        return () =>
            h(
                'span',
                {
                    ...attrs,
                    class: className
                }, node
            );
    }
};
