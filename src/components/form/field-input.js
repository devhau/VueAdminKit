import { h, resolveComponent, inject, watch, ref } from 'vue';
import { isFunction } from '../../utils/class.util';
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
        let global = inject('global');
        let input = ref(global.$FieldType[props.fieldType].component);
        watch(() => props.fieldType, () => {
            input.value = global.$FieldType[props.fieldType].component;

        });
        const children = () => {
            if (isFunction(input.value)) {
                return input.value();
            }
            return h(
                resolveComponent(input.value),
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
        };
        // return the render function
        return children;
    }
};
