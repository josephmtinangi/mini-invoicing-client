<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-2">
        <side-bar></side-bar>
      </div>
      <div class="col-sm-10">
        Main
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/common/SideBar'
export default {
  name: 'Dashboard',
  components: {
    SideBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
