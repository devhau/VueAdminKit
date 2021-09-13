import { h, resolveComponent } from 'vue';
import { makeTextClass, } from './../../utils/class.util';
import { VHMenuItem } from './menu-item';

export const VHMenu = {
    name: 'vh-menu',
    props: {
        class: {
            type: String,
            default: '',
        },
        tag: {
            type: String,
            default: 'ul'
        },
        source: {
            type: Array,
            default: []
        }
    },
    setup(props, { slots, attrs }) {
        const { class: classProps, tag, source } = props;
        let className = makeTextClass('vh-menu', '', classProps, '');

        const MenuItem = resolveComponent(VHMenuItem.name);
        let children = () => {
            if (source && source.length > 0) {
                return source.map((item, index) =>
                    h(MenuItem, {
                        title: item.title,
                        icon: item.icon,
                        router: item.router,
                        sub: item.sub,
                        idx: index,
                    }));
            }
            return slots?.default?.();
        }
        // return the render function
        return () =>
            h(
                tag,
                {
                    ...attrs,
                    class: className
                },
                children()
            );
    }
};
