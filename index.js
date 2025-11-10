     
     
        // Theme Toggle
        function toggleTheme() {
            document.body.classList.toggle('dark');
            const icon = document.getElementById('theme-icon');
            icon.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
            localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
        }

        // Load saved theme
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark');
            document.getElementById('theme-icon').textContent = '☀️';
        }

        // Smooth scroll
        function scrollTo(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        // Active taskbar button
        window.addEventListener('scroll', () => {
            const sections = ['home', 'about', 'projects', 'contact'];
            const scrollPos = window.scrollY + 100;

            sections.forEach(section => {
                const element = document.getElementById(section);
                const button = document.querySelector(`[data-section="${section}"]`);
                
                if (element && button) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    
                    if (scrollPos >= top && scrollPos < top + height) {
                        document.querySelectorAll('.taskbar-btn').forEach(btn => btn.classList.remove('active'));
                        button.classList.add('active');
                    }
                }
            });
        });

        // AI Assistant Toggle
        function toggleAI() {
            const panel = document.getElementById('aiPanel');
            panel.classList.toggle('active');
        }

        // AI Question Handler
        function answerQuestion(questionNum) {
            const questions = document.querySelectorAll('.ai-question');
            
            if (questionNum === 2) {
                // Scroll to projects and close panel
                setTimeout(() => {
                    scrollTo('projects');
                    toggleAI();
                }, 500);
            } else if (questionNum === 3) {
                // Scroll to contact and close panel
                setTimeout(() => {
                    scrollTo('contact');
                    toggleAI();
                }, 500);
            } else {
                // Just expand the answer for question 1
                questions[questionNum - 1].classList.toggle('expanded');
            }
        }

        
        
        // Animate skill bars on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.skill-progress').forEach(bar => {
                        bar.style.width = bar.style.width;
                    });
                }
            });
        });

        observer.observe(document.getElementById('skills'));
  