<template lang="html">
<<<<<<< HEAD
  <mark-down
    @on-save="save"
    :autoSave="true"
    :initialValue="initialValue"
    :interval="1000"
  />
</template>

<script>
import MarkDown from 'vue-meditor'

export default {
  props: {
    initialValue: {
      type: String,
      default: '',
    },
  },
  name: 'Editorbar',
  components: {
    MarkDown,
  },
  methods: {
    save: function(val) {
      this.$emit('onEditorChange', val)
    },
  },
}
</script>

<style></style>
=======
    <mark-down
        @on-save="save"
        :autoSave="true"
        :initialValue="initialValue"
        :interval="1000"
    />
</template>

<script>
    import MarkDown from 'vue-meditor'

    export default {
        props : {
            initialValue : {
                type : String,
                default : ''
            }
        },
        name : 'Editorbar',
        components : {
            MarkDown
        },
        methods : {
            save : function (val) {
                this.$emit("onEditorChange", val)
            }
        }
    }
</script>

<style>
</style>
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
