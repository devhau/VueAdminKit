import { h } from 'vue';
import { makeTextClass, makeValueByData } from './../../utils/class.util';

export const VHSelect = {
    name: 'vh-select',
    props: {
        modelValue: {
            default: null,
        },
        modelItem: {
            default: null,
        },
        source: {
            type: Array,
            default: [],
        },
        class: {
            type: String,
            default: '',
        },
        fieldValue: {
            type: String,
            default: 'id',
        },
        fieldDisplay: {
            type: String,
            default: 'name',
        },
        textAll: {
            type: String,
            default: 'All'
        },
        valueAll: {
            default: null
        },
        isAll: {
            type: Boolean,
            default: false,
        }
    },
    setup(props, { slots, emit, attrs }) {
        const { fieldValue, fieldDisplay, source, class: classProps, textAll, valueAll, isAll } = props;
        let className = 'form-select';
        className = makeTextClass(className, '', classProps, '');
        const changeValue = (e) => {
            emit('update:modelValue', e.target.value);
            if (source) {
                emit('update:modelItem', source[isAll ? (e.target.selectedIndex - 1) : (e.target.selectedIndex)]);
            }
        }
        // return the render function
        return () =>
            h('select', {
                ...attrs,
                class: className,
                onchange: changeValue,
            },
                isAll && h('option', { value: valueAll }, textAll),
                slots.default && slots.default(),
                !slots.default && source?.map((item) => h('option', {
                    value: makeValueByData(item, fieldValue),
                }, makeValueByData(item, fieldDisplay)))
            );
    }
};
