(function() {
	const copyButton = document.getElementById('copyButton');
	const promoCode = document.getElementById('promoCode');
	copyButton.addEventListener('click', () => {
		promoCode.select();
		document.execCommand("copy");
	});
})();
