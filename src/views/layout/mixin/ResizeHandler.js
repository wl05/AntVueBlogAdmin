import store from '@/store'

<<<<<<< HEAD
const { body } = document
=======
const {body} = document
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
const WIDTH = 1024
const RATIO = 3

export default {
<<<<<<< HEAD
  watch: {
    $route(route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
        store.dispatch('app/CloseSideBar', { withoutAnimation: false })
      }
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted() {
    const isMobile = this.isMobile()
    if (isMobile) {
      store.dispatch('app/ToggleDevice', 'mobile')
      store.dispatch('app/CloseSideBar', { withoutAnimation: true })
    }
  },
  methods: {
    isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - RATIO < WIDTH
    },
    resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.isMobile()
        store.dispatch('app/ToggleDevice', isMobile ? 'mobile' : 'desktop')

        if (isMobile) {
          store.dispatch('app/CloseSideBar', { withoutAnimation: true })
        }
      }
    },
  },
=======
    watch : {
        $route (route) {
            if (this.device === 'mobile' && this.sidebar.opened) {
                store.dispatch('app/CloseSideBar', {withoutAnimation : false})
            }
        }
    },
    beforeMount () {
        window.addEventListener('resize', this.resizeHandler)
    },
    mounted () {
        const isMobile = this.isMobile()
        if (isMobile) {
            store.dispatch('app/ToggleDevice', 'mobile')
            store.dispatch('app/CloseSideBar', {withoutAnimation : true})
        }
    },
    methods : {
        isMobile () {
            const rect = body.getBoundingClientRect()
            return rect.width - RATIO < WIDTH
        },
        resizeHandler () {
            if (!document.hidden) {
                const isMobile = this.isMobile()
                store.dispatch('app/ToggleDevice', isMobile ? 'mobile' : 'desktop')
                
                if (isMobile) {
                    store.dispatch('app/CloseSideBar', {withoutAnimation : true})
                }
            }
        }
    }
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
}
