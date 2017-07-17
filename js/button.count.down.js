(function($){
	$.fn.startCountDown = function(msNum){
		var self =this;
		self.attr('o-text',self.text());
		self.timer = msNum;
		self.text((self.timer--)+'s 后重新操作');
		self.prop('disabled',true);
		window.countDownTime = setInterval(function(){
			self.text((self.timer--)+'s 后重新操作');
			if(self.timer<1){
				self.prop('disabled',false);
				self.text(self.attr('o-text'));
				clearInterval(window.countDownTime);
				timer = msNum;
			}
		},1000)
	}

	$.fn.stopCountDown = function(){
		var self =this;
		self.timer = 0;
		clearInterval(window.countDownTime);
		self.prop('disabled',false);
		self.text(self.attr('o-text'));
	}

}(jQuery||Zepto));