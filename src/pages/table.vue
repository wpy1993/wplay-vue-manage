<template>
	<div id="table">
		这是个表格
		<el-table
		    :data="tableData"
		    style="width: 100%">
		    <el-table-column type="expand">
		      <template scope="props">
		        <el-form label-position="left" inline class="demo-table-expand">
		          <el-form-item label="商品名称">
		            <span>{{ props.row.name }}</span>
		          </el-form-item>
		          <el-form-item label="所属店铺">
		            <span>{{ props.row.shop }}</span>
		          </el-form-item>
		          <el-form-item label="商品 ID">
		            <span>{{ props.row.id }}</span>
		          </el-form-item>
		          <el-form-item label="店铺 ID">
		            <span>{{ props.row.shopId }}</span>
		          </el-form-item>
		          <el-form-item label="商品分类">
		            <span>{{ props.row.category }}</span>
		          </el-form-item>
		          <el-form-item label="店铺地址">
		            <span>{{ props.row.address }}</span>
		          </el-form-item>
		          <el-form-item label="商品描述">
		            <span>{{ props.row.desc }}</span>
		          </el-form-item>
		        </el-form>
		      </template>
		    </el-table-column>

		    <el-table-column
		      label="商品 ID"
		      prop="id">
		    </el-table-column>

		    <el-table-column
		      label="商品名称"
		      prop="name">
		    </el-table-column>

		    <el-table-column
		      label="描述">
			  <!-- 下面的会使当前column的prop失效，并且在slot：reference中生效 -->
		      <template scope="scope">
		        <el-popover trigger="hover" placement="top">
		          <p>备注: {{ scope.row.msg }}</p>
		          <div slot="reference" class="name-wrapper">
		            <el-tag>{{ scope.row.desc }}</el-tag>

		          </div>
		        </el-popover>
		      </template>
		    
		    </el-table-column>

		    <el-table-column label="操作">
		      <template scope="wpy">
		        <el-button
		          size="small"
		          @click="handleEdit(wpy.$index, wpy.row)">编辑</el-button>
		        <el-button
		          size="small"
		          type="danger"
		          @click="handleDelete(wpy.$index, wpy.row)">删除</el-button>
		      </template>
		    </el-table-column>


		</el-table>
	</div>
</template>

<script>
	
	// 问题来了，数据重新加载完成后怎么修改表格
	
	export default {
	    data() {
	      return {
	        tableData: []  // 必须最初就把属性设置好为数组，不能是字符串
	      }
	    },
	    // mounted必须放在export中
	    mounted () {
	    	var that = this;
	    	// 必须this开头
			this.$axios('./Data/tableData.txt').then(function (res) {
				/*
				 * 1、把txt文本中的所有键值对都添加上"",这样typeof(res)会从string变为object
				 * 2、从txt读取过来，默认的添加了一个键名data，键值为txt内容
				 * 3、关于使用了这个函数之后，this指向歪了，我也很绝望啊，只能用that了
				 */
				that.tableData = res.data;
			})	
		},
		methods: {
			handleEdit(index, row) {
				console.log('即将编辑下标：' + index);
				console.log(row);
				console.log(this.tableData);

			},
			handleDelete(index, row) {
				this.tableData.splice(index, 1);
			}
		}
  	}
</script>

<style>
	.demo-table-expand {
	    font-size: 0;
	  }
	  .demo-table-expand label {
	    width: 90px;
	    color: #99a9bf;
	  }
	  .demo-table-expand .el-form-item {
	    margin-right: 0;
	    margin-bottom: 0;
	    width: 50%;
	  }
	  .el-tag {
	  	padding: 3px 5px;
	  	height: 30px;
	  	line-height: 22px;
	  	cursor: pointer;
	  }
</style>