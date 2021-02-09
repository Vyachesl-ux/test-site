/*======== modal
=========================*/

	const modalCall = document.getElementById('button__send-form');
	var body = document.getElementById('body');
	var btnClose = document.getElementById('modal-close');
	var form = document.getElementById('modal__form');
	var contactForm = document.getElementById('contact__form');

	modalCall.addEventListener('click', function(){
			form.style.display = 'flex';
			body.classList.add('no-scroll');
			setTimeout(function(){
				contactForm.style.cssText = 'transform: rotateX(0);'
				}, 200);
			});

	btnClose.addEventListener('click', close);
	form.addEventListener('click', function(event){
			form.style.display = 'none';
			body.classList.remove('no-scroll');
				setTimeout(function(){
				contactForm.style.cssText = 'transform: rotateX(90deg);'
				}, 200);
				
			});


		function close(){
			form.style.display = 'none';
			body.classList.remove('no-scroll');
			setTimeout(function(){
				contactForm.style.cssText = 'transform: rotateX(90deg);'
				}, 200);//задержка разворота функции
			};

			

	contactForm.addEventListener('click', function(event){
	event.stopPropagation();

	})

		










