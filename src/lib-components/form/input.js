import { h } from 'vue';
import { makeTextClass } from './../../utils/class.util';


export const vhInput = {
    name: 'vh-input',
    props: {
        modelValue: {
            default: null,
        },
        class: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        size: {
            type: String,
            default: '',
            validator: (val) => ['', 'sm', 'md', 'lg', 'xl', 'xxl', 'fluid'].includes(val),
        },
    },
    setup(props, { emit, attrs }) {
        const { size, class: classProps, type } = props;
        let className = makeTextClass('form-control', 'form-control', size);
        className = makeTextClass(className, '', classProps, '');
        // return the render function
        return () =>
            h(
                'input',
                {
                    ...attrs,
                    value: props.modelValue,
                    type: type,
                    class: className,
                    oninput: (e) => {
                        emit('update:modelValue', e.target.value);
                    },
                    onchange: (e) => {
                        emit('update:modelValue', e.target.value);
                    },
                },
            );
    }
};
