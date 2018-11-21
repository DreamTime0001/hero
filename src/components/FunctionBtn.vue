<template>
  <div class="function-btn">
    <div class="register">
      <div class="home-pic home-pic-register">
        <div class="inner-txt"></div>
      </div>
    </div>
    <div class="download">
      <div class="home-pic home-pic-download">下载游戏</div>
    </div>
    <div class="shop">
      <div class="home-pic home-pic-shop">
        <router-link class="part" to="/recharge">
          <i class="home-icon home-icon-money"></i>
          <span>充值</span>
        </router-link>
        <a href="###" class="part">
          <i class="home-icon home-icon-gift"></i>
          <span>礼包</span>
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@-webkit-keyframes icoBig {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  20% {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }

  30% {
    -webkit-transform: scale(0.93);
    transform: scale(0.93);
  }

  45% {
    -webkit-transform: scale(1.04);
    transform: scale(1.04);
  }

  60% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@-moz-keyframes icoBig {
  0% {
    -moz-transform: scale(1);
    transform: scale(1);
  }

  20% {
    -moz-transform: scale(1.05);
    transform: scale(1.05);
  }

  30% {
    -moz-transform: scale(0.93);
    transform: scale(0.93);
  }

  45% {
    -moz-transform: scale(1.04);
    transform: scale(1.04);
  }

  60% {
    -moz-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes icoBig {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    transform: scale(1);
  }

  20% {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    transform: scale(1.05);
  }

  30% {
    -webkit-transform: scale(0.93);
    -moz-transform: scale(0.93);
    transform: scale(0.93);
  }

  45% {
    -webkit-transform: scale(1.04);
    -moz-transform: scale(1.04);
    transform: scale(1.04);
  }

  60% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    transform: scale(1);
  }
}

@-webkit-keyframes icoBig2 {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  20% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    opacity: 0;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

@-moz-keyframes icoBig2 {
  0% {
    -moz-transform: scale(1);
    transform: scale(1);
  }

  20% {
    -moz-transform: scale(1.3);
    transform: scale(1.3);
    opacity: 0;
  }

  100% {
    -moz-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes icoBig2 {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    transform: scale(1);
  }

  20% {
    -webkit-transform: scale(1.3);
    -moz-transform: scale(1.3);
    transform: scale(1.3);
    opacity: 0;
  }

  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
.function-btn {
  .register {
    position: relative;
    margin-bottom: 7px;

    .inner-txt {
      position: absolute;
      bottom: 0;
      left: 24px;
      height: 140px;
      width: 280px;
      cursor: pointer;
      background: url("../assets//images/register_txt.png") no-repeat center
        center;

      &::after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        height: 140px;
        width: 280px;
        cursor: pointer;
        background: url("../assets/images/register_txt.png") no-repeat center
          center;
      }

      &:hover {
        animation: linear icoBig 1.6s infinite;

        &::after {
          opacity: 0.6;
          animation: linear icoBig2 1.6s infinite;
        }
      }
    }
  }

  .download {
    font-size: 22px;
    color: #fff;
    line-height: 80px;
    text-align: center;
  }

  .shop {
    margin-top: -1px;
    overflow: hidden;

    .part {
      float: left;
      width: 50%;
      height: 100%;
      padding-top: 25px;
      text-align: center;
      font-size: 20px;
      color: #f7e1b0;
      box-sizing: border-box;
      cursor: pointer;

      span,
      i {
        vertical-align: middle;
      }

      .home-icon {
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transition: 0.5s;
        -webkit-transition: 0.5s;
        -ms-transition: 0.5s;
        -moz-transition: 0.5s;
      }

      &:hover .home-icon {
        transform: translateZ(30px) rotateY(360deg);
        -webkit-transform: translateZ(30px) rotateY(360deg);
        -ms-transform: translateZ(30px) rotateY(360deg);
        -moz-transform: translateZ(30px) rotateY(360deg);
      }
    }
  }
}
</style>

