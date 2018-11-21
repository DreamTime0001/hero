<template>
  <div class="home">
    <register></register>
    <header>
      <top-header></top-header>
      <div class="container">
        <div class="guild">
          <div class="left">
            <function-btn></function-btn>
          </div>
          <div class="right">
            <div class="swiper-box">
              <swiper :options="swiperOption">
                <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">I'm Slide {{ slide }}</swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <div class="news">
              <div class="title">
                <a href="###">综合</a>
                <a href="###">新闻</a>
                <a href="###">公告</a>
                <a href="###">活动</a>
                <a class="home-icon home-icon-more" href="###"></a>
              </div>
              <div class="content">
                <p class="con-title">《江山英雄》首次技术封测开启公告</p>
                <ul class="list">
                  <li class="item">
                    <span>活动</span>
                    <a class="txt" href="###">大明无双三服大精彩活动火热进行</a>
                    <span class="date">6-28</span>
                  </li>
                  <li class="item">
                    <span>公告</span>
                    <a class="txt" href="###">首充送极品首饰</a>
                    <span class="date">6-28</span>
                  </li>
                  <li class="item">
                    <span>新闻</span>
                    <a class="txt" href="###">大明无双最强宠物介绍专题</a>
                    <span class="date">6-28</span>
                  </li>
                  <li class="item">
                    <span>活动</span>
                    <a class="txt" href="###">大明无双三服大精彩活动火热进行</a>
                    <span class="date">6-28</span>
                  </li>
                  <li class="item">
                    <span>活动</span>
                    <a class="txt" href="###">大明无双三服大精彩活动火热进行</a>
                    <span class="date">6-28</span>
                  </li>
                  <li class="item">
                    <span>活动</span>
                    <a class="txt" href="###">大明无双三服大精彩活动火热进行</a>
                    <span class="date">6-28</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="main">
      <div class="job-container">
        <div class="job-intro">
          <h1 class="home-pic home-pic-title-job"></h1>
          <ul class="present">
            <transition name="fade">
              <li class="item" :class="[presentClass]" v-for="(item,i) in 4" :key="i" v-if="i+1===activeItem"></li>
            </transition>
          </ul>
          <ul class="menu">
            <li class="item" :class="[normalClass(i),hoverClass(i)]" v-for="(item,i) in 4" :key="i" @mouseover="showPresent(i)"></li>
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="game-strategy">
          <div class="left">
            <div class="item">
              <div class="home-pic home-pic-title home-pic-title-guide"></div>
              <p class="txt">
                <a href="###">菜鸟教程</a>
                <span class="intl">|</span>
                <a href="###">职业说明</a>
              </p>
              <p class="home-pic home-pic-line"></p>
            </div>
            <div class="item">
              <div class="home-pic home-pic-title home-pic-title-special"></div>
              <p class="txt">
                <a href="###">强化系统</a>
                <span class="intl">|</span>
                <a href="###">美人系统</a>
                <span class="intl">|</span>
                <a href="###">宝石系统</a>
              </p>
              <p class="home-pic home-pic-line"></p>
            </div>
            <div class="item">
              <div class="home-pic home-pic-title home-pic-title-activity"></div>
              <p class="txt">
                <a href="###">摘星楼</a>
                <span class="intl">|</span>
                <a href="###">征服站</a>
                <span class="intl">|</span>
                <a href="###">四国战</a>
                <span class="intl">|</span>
                <a href="###">国王战</a>
              </p>
            </div>
          </div>
          <div class="right">
            <div class="home-pic home-pic-strategy"></div>
            <ul class="list">
              <li class="item">
                <a href="###">
                  雁门关战场活动攻略
                  <span class="date">06.25</span>
                </a>
              </li>
              <li class="item">
                <a href="###">
                  过关斩将副本攻略
                  <span class="date">06.25</span>
                </a>
              </li>
              <li class="item">
                <a href="###">
                  大禹宝库副本攻略
                  <span class="date">06.25</span>
                </a>
              </li>
              <li class="item">
                <a href="###">
                  大荒演武场副本攻略
                  <span class="date">06.25</span>
                </a>
              </li>
              <li class="item">
                <a href="###">
                  大荒演武场副本攻略
                  <span class="date">06.25</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="show-box">
          <ul class="list">
            <li class="item">
              <a href="###" class="cover">
                <i class="home-icon home-icon-video"></i>
                <p>观看视频</p>
              </a>
            </li>
            <li class="item">
              <a href="###" class="cover">
                <i class="home-icon home-icon-pic"></i>
                <p>精美原画</p>
              </a>
            </li>
            <li class="item">
              <a href="###" class="cover">
                <i class="home-icon home-icon-cut"></i>
                <p>截图欣赏</p>
              </a>
            </li>
            <li class="item">
              <a href="###" class="cover">
                <i class="home-icon home-icon-computer"></i>
                <p>精美壁纸</p>
              </a>
            </li>
          </ul>
        </div>
         <div class="call-center">
          <div class="home-pic home-pic-title-phone">
          </div>
          <div class="left">
            <div class="chat-way">
              <i class="home-icon home-icon-qq"></i>
              <i class="home-icon home-icon-weibo"></i>
              <i class="home-icon home-icon-wechat"></i>
            </div>
            <div class="block">
              <p>
                <i class="home-icon home-icon-s-qq"></i>
                <span>加入玩家QQ4群</span>
              </p>
              <p>
                <i class="home-icon home-icon-s-qq"></i>
                <span>加入玩家QQ4群</span>
              </p>
            </div>
          </div>
          <div class="center">
            <div class="block">
              <p>
                <i class="home-icon home-icon-s-people"></i>
                <span class="intl"></span>
                <span>在线客服</span>
              </p>
              <p>
                <i class="home-icon home-icon-s-people"></i>
                <span class="intl"></span>
                <span>自助服务</span>
              </p>
              <p>
                <i class="home-icon home-icon-s-people"></i>
                <span class="intl"></span>
                <span>被盗反馈</span>
              </p>
            </div>
            <div class="block">
              <p>
                <i class="home-icon home-icon-s-people"></i>
                <span class="intl"></span>
                <span>BUG提交</span>
              </p>
              <p>
                <i class="home-icon home-icon-s-people"></i>
                <span class="intl"></span>
                <span>充值问题</span>
              </p>
              <p>
                <i class="home-icon home-icon-s-people"></i>
                <span class="intl"></span>
                <span>珍宝阁</span>
              </p>
            </div>
          </div>
          <div class="right">
            <p>客服电话：012-374658593</p>
            <p>客服邮箱：374658593@qq.com</p>
            <p>公司电话：012-374658593</p>
          </div>
        </div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
import Register from "../components/Register.vue";
import TopHeader from "../components/TopHeader.vue";
import FunctionBtn from "../components/FunctionBtn.vue";
import Bottom from "../components/Bottom.vue";

export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperSlides: [1, 2, 3, 4, 5],
      activeItem: 1,
      presentClass: "item-one"
    };
  },
  components: {
    Register,
    TopHeader,
    FunctionBtn,
    Bottom
  },
  methods: {
    showPresent(index) {
      this.activeItem = index + 1;
      const arr = ["one", "two", "three", "four"];
      this.presentClass = `item-${arr[index]}`;
    },
    normalClass(index) {
      const arr = ["one", "two", "three", "four"];
      return `item-${arr[index]}`;
    },
    hoverClass(index) {
      const arr = ["one", "two", "three", "four"];
      if (this.activeItem === index + 1) {
        return `item-${arr[index]}-hover`;
      }
      return false;
    }
  }
};
</script>
