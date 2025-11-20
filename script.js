// Combined JavaScript for Portfolio

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
    
    // Save theme preference
    const isLightMode = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const mobileToggle = document.getElementById('mobileToggle');
    
    if (navMenu && mobileToggle) {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
}

// Project Modal Functions
const projectData = {
    'Real-time Shop Manager App': {
        title: 'Real-time Shop Manager App',
        date: '2035-2035',
        image: 'https://github.com/user-attachments/assets/6d43cf2a-979a-460d-a10f-86f95accfd4d',
        description: 'Real-time shop management system jo inventory, sales, aur customer data ko efficiently manage karta hai.',
        technologies: ['Python', 'Flask', 'SQLite', 'JavaScript' ],
        features: ['Real-time Inventory Management', 'Sales Tracking', 'Customer Management'],
        liveDemo: 'https://real-time-shop-manager-app-pcbyedja9nfal97jazetec.streamlit.app/',
        sourceCode: 'https://github.com/FarazhussainAI250/Real-time-Shop-Manager-App'
    },
    'AI Medical Assistant': {
        title: 'AI Medical Assistant',
        date: '2025-2025',
        image: 'https://github.com/user-attachments/assets/8da72dbb-d807-4dff-9844-fe4111aa4c65',
        description: 'Professional-grade AI Medical Assistant with advanced medical knowledge and consultation capabilities.',
        technologies: ['Groq API', 'Python', 'Streamlit', 'APIs'],
        features: ['Medical Consultation', 'Symptom Analysis', 'Treatment Recommendations'],
        liveDemo: 'https://medical-ai-assistant-bushra.streamlit.app/',
        sourceCode: 'https://github.com/bushra-genai/Medical-AI-Assistant'
    },
    ' CV & Cover Letter Generator': {
        title: 'CV & Cover Letter Generator',
        date: '2025-2025',
        image: 'https://github.com/user-attachments/assets/8ea5da92-7e43-469a-bce0-f431c9c4679a',
        description: 'Professional-grade AI CV & Cover Letter Generator.',
        technologies: ['Groq API ', 'Python', 'Streamlit', 'APIs'],
        features: ['Professional Chat Interface', 'Custom Training', 'Multi-language Support'],
        liveDemo: 'https://cv-cover-letter-generator.streamlit.app/',
        sourceCode: 'https://github.com/bushra-genai/CV-Cover-Letter-Generator'
    },
    'Learn Wise AI Model': {
        title: 'Learn Wise AI Model',
        date: '2025-2025',
        image: 'https://github.com/user-attachments/assets/7edff376-9241-46de-ab4a-1bb9742324c8',
        description: 'Machine Learning model jo social interactions analyze karke friendship compatibility predict karta hai.',
        technologies: ['Scikit-learn', 'Pandas', 'NumPy', 'Flask'],
        features: ['Compatibility Analysis', 'Behavioral Pattern Recognition', 'Data Visualization'],
        liveDemo: 'https://learn-wise-ai-model-fn3rmkavx45sh4xyy5bnrm.streamlit.app/',
        sourceCode: 'https://github.com/FarazhussainAI250/Learn-Wise-AI-Model'
    },
    'Freelancer Hourly Rate Predictor': {
        title: 'Freelancer Hourly Rate Predictor',
        date: '2025-2025',
        image: 'https://github.com/user-attachments/assets/ad68e947-25e4-42e2-83b2-96b877bf9f92',
        description: 'AI-powered tool jo freelancer ke skills analyze karke optimal hourly rate suggest karta hai.',
        technologies: ['TensorFlow', 'Python', 'Pandas', 'Streamlit'],
        features: ['Market Analysis', 'Skill-based Pricing', 'Rate Optimization'],
        liveDemo: 'https://freelancer-hourly-rate-predictor-pjeusg3xzy4ywbrf8f7uru.streamlit.app/',
        sourceCode: 'https://github.com/FarazhussainAI250/Freelancer-Hourly-Rate-Predictor'
    },
    'Parking Recipt Generator': {
        title: 'Parking Receipt Generator',
        date: '2024-2024',
        image: 'https://github.com/user-attachments/assets/dff07ef5-0352-4d8f-8422-425f64f29d50',
        description: 'AI-powered parking receipt generator with smart templates.',
        technologies: ['Python', 'Streamlit', 'OpenAI API', 'PDF Generation'],
        features: ['Smart Templates', 'PDF Export', 'Real-time Preview'],
        liveDemo: 'https://parking-receipt-generator-sbzjlfbqs8aepyb6labt2q.streamlit.app/',
        sourceCode: 'https://github.com/FarazhussainAI250/Parking-Receipt-generator'
    },
    'Car Price Estimator': {
        title: 'Car Price Estimator',
        date: '2024-2024',
        image: 'https://github.com/user-attachments/assets/641217ad-f73e-49a2-b64e-46464b5cee96',
        description: 'Car price prediction system using machine learning algorithms.',
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
        features: ['Price Prediction', 'Market Analysis', 'Interactive Interface'],
        liveDemo: 'https://cars-price-prediction-app-d5rauucpwvw8ysfaljj6k4.streamlit.app/',
        sourceCode: 'https://github.com/FarazhussainAI250/Cars-Price-Prediction-App'
    },
    'WhatsApp Bulk Number Sender': {
        title: 'WhatsApp Bulk Number Sender',
        date: '2024-2024',
        image: 'https://github.com/user-attachments/assets/cfef59f2-30ce-4a66-b7fd-b94cdd93bb2b',
        description: 'Automated WhatsApp messaging tool for bulk message sending.',
        technologies: ['Python', 'Selenium', 'WhatsApp Web API', 'Tkinter'],
        features: ['Bulk Message Sending', 'Contact Management', 'Message Scheduling'],
        liveDemo: 'https://cbgeyx55thgwl6xjvb9zip.streamlit.app/',
        sourceCode: 'https://github.com/FarazhussainAI250/-WhatsApp-Bulk-Number-Sender'
    }
};

