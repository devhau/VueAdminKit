import { h, resolveComponent } from 'vue';
import { VHBreadcrumbItem } from './breadcrumb-item';

export const VHBreadcrumb = {
    name: 'vh-breadcrumb',
    props: {
        class: {
            type: String,
            default: '',
        },
        divider: {
            type: String,
            default: '\'/\''
        },
        source: {
            type: Array,
            default: []
        }
    },
    setup(props, { slots, attrs }) {
        const { class: classProps, divider, source } = props;
        let className = classProps;

        const BreadcrumbItem = resolveComponent(VHBreadcrumbItem.name);
        const children = () => {
            if (source && source.length > 0) {
                return source.map((item) => h(BreadcrumbItem, {
                    link: item.link,
                    active: item.active,
                    content: item.title
                }));
            }
            return slots;
        };
        // return the render function breadcrumb
        return () =>

            h(
                'nav',
                {
                    style: `--bs-breadcrumb-divider: ${divider}`,
                    ...attrs,
                    'aria-label': 'breadcrumb',
                    class: className
                },
                h('ul', {
                    class: 'breadcrumb'
                },
                    children()
                )
            );
    }
};
