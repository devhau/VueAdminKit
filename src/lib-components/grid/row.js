import { h } from 'vue';
import { makeNumClass, makeTextClass } from './../../utils/class.util';

const makeClassByProps = (props) => {
    let className = 'row';
    className = makeNumClass(className, 'row-cols', props.cols);
    className = makeNumClass(className, 'row-cols-sm', props.smcols);
    className = makeNumClass(className, 'row-cols-md', props.mdcols);
    className = makeNumClass(className, 'row-cols-lg', props.lgcols);
    className = makeNumClass(className, 'row-cols-xl', props.xlcols);
    className = makeNumClass(className, 'row-cols-xxl', props.xxlcols);
    className = makeTextClass(className, 'justify-content', props.justify);
    className = makeTextClass(className, 'justify-content-sm', props.justifysm);
    className = makeTextClass(className, 'justify-content-md', props.justifymd);
    className = makeTextClass(className, 'justify-content-lg', props.justifylg);
    className = makeTextClass(className, 'justify-content-xl', props.justifyxl);
    className = makeTextClass(className, 'justify-content-xxl', props.justifyxxl);
    return className;
};
export const vhRow = {
    name: 'vh-row',
    props: {
        tag: {
            type: String,
            default: 'div',
        },
        class: {
            type: String,
            default: ''
        },
        cols: {
            type: Number,
            default: -1,
        },
        smcols: {
            type: Number,
            default: -1,
        },
        mdcols: {
            type: Number,
            default: -1,
        },
        lgcols: {
            type: Number,
            default: -1,
        },
        xlcols: {
            type: Number,
            default: -1,
        },
        xxlcols: {
            type: Number,
            default: -1,
        },
        justify: {
            type: String,
            default: '',
            validator: (val) => ['', 'start', 'center', 'end', 'around', 'between', 'evenly'].includes(val),
        },
        justifysm: {
            type: String,
            default: '',
            validator: (val) => ['', 'start', 'center', 'end', 'around', 'between', 'evenly'].includes(val),
        },
        justifymd: {
            type: String,
            default: '',
            validator: (val) => ['', 'start', 'center', 'end', 'around', 'between', 'evenly'].includes(val),
        },
        justifylg: {
            type: String,
            default: '',
            validator: (val) => ['', 'start', 'center', 'end', 'around', 'between', 'evenly'].includes(val),
        },
        justifyxl: {
            type: String,
            default: '',
            validator: (val) => ['', 'start', 'center', 'end', 'around', 'between', 'evenly'].includes(val),
        },
        justifyxxl: {
            type: String,
            default: '',
            validator: (val) => ['', 'start', 'center', 'end', 'around', 'between', 'evenly'].includes(val),
        },
    },
    setup(props, { slots, attrs }) {
        const { tag, class: classProps } = props;
        let className = makeClassByProps(props);
        className = makeTextClass(className, '', classProps, '');
        // return the render function
        return () =>
            h(
                tag,
                {
                    ...attrs,
                    class: className
                },
                slots
            );
    }
};
