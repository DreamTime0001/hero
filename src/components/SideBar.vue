<template>
  <div class="side-bar">
    <function-btn></function-btn>
    <div class="outer">
      <div class="block">
        <p class="title">客服中心</p>
        <div class="list">
          <ul>
            <li class="item">
              <i class="inner-icon inner-icon-call"></i>
              在线客服
            </li>
            <li class="item">
              <i class="inner-icon inner-icon-auto"></i>
              自助服务
            </li>
            <li class="item">
              <i class="inner-icon inner-icon-feedback"></i>
              被盗反馈
            </li>
            <li class="item">
              <i class="inner-icon inner-icon-bug"></i>
              BUG提交
            </li>
            <li class="item">
              <i class="inner-icon inner-icon-money"></i>
              充值问题
            </li>
            <li class="item">
              <i class="inner-icon inner-icon-treasure"></i>
              珍宝阁
            </li>
            <li class="item item-big">
              <i class="inner-icon inner-icon-contact"></i>
              联系客服
            </li>
            <li class="item item-big">
              <i class="inner-icon inner-icon-phone"></i>
              021-6475896
            </li>
          </ul>
        </div>
      </div>
      <div class="block">
        <p class="title">关注我们</p>
        <div class="list">
          <ul>
            <li class="item item-qr">
              <img src="../assets/images/qrcode.png" alt="">
            </li>
            <li class="item">
              <i class="inner-icon inner-icon-wechat"></i>
              JSYX
            </li>
            <li class="item">
              <i class="inner-icon inner-icon-weibo"></i>
              新浪微博
            </li>
            <li class="item">
              <i class="inner-icon inner-icon-qq"></i>
              234459581Ï
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FunctionBtn from "./FunctionBtn.vue";

export default {
  components: {
    FunctionBtn
  }
};
</script>


<style lang="scss" scoped>
.side-bar {
  color: #fff;
  width: 320px;
  float: left;
  .outer{
    width: 275px;
    margin: auto;
  }
  .title {
    border-left: 4px solid #f7e1b0;
    padding-left: 6px;
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 13px;
  }
  .block {
    padding: 20px;
    margin-top: 20px;
    background: #281f1d;
  }
  .list {
    .item {
      position: relative;
      background: #352c2a;
      padding: 13px 0 13px 112px;
      font-size: 14px;
      line-height: 14px;
      margin-bottom: 1px;
      .inner-icon {
        position: absolute;
        left: 50px;
        top: 50%;
        transform: translateY(-50%);
      }
      &-qr {
        padding: 26px;
        img {
          display: block;
          margin: auto;
        }
      }
      &-big{
        padding: 25px 0 25px 112px;
      }
    }
  }
}
</style>

