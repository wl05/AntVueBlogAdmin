<template>
  <svg :class="svgClass" aria-hidden="true">
<<<<<<< HEAD
    <use :xlink:href="iconName" />
=======
    <use :xlink:href="iconName"/>
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
<<<<<<< HEAD
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
=======
      required: true
    },
    className: {
      type: String,
      default: ''
    }
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
<<<<<<< HEAD
    },
  },
=======
    }
  }
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
