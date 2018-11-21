<template>
  <div class="register">
    <transition name="slide-in">
      <div class="big" v-if="registerShow">
        <p class="title">
          <i class="icon-close" @click="registerShow=false">×</i>
          <span class="num">1</span>
          <span class="txt">5秒快速注册</span>
        </p>
        <div class="block">
          <div class="input-box">
            <validate-input ref="validator" v-for="(item,i) in inputVal" :key="i" :data="item" :arr="inputArr" :pwdArr="pwdArr"></validate-input>
          </div>
          <div class="btn-box">
            <a href="###" class="register-pic register-pic-btn" @click="register"></a>
          </div>
        </div>
        <p class="title">
          <span class="num">2</span>
          <span class="txt">下载客户端</span>
        </p>
        <div class="block">
          <div class="btn-box">
            <a href="###" class="register-pic register-pic-download"></a>
          </div>
        </div>
        <p class="title">
          <span class="num">3</span>
          <span class="txt">登录领取2888礼包</span>
        </p>
        <div class="present">
          <span class="register-pic register-pic-present">
          </span>
        </div>
      </div>
    </transition>
    <transition name="slide-in">
      <div class="register-pic register-pic-small" @click="registerShow=true" v-if="!registerShow"></div>
    </transition>
  </div>
</template>
<script>
import ValidateInput from "./ValidateInput.vue";

export default {
  data() {
    return {
      registerShow: false,
      inputVal: [
        {
          index: 0,
          name: "username",
          mention: "用户名",
          validate: [
            {
              rule: "required",
              errorMsg: "请输入账号"
            },
            {
              rule: "isUserName",
              errorMsg: "请输入正确的用户名"
            }
          ],
          res: true
        },
        {
          index: 1,
          name: "pwd",
          mention: "设置密码",
          validate: [
            {
              rule: "required",
              errorMsg: "请输入密码"
            },
            {
              rule: "isPassword",
              errorMsg: "请输入正确的密码"
            }
          ],
          res: true
        },
        {
          index: 2,
          name: "confirmPwd",
          mention: "确认密码",
          validate: [
            {
              rule: "required",
              errorMsg: "请再次输入密码"
            }
          ],
          res: true
        },
        {
          index: 3,
          name: "email",
          mention: "邮箱",
          validate: [
            {
              rule: "required",
              errorMsg: "请输入邮箱地址"
            }
          ],
          res: true
        },
        {
          index: 4,
          name: "name",
          mention: "真实姓名",
          validate: [
            {
              rule: "required",
              errorMsg: "请输入真实姓名"
            }
          ],
          res: true
        },
        {
          index: 5,
          name: "idNum",
          mention: "身份证号码",
          validate: [
            {
              rule: "required",
              errorMsg: "请输入身份证号码"
            },
            {
              rule: "isIDCardStrict",
              errorMsg: "请输入正确的身份证号码"
            }
          ],
          res: true
        }
      ],
      inputArr: [],
      pwdArr: []
    };
  },
  components: {
    ValidateInput
  },
  methods: {
    register() {
      const self = this;
      const flag = this.inputArr.some(v => v.error === false);

      if (!flag) {
        const obj = {
          account: this.inputArr[0].val,
          email: this.inputArr[3].val,
          idCard: this.inputArr[5].val,
          password: this.inputArr[1].val,
          realName: this.inputArr[4].val,
          valpassword: this.inputArr[2].val
        };
        console.log(obj);

        self.$axios
          .post("/playUser/register", obj)
          .then(res => {
            const { result } = res.data;
            if (!result) {
              const errorCode = res.data.warning.code;
              const errorObj = {
                20006: 5,
                10007: 2
              };
              this.inputVal[errorObj[errorCode]].res = false;
              this.$refs.validator[errorObj[errorCode]].getError();
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.slide-in-enter-active {
  transition: all 0.5s ease 0.1s;
}
.slide-in-leave-active {
  transition: all 0.2s ease;
}
.slide-in-enter,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.register {
  position: fixed;
  top: 100px;
  right: 0;
  z-index: 99999;
  &-pic-small {
    position: absolute;
    top: 0;
    right: 0;
  }
  .big {
    position: absolute;
    top: 0;
    right: 0;
    width: 345px;
    background: #881912;
    z-index: 999;
  }

  .title {
    position: relative;
    padding: 12px 0 12px 16px;
    background: #bb2c22;
    color: #ffd97a;
    font-size: 24px;
    .icon-close {
      position: absolute;
      right: 10px;
      top: -4px;
      font-size: 40px;
      font-weight: 100;
      cursor: pointer;
    }
    .num {
      display: inline-block;
      font-weight: bold;
      text-align: center;
      height: 32px;
      width: 32px;
      line-height: 32px;
      border-radius: 50%;
      background: #881912;
      margin-right: 10px;
    }
    .txt {
      display: inline-block;
    }
  }

  .block {
    padding: 20px 0;
    .input-box {
      padding: 0 32px;
      margin-bottom: 50px;
    }
    .btn-box {
      padding: 0 30px;
      text-align: center;
      line-height: 0;
    }
  }
  .present {
    padding-top: 35px;
    height: 234px;
    text-align: center;
  }
}
</style>


