/*
 * @Author: your name
 * @Date: 2021-11-23 23:20:43
 * @LastEditTime: 2021-11-23 23:45:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \设计模式\design-pattern\src\staticCode\template\beforeCode.js
 */
const codeStr = `var loginForm = document.getElementById('login-form');

loginForm.onsubmit = function (e) {
  e.preventDefault();
  var account = document.getElementById('account').value;
  var pwd = document.getElementById('password').value;

  if (account === null || account === '') {
    alert('手机号不能为空');
    return false;
  }
  if (pwd === null || pwd === '') {
    alert('密码不能为空');
    return false;
  }
  if (!/(^1[3|4|5|7|8][0-9]{9}$)/.test(account)) {
    alert('手机号格式错误');
    return false;
  }
  if (pwd.length < 6) {
    alert('密码不能小于六位');
    return false;
  }
  // ajax 发送请求
};`
export default codeStr
