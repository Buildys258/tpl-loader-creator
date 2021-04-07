import tpl from './info.tpl'


const oApp = document.querySelector('#app')
const info = {
    name: '张三',
    age: 18,
    career: '学生',
    hobby: '篮球、写代码'
}


console.log(info)
oApp.innerHTML = tpl(info)