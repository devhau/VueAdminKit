import { h, resolveComponent, provide, ref } from 'vue';
import { makeTextClass } from './../../utils/class.util';
import { VHAccordionItem } from './accordion-item';

export const VHAccordion = {
    name: 'vh-accordion',
    props: {
        class: {
            type: String,
            default: '',
        },
        source: {
            type: Array,
            default: [],
        },
        flush: {
            default: false,
        }
    },
    setup(props, { emit, slots, attrs }) {
        const { class: classProps, source, flush } = props;
        const showItem = ref([]);
        let itemIndex = ref(0);
        const setShowItem = (idx, flg) => {
            if (flush) showItem.value = [];
            showItem.value[idx] = flg;
            if (!flg) {
                delete showItem.value[idx];
            }
            emit('showItem', { index: idx, show: flg });
        };
        const addItemIndex = () => {
            itemIndex.value = parseInt(itemIndex.value) + 1;
        }
        provide('itemIndex', itemIndex);
        provide('addItemIndex', addItemIndex);
        provide('showItem', showItem);
        provide('setShowItem', setShowItem);
        let className = makeTextClass('accordion', '', classProps, '');
        const AccordionItem = resolveComponent(VHAccordionItem.name);

        let children = () => {
            if (source && source.length > 0) {
                return source.map((item, index) =>
                    h(AccordionItem, {
                        title: item.title,
                        content: item.content,
                        idx: index,
                        show: showItem.value[index] === true
                    }));
            }
            return slots.default();
        }
        // return the render function
        return () =>
            h(
                'div',
                {
                    ...attrs,
                    class: className
                },
                children()
            );
    }
};
