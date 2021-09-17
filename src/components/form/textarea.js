import { h, computed } from 'vue';
import { makeTextClass } from '../../utils/class.util';

export const VHTextarea = {
    name: 'vh-textarea',
    props: {
        modelValue: {
            default: '',
        },
        class: {
            type: String,
            default: ''
        }
    },
    setup(props, { slots, attrs }) {
        const { class: classProps } = props;
        let className = 'form-control';
        className = makeTextClass(className, '', classProps, '');
        const children = computed(() => {
            if (slots.default) {
                return slots.default;
            } else {
                return props?.modelValue;
            }
        });
        // return the render function
        return () =>
            h('textarea', {
                ...attrs,
                class: className,
                oninput: (e) => {
                    console.log(e);
                    //emit('update:modelValue', e.target.value);
                },
                onchange: (e) => {
                    console.log(e);
                    //emit('update:modelValue', e.target.value);
                },
            },
                children
            );
    }
};
