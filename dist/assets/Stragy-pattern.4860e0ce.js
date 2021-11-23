import{e as i,i as o,r as u,o as f,k as d,a as e,w as t}from"./vendor.258b9acf.js";const g=`var loginForm = document.getElementById('login-form');

loginForm.onsubmit = function (e) {
  e.preventDefault();
  var account = document.getElementById('account').value;
  var pwd = document.getElementById('password').value;

  if (account === null || account === '') {
    alert('\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A');
    return false;
  }
  if (pwd === null || pwd === '') {
    alert('\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A');
    return false;
  }
  if (!/(^1[3|4|5|7|8][0-9]{9}$)/.test(account)) {
    alert('\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF');
    return false;
  }
  if (pwd.length < 6) {
    alert('\u5BC6\u7801\u4E0D\u80FD\u5C0F\u4E8E\u516D\u4F4D');
    return false;
  }
  // ajax \u53D1\u9001\u8BF7\u6C42
};`,m=`var strategies = {
  isNonEmpty: function (value, errorMsg) {
    if (value === '' || value === null) {
      return errorMsg;
    }
  },
  isMobile: function (value, errorMsg) {
    // \u624B\u673A\u53F7\u7801\u683C\u5F0F
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
  var accountIsMobile = strategies.isMobile(account, '\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF');
  var pwdMinLength = strategies.minLength(pwd, 8, '\u5BC6\u7801\u4E0D\u80FD\u5C0F\u4E8E8\u4F4D');
  var errorMsg = accountIsMobile || pwdMinLength;
  if (errorMsg) {
    alert(errorMsg);
    return false;
  }
};`,B=i({setup(p){const a=o(g),l=o(m);return(v,F)=>{const n=u("n-code"),r=u("n-tab-pane"),c=u("n-tabs"),s=u("n-card");return f(),d("div",null,[e(s,{title:"\u7B56\u7565\u6A21\u5F0F"},{default:t(()=>[e(c,{"default-value":"before",size:"large","justify-content":"space-evenly"},{default:t(()=>[e(r,{name:"before",tab:"Before"},{default:t(()=>[e(n,{code:a.value,language:"javascript"},null,8,["code"])]),_:1}),e(r,{name:"after",tab:"After"},{default:t(()=>[e(n,{code:l.value,language:"javascript"},null,8,["code"])]),_:1})]),_:1})]),_:1})])}}});export{B as default};
