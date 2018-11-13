$(function(){
	$("#cowbe").validate({
		rules:{
			name:"required",
			nickname:{
				required:true,
				maxlength:8
			},
		}
	});
	$(".bt").click(function(){
		if($("#cowbe").valid()){
			var form = $("#cowbe")[0];
			var data = new FormData(form);
			var file = $("#images").prop('files');
			data.append('images',file);
			$.ajax({
				url:"../aram/store.php",
				type:"post",
				data:data,
				cache:false,
				contentType: false,
        		processData: false,
        		dataType:'text',
			}).done(function(res){
				console.log(res);
			});
		}
	});
});