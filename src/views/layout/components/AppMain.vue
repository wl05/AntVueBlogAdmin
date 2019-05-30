<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <router-view/>
        </transition>
    </section>
</template>

<script>
<<<<<<< HEAD
export default {
  name: 'AppMain',
  computed: {},
};
=======
    export default {
        name : 'AppMain',
    }
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
</script>

<style scoped>
    .app-main {
        min-height: calc(100vh - 50px);
        position: relative;
        overflow: hidden;
    }
</style>
