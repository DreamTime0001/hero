<template>
  <div class="news">
    <div class="inner-header">
      <h2>
        <span class="title">新闻中心</span>
        <span class="des">NEWS</span>
      </h2>
      <p class="breadcrumb">您的位置： 江山英雄 > 新闻中心</p>
    </div>
    <div class="block">
      <div class="inner-menu">
        <ul class="list">
          <li class="item" :class="{active:activeClass(item)}" v-for="(item,i) in menuData" :key="i" @click="chooseNews(item)">{{item}}</li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuData: ["综合", "新闻", "公告", "活动", "维护"]
    };
  },
  created() {
    this.routerChange();
  },
  methods: {
    chooseNews(item) {
      this.$router.push({ path: `/news?name=${item}` });
    },
    activeClass(item) {
      return this.$route.query.name === item;
    },
    routerChange() {
      this.$router.push({
        path: `/news?name=${
          this.$route.query.name === undefined
            ? this.menuData[0]
            : this.$route.query.name
        }`
      });
    }
  },
  watch: {
    $route() {
      this.routerChange();
    }
  }
};
</script>

<style lang="scss" scoped>
.news {
  background: red;
  .block {
    padding: 30px;
    min-height: 1098px;
  }
  .inner-menu {
    overflow: hidden;
    .list {
      .item {
        padding: 12px 0;
        width: 20%;
        float: left;
        border-right: 1px solid #fff;
        background: #29211e;
        color: #fff;
        font-size: 14px;
        text-align: center;
        &.active {
          background: #e0aa35;
        }
      }
    }
  }
}
</style>