function openProjectPage(projectId) {
    const project = projectData[projectId];
    if (!project) return;
    
    // Update modal content
    document.getElementById('projectImage').src = project.image;
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectDate').textContent = project.date;
    document.getElementById('projectDesc').textContent = project.description;
    
    // Update technologies
    const techContainer = document.getElementById('projectTechnologies');
    techContainer.innerHTML = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    // Update features
    const featuresContainer = document.getElementById('projectFeatures');
    featuresContainer.innerHTML = project.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    // Update button links
    document.getElementById('liveDemoBtn').href = project.liveDemo || '#';
    document.getElementById('sourceCodeBtn').href = project.sourceCode || '#';
    
    // Show modal
    document.getElementById('projectModal').style.display = 'block';
}

function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Counter Animation
window.addEventListener('scroll', function() {
    const counters = document.querySelectorAll('.counter');
    const statsSection = document.querySelector('.stats');
    
    if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            counters.forEach(counter => {
                if (!counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    const target = parseInt(counter.getAttribute('data-target'));
                    let count = 0;
                    const increment = target / 30;
                    
                    const timer = setInterval(() => {
                        count += increment;
                        if (count >= target) {
                            counter.textContent = target + '+';
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.ceil(count) + '+';
                        }
                    }, 50);
                }
            });
        }
    }
});

// Testimonials auto-rotation
let currentTestimonialIndex = 0;

function currentTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial-circle');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    
    testimonials.forEach(t => t.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    if (testimonials[index - 1]) testimonials[index - 1].classList.add('active');
    if (dots[index - 1]) dots[index - 1].classList.add('active');
    
    currentTestimonialIndex = index - 1;
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
    
    // Auto-rotate testimonials every 3 seconds
    setInterval(() => {
        const testimonials = document.querySelectorAll('.testimonial-circle');
        const dots = document.querySelectorAll('.testimonial-dots .dot');
        
        if (testimonials.length > 0) {
            testimonials.forEach(t => t.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
            
            testimonials[currentTestimonialIndex].classList.add('active');
            dots[currentTestimonialIndex].classList.add('active');
        }
    }, 3000);
    
    // Setup nav links to close mobile menu
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navMenu = document.getElementById('navMenu');
            const mobileToggle = document.getElementById('mobileToggle');
            if (navMenu && mobileToggle) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Setup mobile toggle click handler
    const mobileToggle = document.getElementById('mobileToggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
        mobileToggle.addEventListener('touchstart', function(e) {
            e.preventDefault();
            toggleMobileMenu();
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('projectModal');
        if (e.target === modal) {
            closeProjectModal();
        }
    });
});


