function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.name;
    name === componentName ?
      child.$emit.call(child, eventName, params) :
      broadcast.call(child, componentName, eventName, params);
  });
}
export default {
  methods: {
    // 往上寻找
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        parent && (name = parent.$options.name);
      }
      parent && (parent.$emit.call(parent, eventName, params));
    },
    // 往下寻找
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
}