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

  const courseDetails = {
    'full-stack': {
      title: 'Full Stack Development',
      subtitle: 'Build Modern, Production-Ready Web Applications',
      overview: 'Learn how to build complete web applications from frontend to backend, database, authentication, deployment, and AI-powered features.',
      learn: [
        'Frontend: HTML, CSS, JavaScript, TypeScript, React, Angular, responsive design, UI/UX, Figma, and accessibility.',
        'Backend: Node.js, Express.js, REST APIs, authentication, JWT, and API integration.',
        'Database: MongoDB, PostgreSQL, Redis, database design, and CRUD operations.',
        'Development tools: Git, GitHub, NPM, and Webpack.',
        'DevOps and deployment: Docker, Nginx, GitHub Actions, CI/CD, Vercel, and AWS basics.',
        'AI integration: AI-assisted development, coding tools, prompt engineering, AI APIs, chatbots, and AI-powered web features.'
      ],
      projects: [
        'Build real-world Full Stack applications',
        'Build an AI-powered web application',
        'Implement API and database integration',
        'Add authentication and deploy a production-ready project'
      ],
      who: 'Aspiring web developers, students, career switchers, and anyone ready to build and deploy complete web products.',
      outcomes: 'Build a portfolio of production-ready applications and confidently work across frontend, backend, databases, deployment, and AI integrations.',
      regularFee: '₹10,000',
      offerFee: '₹4,999'
    },
    dsa: {
      title: 'Data Structures & Algorithms',
      subtitle: 'Master DSA with Java for Coding Interviews',
      overview: 'Build strong problem-solving skills and learn the most important Data Structures and Algorithms using Java with practical coding and interview-oriented problems.',
      learn: [
        'Java fundamentals: Java basics, methods, OOP concepts, arrays, and strings.',
        'Data structures: linked lists, doubly linked lists, circular linked lists, stacks, queues, HashMap, HashSet, trees, BST, AVL trees, and graphs.',
        'Algorithms: searching, sorting, recursion, two pointers, sliding window, binary search, tree traversal, and graph traversal.',
        'Problem solving: time complexity, space complexity, pattern-based problem solving, and coding challenges.',
        'Practice: beginner-to-advanced problems, hands-on Java coding, common interview questions, and problem-solving techniques.'
      ],
      projects: [
        'Solve a structured set of beginner-to-advanced coding problems',
        'Build and traverse linked lists, trees, and graphs in Java',
        'Apply patterns to common interview-oriented problems',
        'Practice timed coding challenges and explain your solutions'
      ],
      who: 'Students and developers preparing for coding interviews or looking to build a strong, practical foundation in problem solving with Java.',
      outcomes: 'Analyze solutions efficiently, choose the right data structure, solve interview problems systematically, and write clean Java implementations.',
      regularFee: '₹8,000',
      offerFee: '₹3,999'
    }
  };

  function openCourseDetails(courseName) {
    const course = courseDetails[courseName];
    if (!course) {
      return;
    }

    const listItems = (items) => items.map((item) => `<li>${item}</li>`).join('');
    document.getElementById('course-modal-body').innerHTML = `
      <span class="modal-course-kicker">Course overview</span>
      <h2 id="modal-course-title">${course.title}</h2>
      <p class="modal-course-subtitle">${course.subtitle}</p>
      <div class="modal-course-section">
        <h3>Complete syllabus &amp; what you will learn</h3>
        <p>${course.overview}</p>
        <ul>${listItems(course.learn)}</ul>
      </div>
      <div class="modal-course-section">
        <h3>Projects</h3>
        <ul>${listItems(course.projects)}</ul>
      </div>
      <div class="modal-course-section">
        <h3>Who should join</h3>
        <p>${course.who}</p>
      </div>
      <div class="modal-course-section">
        <h3>Learning outcomes</h3>
        <p>${course.outcomes}</p>
      </div>
      <div class="modal-course-footer">
        <a href="#contact"><button class="btn-primary" type="button" onclick="closeCourseDetails()">Reserve Your Seat</button></a>
      </div>
    `;

    document.getElementById('course-modal').hidden = false;
    document.body.classList.add('modal-open');
  }

  function closeCourseDetails() {
    document.getElementById('course-modal').hidden = true;
    document.body.classList.remove('modal-open');
  }

  function reserveSeat(courseName) {
    window.alert(`Seat reservation for ${courseName} will be connected to the payment link soon.`);
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !document.getElementById('course-modal').hidden) {
      closeCourseDetails();
    }
  });