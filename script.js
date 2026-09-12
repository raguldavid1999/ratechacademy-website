let isNavOpen = false;

function sendMessage(event) {
    event.preventDefault(); // prevent actual form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const course = document.getElementById('course').value;
    const userMessage = document.getElementById('message').value.trim();

    const fullMessage = `
📥 New Inquiry from Website:

👤 Name: ${name}
📧 Email: ${email}
📚 Course: ${course}
💬 Message: ${userMessage}
    `;

    const phoneNumber = '919123564119'; // Replace with your WhatsApp number (with country code, no + or spaces)
    const encodedMessage = encodeURIComponent(fullMessage);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, '_blank');
  }

  function navClick(){
    isNavOpen = !isNavOpen;
    let navElement = document.getElementsByClassName('nav-menu');
    if(isNavOpen){        
        navElement[0].style.left = '0';        
    }
    else{
        navElement[0].style.left = '-100%';
    }
  }