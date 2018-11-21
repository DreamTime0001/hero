<template>
  <div class="top-header">
    <div class="container">
      <div class="nav">
        <ul>
          <li>
            <router-link to="/">官网首页</router-link>
          </li>
          <li>
            <router-link to="/news">新闻中心</router-link>
          </li>
          <li>
            <router-link to="/material">游戏资料</router-link>
          </li>
          <li>
            <router-link to="/">
              <img src="../assets/images/logo.png" alt="">
            </router-link>
          </li>
          <li>
            <router-link to="/download">下载中心</router-link>
          </li>
          <li>
            <router-link to="/">客服中心</router-link>
          </li>
          <li>
            <router-link to="/">官网论坛</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/scss/utils';
.top-header {
  height: 955px;
  background: #ececec url("../assets/images/banner.png") center top no-repeat;
  .nav {
    padding: 20px 160px;
    line-height: 75px;

    ul {
      @include clearfix;
    }

    li {
      width: 130px;
      text-align: center;
      float: left;

      &:nth-child(4) {
        width: 180px;
        line-height: 0;
      }

      a {
        font-size: 16px;
        color: #fff;

        &:hover {
          color: #ac9265;
        }
      }
    }
  }
}
</style>
