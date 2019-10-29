/**
 * 相当于commonjs中的module.exports
 * 同时也意味着，这个模块不能有其他的导出了
 */
export = function() {
  console.log('default');
}

// export let dd = 1