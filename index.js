(function() {
	var saat = document.querySelector('.icerik');

	// 10'dan kucuk saat, dakika ve saniye degerleri
  // icin, sola bir sifir koyuyoruz.
  // orn. 2:12:4 => 02:12:04 oluyor.
	var ekstraSifir = function(x) {
		return x < 10 ? '0' + x : x;
	};
	
	var tiktak = function() {
		var d = new Date();
		var h = ekstraSifir( d.getHours() );
		var m = ekstraSifir( d.getMinutes() );
		var s = ekstraSifir( d.getSeconds() );
		var current_time = [h,m,s].join(':');
		saat.innerHTML = current_time;
	};
	
	tiktak();
	
	// Calling ticktock() every 1 second
	setInterval(tiktak, 1000);
}());