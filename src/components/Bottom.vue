<template>
  <div class="bottom">
      <div class="contact-box">
        <div class="content">
          <p>|服务协议|纠纷处理|网络游戏服务格式化协议必备条款|游戏介绍|充值中心|用户注册|用户登录 </p>
          <p>健康游戏忠告: 抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</p>
          <p>公司名字：吉林省曜石网络科技有限公司</p>
          <p>公司地址：辽源经济开发区友谊工业园区财富大路158号</p>
          <p>全国文化市场</p>
          <p>营业执照</p>
          <p>全国文化市场举报电话：12318</p>
        </div>
        <div class="qrcode"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bottom {
  margin-top: -200px;
  position: relative;
  height: 700px;
  background: url("../assets/images/footer.png") no-repeat bottom center;
}

.contact-box {
  position: absolute;
  width: 1280px;
  left: 50%;
  bottom: 40px;
  margin-left: -640px;
  padding: 0 285px 0 126px;
  text-align: center;
  color: #fff;

  p {
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 14px;
  }

  .qrcode {
    position: absolute;
    width: 165px;
    height: 163px;
    background: url("../assets/images/qrcode.png") no-repeat;
    right: 130px;
    bottom: 25px;
  }
}
</style>
