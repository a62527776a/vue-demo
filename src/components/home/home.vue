<template>
  <div>
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="recents" :title=i18n.bottomNav.home icon="restore"/>
        <mu-bottom-nav-item value="favorites" :title=i18n.bottomNav.user icon="favorite"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      bottomNav: 'recents'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  },
  created () {

  }
}

</script>

<style lang="less" scoped>

</style>
