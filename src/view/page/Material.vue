<template>
  <div class="material">
    <div class="inner-header">
      <h2>
        <span class="title">游戏资料</span>
        <span class="des">DATA CENTER</span>
      </h2>
      <p class="breadcrumb">您的位置： 江山英雄 > 游戏资料</p>
    </div>
    <div class="block">
      <div class="enter">
        <div class="left">
          <p class="title">
            <span>最新更新</span>
          </p>
          <ul class="list">
            <li class="item">《江山英雄》唯美主题曲MV"龙之恋"</li>
            <li class="item">【特色攻略】屌丝逆袭赚钱攻略</li>
            <li class="item">《江山英雄》唯美主题曲MV"龙之恋"</li>
            <li class="item">【特色攻略】屌丝逆袭赚钱攻略</li>
          </ul>
        </div>
        <div class="right">
          <p class="title">
            <span>快速入口</span>
          </p>
          <ul class="list">
            <li class="item">新手入门：背景资料 | 基本信息 | 游戏操作 | 游戏界面 | 人物属性</li>
            <li class="item">职业介绍：战圣 | 医仙 | 灭神 | 道尊</li>
            <li class="item">《江山英雄》唯美主题曲MV"龙之恋"</li>
            <li class="item">【特色攻略】屌丝逆袭赚钱攻略</li>
          </ul>
        </div>
      </div>
      <div class="new-hand">
        <p class="title">
          <span>新手入门</span>
        </p>
        <ul class="list">
          <li class="item">
            <div class="left">游戏介绍</div>
            <div class="right">
              <p>《江山英雄》背景资料 |  《江山英雄》基本信息 |  《江山英雄》服务协议和玩家守则 |  《江山英雄》引擎介绍</p>
            </div>
          </li>
          <li class="item">
            <div class="left">新手指南</div>
            <div class="right">
              <p>游戏操作 |  游戏界面</p>
            </div>
          </li>
          <li class="item">
            <div class="left">系列介绍</div>
            <div class="right">
              <p>VIP系统 |  天仙系统 |  语音系统 |  元神系统 |  军阶系统</p>
              <p>奇书系统 |  转职系统 |  领地系统 |  称号系统 |  读书系统</p>
              <p>回购系统 |  活跃度介绍 |  金币交易系统 |  商会系统 |  仙羽系统</p>
            </div>
          </li>
          <li class="item">
            <div class="left">任务属性</div>
            <div class="right">
              <p>人物属性 |  经脉系统 |  135新等级上限 |  法宝系统 |  五行修炼</p>
            </div>
          </li>
          <li class="item">
            <div class="left">新手指引</div>
            <div class="right">
              <p>第一次改造 |  第一次坐骑 |  第一次任务 |  第一次拜师 |  第一次组队</p>
              <p>第一次传送 |  第一次打怪 |  概率公示 |  第一次学技能 |  第一次副本</p>
              <p>第一次读书 |  第一次摆摊 |  第一次宠物 |  游戏操作</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.material {
  .block {
    padding: 30px;
  }
  .enter {
    overflow: hidden;
    margin-bottom: 30px;
    .title {
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
    .list {
      .item {
        padding: 15px 0 15px 20px;
        margin-bottom: 1px;
        background: #efedea;
        color: #1d1f25;
      }
    }
    .left {
      float: left;
      width: 365px;
      margin-right: 10px;
    }
    .right {
      float: left;
      width: 525px;
    }
  }
  .new-hand {
    .title {
      padding: 15px 0;
      color: #1d1f25;
      span {
        display: inline-block;
        font-size: 18px;
        font-weight: bold;
        line-height: 18px;
        padding-left: 15px;
        border-left: 3px solid #ffce53;
      }
    }
    .list {
      .item {
        padding: 15px;
        border-bottom: 1px dashed #d8d8d8;
        overflow: hidden;
        .left {
          float: left;
          position: relative;
          width: 98px;
          height: 30px;
          line-height: 30px;
          background: #9b907a;
          text-align: center;
          color: #fff;
          &::after {
            content: "";
            position: absolute;
            right: -11px;
            top: 10px;
            border-left: 6px solid #9b907a;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-right: 6px solid transparent;
          }
        }
        .right {
          float: left;
          padding: 8px 0 8px 22px;
          p{
            line-height: 14px;
            &:not(:last-child){
              margin-bottom: 15px;
            }
          }
        }
      }
    }
  }
}
</style>

