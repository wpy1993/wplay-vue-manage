<template>
	<div>
		<canvas id="Cancontent"></canvas>
	</div>
	
</template>

<script>
		

	export default {
		mounted: function () {
			var cav = document.getElementById('Cancontent');
			console.log(cav);
			var w = window.screen.width;
			var h = window.screen.height;
			var yPosition = Array(300).join(0).split('');
			var ctx = cav.getContext('2d');  // 初始化画布
			//  vue不支持关于未声明的属性就是window这个容错率
			window.draw = function () {
				ctx.fillStyle = 'rgba(0, 0, 0, .05)';
				ctx.fillRect(0, 0, w, h);
				ctx.fillStyle = 'green';
				ctx.font = '20px';
				yPosition.map(function (y, index) {
					// 改动之处，下面两个必须var，否则添加window
					var text = String.fromCharCode(1e2 + Math.random() * 330);
					var x = index * 10;
					cav.getContext('2d').fillText(text, x, y);
					if (y > Math.random() * 1e4) {
						yPosition[index] = 0;
					} else {
						yPosition[index] = y + 10;
					}
				})
			}
			setInterval('draw()', 30);
		}
	}
</script>

<style scoped sass="lang">
	#Cancontent {
		width: 100%;
		height: 100%; 
	}
</style>