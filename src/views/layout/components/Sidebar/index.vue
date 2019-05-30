<template>
<<<<<<< HEAD
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapState } from 'vuex'

import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapState('app', {
      sidebar: state => state.sidebar,
    }),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    },
  },
}
=======
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
            :show-timeout="200"
            :default-active="$route.path"
            :collapse="isCollapse"
            mode="vertical"
            background-color="#304156"
            text-color="#bfcbd9"
            active-text-color="#409EFF"
        >
            <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
        </el-menu>
    </el-scrollbar>
</template>

<script>
    import { mapState } from 'vuex'

    import SidebarItem from './SidebarItem'

    export default {
        components : {SidebarItem},
        computed : {
            ...mapState('app', {
                sidebar : state => state.sidebar,
            }),
            routes () {
                return this.$router.options.routes
            },
            isCollapse () {
                return !this.sidebar.opened
            }
        }
    }
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
</script>
