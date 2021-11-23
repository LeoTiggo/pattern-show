/*
 * @Author: your name
 * @Date: 2021-11-23 23:20:53
 * @LastEditTime: 2021-11-24 00:26:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \设计模式\design-pattern\src\staticCode\template\afterCode.js
 */
const codeStr=
`var strategies = {
  isNonEmpty: function (value, errorMsg) {
    if (value === '' || value === null) {
      return errorMsg;
    }
  },
  isMobile: function (value, errorMsg) {
    // 手机号码格式
    if (!/(^1[3|4|5|7|8][0-9]{9}$)/.test(value)) {
      return errorMsg;
    }
  },
  minLength: function (value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
  },
};

var loginForm = document.getElementById('login-form');

loginForm.onsubmit = function (e) {
  e.preventDefault();
  var accountIsMobile = strategies.isMobile(account, '手机号格式错误');
  var pwdMinLength = strategies.minLength(pwd, 8, '密码不能小于8位');
  var errorMsg = accountIsMobile || pwdMinLength;
  if (errorMsg) {
    alert(errorMsg);
    return false;
  }
};`
export default codeStr
