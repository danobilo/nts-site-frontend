<template>
  <div>
    <Navbar />
    <slot />
    <FooterComponent />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import FooterComponent from '@/components/Footer';

export default {
    name: 'Default',
    components: {
        Navbar, FooterComponent
    }
};
</script>

<style scoped>

</style>
