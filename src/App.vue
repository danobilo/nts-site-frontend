<template>
  <Component :is="layout">
    <router-view />
  </Component>
</template>

<script>
const default_layout = 'default';

export default {
    name: 'App',
    computed: {
        layout () {
            return (default_layout) + '-layout';
        }
    }
};
</script>

<style scoped>

</style>
