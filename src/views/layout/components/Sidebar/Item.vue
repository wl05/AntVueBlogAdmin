<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
<<<<<<< HEAD
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
=======
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    if (icon) {
<<<<<<< HEAD
      vnodes.push(<svg-icon icon-class={icon} />)
    }

    if (title) {
      vnodes.push(<span slot="title">{title}</span>)
    }
    return vnodes
  },
=======
      vnodes.push(<svg-icon icon-class={icon}/>)
    }

    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
    }
    return vnodes
  }
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
}
</script>
