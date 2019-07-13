define(()=>{
	class Toast{
		constructor(options){
			this.child = options.child;
		}
		init(){
			
			this.child.on("click",function(){
				var img = $("<img>");					
				img.attr("src",$(this).children("img").attr("src"))
				.css({
					width:200,height:200,
					position:"absolute",
					left:0,top:0,right:0,bottom:0,
					margin:"auto"
				});
				
				$(this).append(img)
				
				setTimeout(function(){
					img.remove()
				},2000)
				
			})
		}
	}
	
	return {
		toast:Toast
	};
})