/* jshint esversion: 6 */
const validator = {
  // test username
  isUserName: (str) => {
    const reg = /^[A-Za-z0-9]{3,20}$/
    return reg.test(str)
  },

  // test password
  isPassword: (str) => {
    const reg = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/
    return reg.test(str)
  },

  // test ID card number
  isIDCardNum: (str) => {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return reg.test(str)
  },

  isIDCardStrict: (code) => {
    const city = {
      11: "北京",
      12: "天津",
      13: "河北",
      14: "山西",
      15: "内蒙古",
      21: "辽宁",
      22: "吉林",
      23: "黑龙江 ",
      31: "上海",
      32: "江苏",
      33: "浙江",
      34: "安徽",
      35: "福建",
      36: "江西",
      37: "山东",
      41: "河南",
      42: "湖北 ",
      43: "湖南",
      44: "广东",
      45: "广西",
      46: "海南",
      50: "重庆",
      51: "四川",
      52: "贵州",
      53: "云南",
      54: "西藏 ",
      61: "陕西",
      62: "甘肃",
      63: "青海",
      64: "宁夏",
      65: "新疆",
      71: "台湾",
      81: "香港",
      82: "澳门",
      91: "国外 "
    };
    let pass = true;

    if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
      pass = false;
    } else if (!city[code.substr(0, 2)]) {
      pass = false;
    } else if (code.length === 18) {
      code = code.split('');
      const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      const parity = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
      let sum = 0;
      let ai = 0;
      let wi = 0;
      for (let i = 0; i < 17; i++) {
        ai = code[i];
        wi = factor[i];
        sum += ai * wi;
      }
      if (parity[sum % 11] !== code[17]) {
        console.log(parity[sum % 11])
        pass = false;
      }
    }
    return pass;
  },

  // determine whether the character is empty
  required: (str) => {
    if (typeof str === "undefined" || str === null || str === "") {
      return false;
    }
    return true;
  },

  // calculate age based on ID card number
  getAge: (val) => {
    let str = val
    str = str.trim()
    const strBirthday = `${str.substr(6, 4)}/${str.substr(
      10,
      2
    )}/${str.substr(12, 2)}`
    const birthDate = new Date(strBirthday)
    const nowDateTime = new Date()
    let age = nowDateTime.getFullYear() - birthDate.getFullYear()
    if (
      nowDateTime.getMonth() < birthDate.getMonth()
      || (nowDateTime.getMonth() === birthDate.getMonth()
      && nowDateTime.getDate() < birthDate.getDate())
    ) {
      age -= 1
    }
    return age
  },

  // test adult
  isAdult: (val) => this.getAge(val) >= 18

}
export default validator
