<template>
  <div class="news-index">
    <p class="title">8月31日00:00-06:00网络切割公告</p>
    <div class="list">
      <ul>
        <li class="item" v-for="(item,i) in list" :key="i">
          <span class="txt">{{item.title}}</span>
          <span class="date">[{{item.updateTime | formatDate}}]</span>
        </li>
      </ul>
    </div>
    <pagination :total="total" :current-page='page.pageNum' :display="page.pageSize" @pagechange="pagechange" class="pagination"></pagination>
  </div>
</template>
<script>
import Pagination from "../../../components/Pagination.vue";

export default {
  components: {
    Pagination
  },
  data() {
    return {
      page: {
        pageNum: 1,
        pageSize: 1,
        type: ""
      },
      list: "",
      total: 0
    };
  },
  created() {
    this.getNews();
  },
  methods: {
    pagechange(currentPage) {
      this.page.pageNum = currentPage;
      this.getNews();
    },
    getNews() {
      const self = this;
      const obj = {
        综合: "",
        新闻: "1",
        公告: "2",
        活动: "3",
        维护: "4"
      };
      this.page.type = obj[this.$route.query.name];
      self.$axios
        .get("/news", {
          params: {
            pageNum: this.page.pageNum,
            pageSize: this.page.pageSize,
            type: this.page.type
          }
        })
        .then(res => {
          const { list, total } = res.data.data;
          this.list = list;
          this.total = total;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  watch: {
    $route: "getNews"
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils";
.news-index {
  position: relative;
  min-height: 960px;
  .title {
    background: #f6f6fb;
    color: #c83a3a;
    text-align: center;
    height: 40px;
    line-height: 40px;
    margin: 30px auto;
  }
  .list {
    .item {
      position: relative;
      color: #45427e;
      height: 36px;
      line-height: 36px;
      padding-right: 10px;
      padding-left: 30px;
      .txt {
        display: inline-block;
        width: 770px;
        @include ellipsis;
      }
      .date {
        float: right;
      }
      &:nth-child(odd) {
        background: #f6f6fb;
      }
      &::before {
        content: "";
        position: absolute;
        top: 13px;
        left: 20px;
        border-left: 5px solid #000;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 5px solid transparent;
      }
    }
    .red {
      color: red;
    }
  }
  .pagination {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
