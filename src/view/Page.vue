<template>
  <div class="page">
    <top-header></top-header>
    <register></register>
    <div class="main">
      <div class="container">
        <side-bar></side-bar>
        <div class="content">
          <router-view class="wrapper"></router-view>
        </div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
import SideBar from "../components/SideBar.vue";
import TopHeader from "../components/TopHeader.vue";
import Bottom from "../components/Bottom.vue";
import Register from "../components/Register.vue";

export default {
  components: {
    SideBar,
    TopHeader,
    Bottom,
    Register
  }
};
</script>
<style lang="scss" scoped>
.page {
  .main {
    position: relative;
    margin-top: -340px;
    z-index: 9;
    .content {
      padding-top: 30px;
      margin-left: 320px;
      min-height: 1236px;
      .wrapper {
        background: #fff;
        min-height: 1206px;
      }
    }
  }
}
</style>


