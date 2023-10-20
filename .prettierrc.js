/*
 * @Author: along
 * @Description: prettierrc config file
 * @Date: 2023-10-20 13:13:29
 * @LastEditors: along
 * @LastEditTime: 2023-10-20 13:15:12
 * @FilePath: /疫苗临床试验一体化平台/.prettierrc.js
 */

// https://prettier.io/docs/en/options.html

module.exports = {
	//使用tab缩进还是空格缩进，false表示空格缩进；
	useTabs: true,
	//tab是空格的情况下，是几个空格，选择2个；
	tabWidth: 2,
	//当行字符的长度，推荐80，也有人喜欢100或者120；
	printWidth: 100,
	//使用单引号还是双引号，选择true，使用单引号；
	singleQuote: true,
	//在多行输入的尾逗号是否添加，不需要添加设置为 `none`，需要添加设置为 all；
	trailingComma: 'all',
	//语句末尾是否要加分号，默认值true，选择false表示不加；
	semi: true,
	//表示.vue文件中，<script>和<style>标签中的代码缩进两个单元格
	vueIndentScriptAndStyle: true,
};
