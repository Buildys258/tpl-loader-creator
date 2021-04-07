const { tplReplace } = require('../utils')
const { getOptions } = require('loader-utils')
function tplLoader(source) {
    source = source.replace(/\s+/g, '')
    const { log } = getOptions(this)
    const _log = log ? `console.log('compiled the file which is from ${ this.resourcePath }')` : ''

    return `
    export default (options) => {
        ${ tplReplace.toString() }
        ${ _log }
        return tplReplace('${source}', options)
    }
    `
}

module.exports = tplLoader
/* 
function tpl(options) {
    function tplReplace(template, replaceObject) {
        return template.replace(/\{\{(.*?)\}\}/g, (node, key) => {//参考replace方法
            return replaceObject[key]
        })
    }
    return tplReplace(`${source}`, options)//还是得用模板字符串占位符
} */