<template>
  <button
    :class="classes"
    :disabled="disabled"
    type="button"
    @click="handleClick"
  >
    <slot/>
  </button>
</template>
<script>
export default{
  name: 'TimButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      const cls = this.type === 'text' ? ('-' + this.type) : ''
      return [`tim-button${cls}`]
    }
  },
  methods: {
    handleClick (ev) {
      this.$emit('click', ev)
    }
  }
}
</script>
<style scoped>
.tim-button{
    padding:.6em 1.3em;
}
.tim-button-text{
    border:none;
    padding-right:0;
    padding-left:0;
}
</style>
