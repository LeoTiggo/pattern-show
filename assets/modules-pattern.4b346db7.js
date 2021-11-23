import{e as d,i as u,r as t,o as i,k as f,a as e,w as a}from"./vendor.258b9acf.js";const p=`var loginForm = document.getElementById('login-form');

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
};`,m=`function saveHandle() {
  console.log('save Handle');
  const connected_device = localStorage.getItem('connected_device');
  let artPath = '';
  if ("production" === 'development') {
    artPath = path.join(__dirname, '../../template/daqSave.art');
  } else {
    artPath = path.join(process.cwd(), '/resources//template/daqSave.art');
  }

  dialog
    .showSaveDialog({
      title: '\u9009\u62E9\u4FDD\u5B58\u7684\u6587\u4EF6\u540D',
      defaultPath: '--'},
      buttonLabel: '\u4FDD\u5B58',
      filters: [
        {
          name: 'csv',
          extensions: ['csv'],
        },
      ],
    })
    .then((result) => {
      console.log('tigoo plotter saveFile', result);
      const chartTmpl = readTmplFile(artPath);
      const renderData = this.parseSerise();
      const writedata = template.render(chartTmpl.toString(), renderData);
      if (result.canceled) return;
      fs.writeFile('--', writedata, (res) => {
        window.log('save file success\uFF01');
        console.log('tigoo_write_cb', res);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}`,D=d({setup(_){const r=u(p),l=u(m);return(v,g)=>{const n=t("n-code"),o=t("n-tab-pane"),c=t("n-tabs"),s=t("n-card");return i(),f("div",null,[e(s,{title:"\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F",class:"active"},{default:a(()=>[e(c,{"default-value":"before",size:"large","justify-content":"space-evenly"},{default:a(()=>[e(o,{name:"before",tab:"Before"},{default:a(()=>[e(n,{code:r.value,language:"javascript"},null,8,["code"])]),_:1}),e(o,{name:"after",tab:"After"},{default:a(()=>[e(n,{code:l.value,language:"javascript"},null,8,["code"])]),_:1})]),_:1})]),_:1})])}}});export{D as default};
