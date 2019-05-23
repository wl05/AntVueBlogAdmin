<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <!-- or name="fade" -->
            <!-- <router-view :key="key"></router-view> -->
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
        computed : {
            // key() {
            //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
            // }
        }
    }
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
</script>

<style scoped>
    .app-main {
        /*50 = navbar  */
        min-height: calc(100vh - 50px);
        position: relative;
        overflow: hidden;
    }
</style>
