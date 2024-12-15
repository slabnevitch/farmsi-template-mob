// password show
if(document.querySelector('.eye-ico') !== null){
	[].forEach.call(document.querySelectorAll('.eye-ico'), function(el){
		el.onclick = function(e) {
			var passInputs = this.closest('.change-password__form').querySelectorAll('.enter-modal__input');
						// passInput.focus();
			this.classList.toggle('unblind');

			[].forEach.call(passInputs, function(item){
				item.getAttribute('type') === 'password' ?
				item.setAttribute('type','text') :
				item.setAttribute('type','password');

			});
		}
	});
}
		// END password show