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

// Video Project Modal Functions
const videoProjectData = {
    'AI Automation Project': {
        title: 'AI Automation Project',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Advanced AI automation system jo machine learning algorithms use karke complex tasks ko automate karta hai. Is project me natural language processing aur computer vision ka istemal kiya gaya hai.',
        technologies: ['Python', 'TensorFlow', 'OpenAI API', 'Flask', 'React'],
        features: [
            'Intelligent task automation with ML',
            'Natural language processing capabilities',
            'Computer vision integration',
            'Real-time data processing',
            'Scalable architecture'
        ]
    },
    'Web Development Showcase': {
        title: 'Web Development Showcase',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Full-stack web development project jo modern technologies aur best practices ka istemal karta hai. Responsive design aur user-friendly interface ke sath complete web solution.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
        features: [
            'Responsive and modern UI design',
            'RESTful API integration',
            'User authentication and authorization',
            'Real-time updates with WebSocket',
            'Database optimization'
        ]
    },
    'Data Science Analytics': {
        title: 'Data Science Analytics',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Advanced data analysis aur visualization project jo complex datasets ko analyze karke meaningful insights provide karta hai. Machine learning models aur statistical analysis ka combination.',
        technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
        features: [
            'Advanced data visualization',
            'Predictive analytics with ML',
            'Statistical analysis tools',
            'Interactive dashboards',
            'Data cleaning and preprocessing'
        ]
    },
    'Mobile App Development': {
        title: 'Mobile App Development',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Cross-platform mobile application jo native features aur smooth performance provide karta hai. Modern UI/UX design ke sath complete mobile solution.',
        technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript', 'Expo'],
        features: [
            'Cross-platform compatibility',
            'Native device features integration',
            'Offline functionality',
            'Push notifications',
            'Smooth animations and transitions'
        ]
    },
    'E-commerce Platform': {
        title: 'E-commerce Platform',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Complete online shopping platform jo secure payment gateway aur inventory management ke sath full e-commerce solution provide karta hai.',
        technologies: ['Next.js', 'Stripe API', 'PostgreSQL', 'Redis', 'AWS'],
        features: [
            'Secure payment processing',
            'Real-time inventory management',
            'User authentication and profiles',
            'Order tracking system',
            'Admin dashboard with analytics'
        ]
    },
    'Blockchain Solution': {
        title: 'Blockchain Solution',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Decentralized application jo smart contracts aur blockchain technology use karke secure aur transparent transactions provide karta hai.',
        technologies: ['Solidity', 'Web3.js', 'Ethereum', 'IPFS', 'MetaMask'],
        features: [
            'Smart contract integration',
            'Decentralized data storage',
            'Cryptocurrency transactions',
            'NFT marketplace functionality',
            'Multi-wallet support'
        ]
    }
};

function openVideoProject(projectId) {
    const project = videoProjectData[projectId];
    if (!project) return;
    
    // Update modal content
    document.getElementById('videoProjectTitle').textContent = project.title;
    document.getElementById('videoProjectFrame').src = project.videoUrl;
    document.getElementById('videoProjectDesc').textContent = project.description;
    
    // Update technologies
    const techContainer = document.getElementById('videoProjectTechnologies');
    techContainer.innerHTML = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    // Update features
    const featuresContainer = document.getElementById('videoProjectFeatures');
    featuresContainer.innerHTML = project.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    // Show modal
    document.getElementById('videoProjectModal').style.display = 'block';
}

function closeVideoProjectModal() {
    const modal = document.getElementById('videoProjectModal');
    const videoFrame = document.getElementById('videoProjectFrame');
    
    // Stop video by clearing src
    videoFrame.src = '';
    modal.style.display = 'none';
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
});// Testimonials auto-rotation
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
        const videoModal = document.getElementById('videoProjectModal');
        
        if (e.target === modal) {
            closeProjectModal();
        }
        
        if (e.target === videoModal) {
            closeVideoProjectModal();
        }
    });
    
    // Add hover effect to video project cards
    const videoCards = document.querySelectorAll('.video-project-card');
    videoCards.forEach(card => {
        const overlay = card.querySelector('.video-overlay');
        if (overlay) {
            card.addEventListener('mouseenter', () => {
                overlay.style.opacity = '1';
            });
            card.addEventListener('mouseleave', () => {
                overlay.style.opacity = '0';
            });
        }
    });
});
