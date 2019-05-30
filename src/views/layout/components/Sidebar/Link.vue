<template>
<<<<<<< HEAD
  <!-- eslint-disable vue/require-component-is-->
  <component v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/utils'

export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  methods: {
    isExternalLink(routePath) {
      return isExternal(routePath)
    },
    linkProps(url) {
      if (this.isExternalLink(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener',
        }
      }
      return {
        is: 'router-link',
        to: url,
      }
    },
  },
}
=======
    <!-- eslint-disable vue/require-component-is-->
    <component v-bind="linkProps(to)">
        <slot/>
    </component>
</template>

<script>
    import { isExternal } from '@/utils'

    export default {
        props : {
            to : {
                type : String,
                required : true
            }
        },
        methods : {
            isExternalLink (routePath) {
                return isExternal(routePath)
            },
            linkProps (url) {
                if (this.isExternalLink(url)) {
                    return {
                        is : 'a',
                        href : url,
                        target : '_blank',
                        rel : 'noopener'
                    }
                }
                return {
                    is : 'router-link',
                    to : url
                }
            }
        }
    }
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
</script>
