import { h } from 'vue';
export const FieldType = {
    text: {
        name: 'text',
        component: 'vh-input',
    },
    checkbox: {
        name: 'checkbox',
        component: 'vh-checkbox',
    },
    textarea: {
        name: 'textarea',
        component: 'vh-textarea',
    }
}

export const VHFieldInput = {
    name: 'vh-field-input',
    props: {
        modelValue: {
            default: null,
        },
        fieldType: {
            type: String,
            default: 'text',
        }
    },
    setup(props, { emit, attrs }) {
        // return the render function
        return () =>
            h(
                'vh-input',
                {
                    ...attrs,
                    value: props.modelValue,
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
