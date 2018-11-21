<template>
  <div class="validate-input" :class="{error:errorShow}">
    <i class="register-pic register-pic-people"></i>
    <input type="text" :placeholder="data.mention" v-model="msg" v-if="!errorShow" @blur="checkVal(data)">
    <input type="text" :value="error" v-if="errorShow" @focus="errorShow = false">
  </div>
</template>
<script>
import validator from "../libs/validate";

export default {
  props: ["data", "arr", "pwdArr"],
  data() {
    return {
      msg: "",
      errorShow: false,
      error: ""
    };
  },
  methods: {
    checkVal(data) {
      let error;
      const i = data.index;
      let obj;

      const ret = data.validate
        .map(({ rule, errorMsg }) => {
          if (error) {
            return false;
          }
          const result = validator[rule](this.msg);
          if (!result) {
            error = errorMsg;
          }
          obj = {
            name: data.name,
            val: this.msg,
            error: result
          };
          this.arr[i] = obj;
          console.log(this.arr);
          return result;
        })
        .some(result => !result);
      if (ret) {
        this.error = error;
        this.errorShow = true;
      }
      // 验证密码是否相等
      if (data.name === "pwd") {
        this.pwdArr[0] = this.msg;
      }
      if (data.name === "confirmPwd") {
        this.pwdArr[1] = this.msg;
        if (validator.required(this.pwdArr[0])) {
          if (this.pwdArr[0] !== this.pwdArr[1]) {
            this.errorShow = true;
            this.error = "两次密码输入需一致";
            this.arr[i].error = false;
          }
        } else {
          this.errorShow = true;
          this.error = "请先输入密码";
          this.arr[i] = false;
        }
      }
    },
    getError() {
      this.errorShow = true;
      this.error = this.data.validate[1].errorMsg;
    }
  }
};
</script>

<style lang="scss" scoped>
.validate-input {
  position: relative;
  padding-left: 45px;
  margin-bottom: 7px;
  background: #fff;
  input {
    height: 32px;
    width: 100%;
    border: none;
  }

  .register-pic {
    position: absolute;
    top: 50%;
    left: 10px;
    margin-top: -10px;
  }
}
.error {
  background: #ffc8c8;
  color: #d2302c;
  input {
    color: #d2302c;
  }
}
</style>

