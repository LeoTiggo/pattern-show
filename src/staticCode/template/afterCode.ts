/*
 * @Author: your name
 * @Date: 2021-11-23 23:20:53
 * @LastEditTime: 2021-11-24 00:13:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \设计模式\design-pattern\src\staticCode\template\afterCode.js
 */

const codeStr = 
`function saveHandle() {
  console.log('save Handle');
  const connected_device = localStorage.getItem('connected_device');
  let artPath = '';
  if (process.env.NODE_ENV === 'development') {
    artPath = path.join(__dirname, '../../template/daqSave.art');
  } else {
    artPath = path.join(process.cwd(), '/resources//template/daqSave.art');
  }

  dialog
    .showSaveDialog({
      title: '选择保存的文件名',
      defaultPath: '--'},
      buttonLabel: '保存',
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
        window.log('save file success！');
        console.log('tigoo_write_cb', res);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}`;
export default codeStr;
