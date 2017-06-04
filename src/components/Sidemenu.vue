<template>
	<div id="sideMenu">
		<el-row class="tac">
		<el-col :span="24">
			<el-menu default-active="2" :unique-opened="true" :router="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
				<el-submenu index="1">
					<template slot="title"><i class="el-icon-message"></i>点我哦</template>
					<el-menu-item-group>
						<template slot="title">逗你玩</template>
						<el-menu-item index="/BDsearch">百度搜</el-menu-item>
						<el-menu-item index="/TMsearch">天猫搜</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="分组2">
						<el-menu-item index="/RouterA">陪你玩</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="">
						<template slot="title">让你玩</template>
						<el-menu-item index="">看动漫</el-menu-item>
					</el-submenu>
				</el-submenu>

				<el-menu-item index="2.1"><i class="el-icon-menu"></i>导航二</el-menu-item>

				<el-submenu index="2">
					<template slot="title"><i class="el-icon-message"></i>图表和表格</template>
					<el-menu-item-group>
						<el-menu-item index="/highcharts">highcharts</el-menu-item>
						<el-menu-item index="/table">table</el-menu-item>
					</el-menu-item-group>
				</el-submenu>

				<el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
			</el-menu>
		</el-col>
	</el-row>
	</div>
	
</template>

<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style scoped lang="scss">
	a {
		text-decoration: none;
		color: #48576a;
	}
	.el-menu-item.is-active > a {
		color: #20a0ffl
	}
</style>