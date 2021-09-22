var Index = function () {

    return {

        //main function
        init: function () {
            const btn = document.getElementById('send');

            document.getElementById('mailSendForm')
                .addEventListener('submit', function (event) {
                    event.preventDefault();

                    btn.innerText = 'Sending...';

                    const serviceID = 'service_y08dhac';
                    const templateID = 'template_gztc0qb';

                    emailjs.sendForm(serviceID, templateID, this)
                        .then(() => {
                            btn.innerText = 'Send';
                            alert('Sent!');
                        }, (err) => {
                            btn.innerText = 'Send';
                            alert(JSON.stringify(err));
                        });
                });
        },
    };

}();