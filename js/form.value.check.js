(function($){
	$.fn.formValueCheck = function(callback){
		var isAccress=false;
		if(this.find('[required]').length<1){
			isAccress=true;
		}else {
			this.find('[required]').each(function(index, el) {
				if( isNull( $(el).val() ) ){
					var msg = $(el).attr('data-message') ? $(el).attr('data-message') : '';
					if ($(el).parent().find('.help-block').length>0) {
						$(el).parent().find('.has-error').text(msg);
					}else {
						$(el).parent().addClass('has-error').append('<small class="help-block">'+ msg +'</small>');	
					}
					isAccress = false;
				}else {
					$(el).parent().removeClass('has-error');
					$(el).parent().find('.help-block').remove();
					isAccress = true;
				}
				$(el).blur(function(event) {
					if( isNull( $(el).val() ) ) {
						isAccress = false;
					}else {
						$(el).parent().removeClass('has-error');
						$(el).parent().find('.help-block').remove();
						isAccress = true;
					}
				}).focus(function(event) {
					$(el).parent().removeClass('has-error');
					$(el).parent().find('.help-block').remove();
				});
			});
		}
		
		if(isAccress){
			callback()
		}
	}
	function isNull(data){ 
		return (data == "" || data == undefined || data == null) ? true : false; 
	}
}(jQuery||Zepto));