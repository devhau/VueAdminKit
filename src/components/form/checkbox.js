import { h, ref } from 'vue';
import { makeTextClass } from './../../utils/class.util';


export const VHCheckbox = {
    name: 'vh-checkbox',
    props: {
        modelValue: {
            default: null,
        },
        value: {
            default: undefined,
        },
        checked: {
            type: Boolean,
            default: false,
        },
        class: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'checkbox'
        }
    },
    setup(props, { emit, attrs }) {
        const { label, type, class: classProps, value } = props;

        let className = 'form-check-input';
        className = makeTextClass(className, '', classProps, '');
        let check = ref(props.checked);
        // return the render function
        return () =>
            h('div', {
                class: 'form-check',
            },
                h(
                    'input',
                    {
                        ...attrs,
                        value: value ?? props.modelValue,
                        type: type,
                        checked: check.value,
                        class: className,
                        oninput: (e) => {
                            emit('update:modelValue', e.target.checked ? (value ?? true) : undefined);
                            emit('update:checked', e.target.checked);
                        },
                        onchange: (e) => {
                            emit('update:modelValue', e.target.checked ? (value ?? true) : undefined);
                            emit('update:checked', e.target.checked);
                        },
                    },
                ),
                label && h('label', {
                    class: 'form-check-label',
                    onclick: () => {
                        check.value = !check.value;
                        emit('update:modelValue', check.value ? (value ?? true) : undefined);
                        emit('update:checked', check.value);
                    }
                }, label)
            );
    }
};
