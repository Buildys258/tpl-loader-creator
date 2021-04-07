function tplReplace(template, replaceObject) {
    return template.replace(/\{\{(.*?)\}\}/g, (node, key) => {//参考replace方法
        return replaceObject[key]
    })
}

module.exports = {
    tplReplace
}