import { h } from 'vue';

export const VHOption = {
    name: 'vh-option',
    setup(props, { slots, attrs }) {

        // return the render function
        return () =>
            h('option', {
                ...attrs,
            },
                slots
            );
    }
};
