<template>
  <div class="recharge">
    <div class="inner-header">
      <h2>
        <span class="title">充值中心</span>
        <span class="des">RECHARGE</span>
      </h2>
      <p class="breadcrumb">您的位置： 江山英雄 > 充值中心</p>
    </div>
    <div class="block">
      <p class="tit">
        <span class="txt">网上银行</span>
      </p>
      <div class="account">
        <div class="item">
          <span class="txt">账户名</span>
          <input type="text">
        </div>
        <div class="item">
          <span class="txt">密码</span>
          <input type="text">
        </div>
        <div class="item">
          <span class="txt">充值金额</span>
          <div class="select-money">
            <p v-for="(item,i) in moneyArr" :key="i" :class="[i===6?'auto':'',i===moneyActive?'active':'']" @click="getMoney(item,i)">
              <span v-if="i!==6">
                {{item}}元
              </span>
              <span v-else>
                <input type="text" placeholder="自定义金额">元
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="bank">
        <div class="item">
          <span class="txt">选择银行</span>
          <div class="select-bank">
            <p v-for="(item,i) in bankObj" :key="i" :class="i===bankActive?'active':''" @click="getBank(item,i)">
              <i class="bank-icon" :class="`bank-icon-${item.val}`"></i>
              <span>{{item.name}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      moneyActive: 0,
      bankActive: "",
      moneyArr: [100, 10, 50, 500, 1000, 5000, ""],
      bankObj: [
        { name: "建设银行", val: "jianhang" },
        { name: "工商银行", val: "gonghang" },
        { name: "农业银行", val: "nonghang" },
        { name: "中国银行", val: "zhonghang" },
        { name: "招商银行", val: "zhaohang" },
        { name: "邮政储蓄", val: "youzheng" },
        { name: "交通银行", val: "jiaohang" },
        { name: "平安银行", val: "pingan" },
        { name: "其他银行>>", val: "" }
      ]
    };
  },
  methods: {
    getMoney(val, index) {
      this.moneyActive = index;
    },
    getBank(val, index) {
      this.bankActive = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.recharge {
  .block {
    padding: 30px;
  }
  .tit {
    padding: 15px 0 15px 20px;
    background: #a39984;
    color: #fff;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 1px;
    span {
      display: inline-block;
      padding-left: 8px;
      border-left: 3px solid #fff;
    }
  }
  .account {
    padding-top: 25px;
    padding-bottom: 15px;
    border-bottom: 1px dashed #d8d8d8;
    overflow: hidden;
    .item {
      margin-bottom: 15px;
      font-size: 14px;
      color: #3c3c3c;

      .txt {
        float: left;
        width: 90px;
        height: 40px;
        line-height: 40px;
        text-align: right;
        margin-right: 15px;
      }
      input {
        width: 210px;
        height: 35px;
        line-height: 35px;
        text-indent: 5px;
      }
      .select-money {
        width: 385px;
        float: left;
        p {
          float: left;
          height: 40px;
          line-height: 38px;
          min-width: 80px;
          border: 1px solid #c7c3c1;
          text-align: center;
          margin-right: 12px;
          margin-bottom: 10px;
          &:hover {
            color: red;
            border: 1px solid red;
          }
          &.active {
            color: red;
            border: 1px solid red;
            background-color: rgb(255, 255, 204);
          }
        }
        .auto {
          padding: 0 15px;
          input {
            border: none;
            width: 75px;
            margin-right: 5px;
          }
        }
      }
    }
  }
  .bank {
    padding-top: 25px;
    .item {
      font-size: 14px;
      color: #3c3c3c;
      line-height: 20px;
      .txt {
        float: left;
        width: 90px;
        text-align: right;
        margin-right: 15px;
      }
      .select-bank {
        width: 360px;
        overflow: hidden;
        p {
          float: left;
          width: 110px;
          height: 40px;
          line-height: 38px;
          border: 1px solid #c7c3c1;
          margin: 0 8px 8px 0;
          padding-left: 10px;
          &.active {
            border: 1px solid red;
            color: #000;
          }
          &:hover {
            border: 1px solid red;
          }
          span {
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>


