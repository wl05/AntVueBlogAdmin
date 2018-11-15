<template>
    <div class="dashboard-container">
        <div class="dashboard-text">name:{{ name }}</div>
        <div class="dashboard-text">roles:{{ role }}</div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name : 'Dashboard',
        computed : {
            ...mapState('user', [
                'name',
                'role'
            ])
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .dashboard {
        &-container {
            margin: 30px;
        }
        &-text {
            font-size: 30px;
            line-height: 46px;
        }
    }
</style>
