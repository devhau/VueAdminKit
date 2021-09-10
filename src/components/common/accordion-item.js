import { h, inject, ref, onBeforeUpdate } from 'vue';
import { makeTextClass } from './../../utils/class.util';

export const VHAccordionItem = {
    name: 'vh-accordion-item',
    props: {
        class: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        idx: {
            default: undefined,
        },
        content: {
            type: String,
            default: ''
        },
        classTitle: {
            type: String,
            default: ''
        },
        show: {
            type: Boolean,
            default: undefined
        },
    },
    setup(props, { emit, slots, attrs }) {
        const { class: classProps, title, classTitle } = props;
        const setShowItem = inject('setShowItem');
        const showItem = inject('showItem');

        let className = makeTextClass('accordion-item', '', classProps, '');
        let classNameTitle = makeTextClass('accordion-header', '', classTitle, '');
        let classNameButton = ref('accordion-button collapsed');
        let classNameBody = ref('accordion-collapse collapse');
        let idx = props.idx;
        if (idx === undefined) {
            const itemIndex = inject('itemIndex');
            const addItemIndex = inject('addItemIndex');
            idx = itemIndex.value;
            addItemIndex();
        }
        let show = () => {
            if (props.show === undefined) {
                return showItem.value[idx];
            }
            return props.show;
        };

        let children = () => {
            if (props.content) {
                return props.content;
            } else {
                return slots.default();
            }
        };
        onBeforeUpdate(() => {
            if (show() === true) {
                classNameBody.value = `'accordion-collapse collapse show`;
                classNameButton.value = 'accordion-button';
            } else {
                classNameBody.value = 'accordion-collapse collapse';
                classNameButton.value = 'accordion-button collapsed';
            }
        });
        // return the render function
        return () =>
            h(
                'div',
                {
                    ...attrs,
                    class: className
                },
                h('h2', {
                    class: classNameTitle
                },
                    h('button', {
                        class: classNameButton.value,
                        onclick: () => {
                            const flg = show() === true ? false : true;
                            setShowItem(idx, flg);
                            emit('update:show', flg);
                        },
                    },
                        title
                    )
                ),
                h('div', {
                    class: classNameBody.value
                },
                    h('div', {
                        class: 'accordion-body',
                    },
                        children()
                    )
                )
            );
    }
};
