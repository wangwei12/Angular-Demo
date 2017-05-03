
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		div{
			border: 1px solid black;
			width: 800px;
			height:300px;
			background-color:rgba(0,0,100,0.5);
			margin: 200px 300px 50px 0px;
		}
		div:hover{
			background-color:blue;
			transition:background-color 3s;
			animation:5s;

		}
	</style>
	<script type="text/javascript">
		window.onload=function(){
			document.getElementById("x").onclick=function(){
				var int=setInterval(function(){
					document.getElementById("div").setAttribute("style","transform:rotateX(180deg);");
					clearInterval(int);
				},20);			   
			}
			document.getElementById("y").onclick=function(){
				document.getElementById("div").setAttribute("style","transform:rotateY(180deg);");
			}
			document.getElementById("z").onclick=function(){

				document.getElementById("div").setAttribute("style","transform:rotateZ(180deg);");
			}
		}
	</script>
</head>
<body>
		<div id="div" style="">this is a div</div>
		<button id="x">绕X轴旋转</button>
		<button id="y">绕Y轴旋转</button>
		<button id="z">绕Z轴旋转</button>
</body>
</html>
