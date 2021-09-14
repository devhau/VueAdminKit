import { h, resolveComponent, getCurrentInstance } from 'vue';
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
        level: {
            type: Number,
            default: 0
        },
        source: {
            type: Array,
            default: []
        }
    },
    setup(props, { slots, attrs }) {
        const { class: classProps, tag, source } = props;
        const module = getCurrentInstance().appContext.config.globalProperties.$module;
        let className = makeTextClass('vh-menu', '', classProps, '');
        let level = props.level;
        if (level > 0) {
            className = makeTextClass(className, 'vh-menu-level', level);
        }
        level = level + 1;
        const MenuItem = resolveComponent(VHMenuItem.name);
        let children = () => {
            if (source && source.length > 0) {

                return source.map((item, index) => {
                    let moduleItem = undefined;
                    if (item.module && item.module !== '' && (moduleItem = module[item.module]) != null) {
                        return h(MenuItem, {
                            title: moduleItem.title,
                            icon: moduleItem.icon,
                            router: {
                                name: moduleItem.name,
                            },
                            sub: item.sub,
                            idx: index,
                            level
                        })
                    }
                    return h(MenuItem, {
                        title: item.title,
                        icon: item.icon,
                        router: item.router,
                        sub: item.sub,
                        idx: index,
                        level
                    })
                });

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
