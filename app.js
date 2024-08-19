let button = document.getElementById('submit-button');

button.addEventListener('click', () => {
    let firstName = document.getElementById('FirstName').value.trim();
    let lastName = document.getElementById('LastName').value.trim();
    let agreeCheckbox = document.getElementById('last-checkbox').checked;
    let generalEnquiry = document.getElementById('generalEnquiry').checked;
    let supportRequest = document.getElementById('supportRequest').checked;
    let mailtxt = document.getElementById('Email-Address').value.trim();
    let msg_txt = document.getElementById('message-txt').value.trim();
    let SendMessage = true; // Reset SendMessage to true at the start

    // Reset error messages and styles
    document.querySelectorAll('.errorcls').forEach(el => {
        el.innerHTML = '';
        el.classList.remove('errorcls');
    });

    // Validate fields
    if (firstName === '') {
        document.getElementById('errorF').innerHTML = 'This field is required';
        document.getElementById('errorF').classList.add('errorcls');
        SendMessage = false;
    }

    if (lastName === '') {
        document.getElementById('errorL').innerHTML = 'This field is required';
        document.getElementById('errorL').classList.add('errorcls');
        SendMessage = false;
    }

    if (mailtxt === '') {
        document.getElementById('error-email').innerHTML = 'This field is required';
        document.getElementById('error-email').classList.add('errorcls');
        SendMessage = false;
    } else if (mailtxt !== '' && !mailtxt.includes('@')) {
        document.getElementById('error-email').innerHTML = 'Please enter a valid email address';
        document.getElementById('error-email').classList.add('errorcls');
        SendMessage = false;
    }

    if (!generalEnquiry && !supportRequest) {
        document.getElementById('error-query').innerHTML = 'Please select a query type';
        document.getElementById('error-query').classList.add('errorcls');
        SendMessage = false;
    }

    if (msg_txt === '') {
        document.getElementById('error-msg').innerHTML = 'This field is required';
        document.getElementById('error-msg').classList.add('errorcls');
        SendMessage = false;
    }

    if (!agreeCheckbox) {
        document.getElementById('error-check').innerHTML = 'To submit this form, please consent to being contacted';
        document.getElementById('error-check').classList.add('errorcls');
        SendMessage = false;
    }

    if (SendMessage) {
        document.querySelector('#Send-message').innerHTML = `
        <div id="box-sent">
            <div id="firt-box"> 
                <img src="assets/images/icon-success-check.svg">
                <h3>Message Sent!</h3>
            </div>
            <div>
                <span>Thanks for completing the form. We'll be in touch soon!</span>
            </div>
        </div>`;
    } else {
        // Change border color of inputs
        const inputs = document.querySelectorAll('input[type="text"], input[type="radio"], input[type="checkbox"], textarea');
        inputs.forEach(input => {
            input.style.border = '2px solid hsl(0, 66%, 54%)';
        });
    }
});

const radioLabels = document.querySelectorAll('.radio-label');

radioLabels.forEach(label => {
    label.addEventListener('click', () => {
        radioLabels.forEach(l => l.classList.remove('greencolor'));
        label.classList.add('greencolor');
    });
});
