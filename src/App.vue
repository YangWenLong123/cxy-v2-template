<!--
 * @Author: along
 * @Description: 
 * @Date: 2023-10-20 11:47:35
 * @LastEditors: along
 * @LastEditTime: 2023-10-20 13:31:59
 * @FilePath: /cxy-v2-template/src/App.vue
-->
<template>
	<div id="app">
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</nav>
		<router-view />
	</div>
</template>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
