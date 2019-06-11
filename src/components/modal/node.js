import objectAssign from 'element-ui/src/utils/merge';

const getPropertyFromData = function(node, prop) {
    // const props = node.store.props;
    const data = node.data || {};
    // const config = props[prop];

    if (typeof prop === 'function') {
        // return config(data, node);
    } else if (typeof prop === 'string') {
        return data[prop];
    } else if (typeof prop === 'undefined') {
        const dataProp = data[prop];
        return dataProp === undefined ? '' : dataProp;
    }
};
export default class Node {
    constructor(options) {
        this.level = 0;
        this.childNodes = [];
        this.expanded = true;
        for (let option in options) {
            if (options.hasOwnProperty(option)) {
                this[option] = options[option]
            }
        }
        this.setData(this.data)
    }
    get isLeaf() {
        return !!this.childNodes.length
    }
    get label() {
        return getPropertyFromData(this, 'label');
    }
    setExpanded() {
        this.expanded = !this.expanded;
    }
    setData(data) {
        this.data = data;
        this.childNodes = [];
        let children;
        if (this.level === 0 && this.data instanceof Array) {
            children = this.data;
        } else {
            children = getPropertyFromData(this, 'children') || [];
        }
        debugger;
        for (let i = 0; i < children.length; i++) {
            this.insertChild({ data: children[i] });
        }
    }
    insertChild(child, index, batch) {
        debugger;
        if (!child) throw new Error('insertChild error: child is required.');
        if (!(child instanceof Node)) {
            objectAssign(child, {
                parent: this,
                store: this.store
            });
            child = new Node(child);
        }

        child.level = this.level + 1;
        this.childNodes.push(child);
        // if (typeof index === 'undefined' || index < 0) {
        // } else {
        //     this.childNodes.splice(index, 0, child);
        // }
    }
}
