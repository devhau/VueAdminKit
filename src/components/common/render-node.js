import { h, resolveComponent } from 'vue';
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
        let nodeRen = undefined;
        try {
            nodeRen = resolveComponent(node);
        } catch {
            nodeRen = undefined;
        }
        // return the render function
        return () => nodeRen !== undefined ? h(nodeRen, {
            ...attrs,
            class: className
        }) : h(
            'span',
            {
                ...attrs,
                class: className
            },
            node
        );

    }
};
