const enterModal = new bootstrap.Modal($("#enterModal"), {});
const enterPreloaderModal = new bootstrap.Modal($("#enterPreloaderModal"), {});
const passwordModal = new bootstrap.Modal($("#passwordModal"), {});
const passwordFullModal = new bootstrap.Modal($("#passwordFullModal"), {});
const passwordErrorModal = new bootstrap.Modal($("#passwordErrorModal"), {});

const regModalEmail = new bootstrap.Modal($("#regModalEmail"), {});
const regModalPhone = new bootstrap.Modal($("#regModalPhone"), {});
const regModalPhoneFull = new bootstrap.Modal($("#regModalPhoneFull"), {});
const enterRegModalEmail = new bootstrap.Modal($("#enterRegModalEmail"), {});
const enterRegModalPhone = new bootstrap.Modal($("#enterRegModalPhone"), {});
const passRepairModalEmail = new bootstrap.Modal($("#passRepairModalEmail"), {});
const passRepairModalPhone = new bootstrap.Modal($("#passRepairModalPhone"), {});
const regErrorModal = new bootstrap.Modal($("#regErrorModal"), {});

const repairDefaultModal = new bootstrap.Modal($("#repairDefaultModal"), {});
const repairEmailModal = new bootstrap.Modal($("#repairEmailModal"), {});
const repairSuccessModal = new bootstrap.Modal($("#repairSuccessModal"), {});

$("#enterModal, #passwordModal, #regModalEmail").on('shown.bs.modal', function () {
  $(this).find('input').eq(0).focus();
});

// enterModal.show();
// enterPreloaderModal.show();
// passwordModal.show();
// passwordFullModal.show();
// passwordErrorModal.show();
// regModalEmail.show();
// regModalPhone.show();
// regModalPhoneFull.show();
// enterRegModalEmail.show();
// enterRegModalPhone.show();
// passRepairModalEmail.show();
// passRepairModalPhone.show();
// regErrorModal.show();
// repairDefaultModal.show();
// repairEmailModal .show();
// repairSuccessModal.show();


// password show
if(document.querySelector('.eye-ico') !== null){
	[].forEach.call(document.querySelectorAll('.eye-ico'), function(el){
		el.onclick = function(e) {
			var passInput = this.closest('.enter-modal__group').querySelector('.enter-modal__input');
						// passInput.focus();
			this.classList.toggle('unblind');
			passInput.getAttribute('type') === 'password' ?
			passInput.setAttribute('type','text') :
			passInput.setAttribute('type','password');
		}
	});
}
// END password show