// News data simulation for high-volume content
const newsDatabase = [
    {
        id: 1,
        title: "Revolutionary AI Chip Breaks Performance Records",
        excerpt: "Our latest neural processing unit achieves unprecedented speeds, revolutionizing machine learning capabilities across industries with 10x performance improvements.",
        category: "ai",
        categoryName: "AI Innovation",
        date: "2025-07-25",
        readTime: "5 min",
        featured: true,
        trending: true,
        image: "ai-bg"
    },
    {
        id: 2,
        title: "Smart City Infrastructure Deployment Success",
        excerpt: "Successfully implemented intelligent traffic management systems across 15 major metropolitan areas, reducing congestion by 40%.",
        category: "iot",
        categoryName: "IoT Solutions",
        date: "2025-07-24",
        readTime: "3 min",
        featured: false,
        trending: true,
        image: "iot-bg"
    },
    {
        id: 3,
        title: "Autonomous Manufacturing Breakthrough",
        excerpt: "New robotic systems increase production efficiency by 300% while reducing energy consumption and operational costs significantly.",
        category: "robotics",
        categoryName: "Robotics",
        date: "2025-07-23",
        readTime: "4 min",
        featured: false,
        trending: false,
        image: "robotics-bg"
    },
    {
        id: 4,
        title: "Quantum Computing Goes Commercial",
        excerpt: "First commercially viable quantum computer deployed in Fortune 500 companies, solving complex optimization problems.",
        category: "quantum",
        categoryName: "Quantum Computing",
        date: "2025-07-22",
        readTime: "6 min",
        featured: false,
        trending: true,
        image: "quantum-bg"
    },
    {
        id: 5,
        title: "5G Network Coverage Reaches 95% Globally",
        excerpt: "TechDominion's infrastructure investments achieve milestone coverage, enabling unprecedented connectivity speeds worldwide.",
        category: "mobile",
        categoryName: "Mobile Innovation",
        date: "2025-07-21",
        readTime: "3 min",
        featured: false,
        trending: false,
        image: "neural-bg"
    },
    {
        id: 6,
        title: "Cybersecurity AI Prevents Million Dollar Breach",
        excerpt: "Advanced threat detection system identifies and neutralizes sophisticated cyber attack targeting financial institutions.",
        category: "security",
        categoryName: "Cybersecurity",
        date: "2025-07-20",
        readTime: "5 min",
        featured: false,
        trending: true,
        image: "grid-bg"
    },
    {
        id: 7,
        title: "Neural Network Achieves Human-Level Reasoning",
        excerpt: "Breakthrough in artificial general intelligence as neural network demonstrates complex reasoning and problem-solving abilities.",
        category: "ai",
        categoryName: "AI Innovation",
        date: "2025-07-19",
        readTime: "7 min",
        featured: false,
        trending: true,
        image: "ai-bg"
    },
    {
        id: 8,
        title: "IoT Sensors Revolutionize Agriculture",
        excerpt: "Smart farming solutions increase crop yields by 45% while reducing water consumption through precision agriculture.",
        category: "iot",
        categoryName: "IoT Solutions",
        date: "2025-07-18",
        readTime: "4 min",
        featured: false,
        trending: false,
        image: "iot-bg"
    },
    {
        id: 9,
        title: "Robotic Surgery Platform Achieves Perfect Record",
        excerpt: "Autonomous surgical system completes 1000th operation with 100% success rate, revolutionizing medical procedures.",
        category: "robotics",
        categoryName: "Robotics",
        date: "2025-07-17",
        readTime: "5 min",
        featured: false,
        trending: false,
        image: "robotics-bg"
    },
    {
        id: 10,
        title: "Quantum Encryption Secures Global Communications",
        excerpt: "Unbreakable quantum encryption protocol deployed across major telecommunications networks worldwide.",
        category: "quantum",
        categoryName: "Quantum Computing",
        date: "2025-07-16",
        readTime: "6 min",
        featured: false,
        trending: false,
        image: "quantum-bg"
    }
];

// Generate additional news articles for pagination
function generateAdditionalNews() {
    const additionalTitles = [
        "Edge Computing Reduces Latency by 90%",
        "Blockchain Integration Transforms Supply Chain",
        "Virtual Reality Training Improves Safety Protocols",
        "Machine Learning Optimizes Energy Distribution",
        "Autonomous Drones Deliver Medical Supplies",
        "Digital Twin Technology Predicts Equipment Failure",
        "Biometric Security System Enhances Data Protection",
        "Cloud Computing Scales to Exabyte Storage",
        "Artificial Intelligence Accelerates Drug Discovery",
        "Robotics Automation Increases Manufacturing Speed",
        "Internet of Things Connects Smart Buildings",
        "Quantum Sensors Detect Environmental Changes",
        "Mobile Technology Enables Remote Surgery",
        "Cybersecurity Framework Protects Critical Infrastructure",
        "Neural Networks Improve Weather Prediction Accuracy",
        "Smart Grids Optimize Renewable Energy Usage",
        "Autonomous Vehicles Reduce Traffic Accidents",
        "IoT Healthcare Monitoring Saves Lives",
        "AI-Powered Analytics Enhance Business Intelligence",
        "Robotic Process Automation Streamlines Operations"
    ];

    const categories = ['ai', 'iot', 'robotics', 'quantum', 'mobile', 'security'];
    const categoryNames = {
        'ai': 'AI Innovation',
        'iot': 'IoT Solutions',
        'robotics': 'Robotics',
        'quantum': 'Quantum Computing',
        'mobile': 'Mobile Innovation',
        'security': 'Cybersecurity'
    };

    const images = ['ai-bg', 'iot-bg', 'robotics-bg', 'quantum-bg', 'neural-bg', 'grid-bg'];

    for (let i = 0; i < additionalTitles.length; i++) {
        const category = categories[i % categories.length];
        const date = new Date();
        date.setDate(date.getDate() - (i + 11));
        
        newsDatabase.push({
            id: newsDatabase.length + 1,
            title: additionalTitles[i],
            excerpt: `Advanced technology implementation demonstrates significant improvements in ${categoryNames[category].toLowerCase()} capabilities and performance metrics.`,
            category: category,
            categoryName: categoryNames[category],
            date: date.toISOString().split('T')[0],
            readTime: `${Math.floor(Math.random() * 5) + 3} min`,
            featured: false,
            trending: Math.random() > 0.7,
            image: images[i % images.length]
        });
    }
}

// Initialize additional news
generateAdditionalNews();

class NewsManager {
    constructor() {
        this.allNews = [...newsDatabase];
        this.filteredNews = [...newsDatabase];
        this.currentPage = 1;
        this.articlesPerPage = 12;
        this.currentFilters = {
            category: 'all',
            time: 'all',
            sort: 'newest',
            search: ''
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadNews();
        this.updateNewsCount();
        
        // Hide skeleton loader after content loads
        setTimeout(() => {
            const skeleton = document.querySelector('.loading-skeleton');
            if (skeleton) {
                skeleton.style.display = 'none';
            }
        }, 1000);
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('news-search');
        const clearSearch = document.getElementById('clear-search');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.currentFilters.search = e.target.value;
                this.applyFilters();
                this.toggleClearButton();
            });
        }

        if (clearSearch) {
            clearSearch.addEventListener('click', () => {
                searchInput.value = '';
                this.currentFilters.search = '';
                this.applyFilters();
                this.toggleClearButton();
            });
        }

        // Filter dropdowns
        const categoryFilter = document.getElementById('category-filter');
        const timeFilter = document.getElementById('time-filter');
        const sortFilter = document.getElementById('sort-filter');

        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                this.currentFilters.category = e.target.value;
                this.applyFilters();
            });
        }

        if (timeFilter) {
            timeFilter.addEventListener('change', (e) => {
                this.currentFilters.time = e.target.value;
                this.applyFilters();
            });
        }

        if (sortFilter) {
            sortFilter.addEventListener('change', (e) => {
                this.currentFilters.sort = e.target.value;
                this.applyFilters();
            });
        }

        // View toggle
        const viewBtns = document.querySelectorAll('.view-btn');
        viewBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                viewBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.toggleView(btn.dataset.view);
            });
        });

        // Load more button
        const loadMoreBtn = document.getElementById('load-more');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadMoreArticles();
            });
        }
    }

    toggleClearButton() {
        const clearBtn = document.getElementById('clear-search');
        const searchInput = document.getElementById('news-search');
        
        if (clearBtn && searchInput) {
            clearBtn.style.display = searchInput.value ? 'block' : 'none';
        }
    }

    applyFilters() {
        this.filteredNews = this.allNews.filter(article => {
            // Category filter
            if (this.currentFilters.category !== 'all' && article.category !== this.currentFilters.category) {
                return false;
            }

            // Time filter
            if (this.currentFilters.time !== 'all') {
                const articleDate = new Date(article.date);
                const now = new Date();
                const daysDiff = Math.floor((now - articleDate) / (1000 * 60 * 60 * 24));

                switch (this.currentFilters.time) {
                    case 'today':
                        if (daysDiff > 0) return false;
                        break;
                    case 'week':
                        if (daysDiff > 7) return false;
                        break;
                    case 'month':
                        if (daysDiff > 30) return false;
                        break;
                }
            }

            // Search filter
            if (this.currentFilters.search) {
                const searchTerm = this.currentFilters.search.toLowerCase();
                const searchIn = `${article.title} ${article.excerpt} ${article.categoryName}`.toLowerCase();
                if (!searchIn.includes(searchTerm)) return false;
            }

            return true;
        });

        // Apply sorting
        this.filteredNews.sort((a, b) => {
            switch (this.currentFilters.sort) {
                case 'newest':
                    return new Date(b.date) - new Date(a.date);
                case 'oldest':
                    return new Date(a.date) - new Date(b.date);
                case 'popular':
                    return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
                default:
                    return 0;
            }
        });

        this.currentPage = 1;
        this.loadNews();
        this.updateNewsCount();
        this.updateActiveFilters();
    }

    updateActiveFilters() {
        const activeFilters = document.getElementById('active-filters');
        if (!activeFilters) return;

        activeFilters.innerHTML = '';

        // Add active filter tags
        if (this.currentFilters.category !== 'all') {
            this.addFilterTag(activeFilters, 'Category', this.getCategoryName(this.currentFilters.category), 'category');
        }

        if (this.currentFilters.time !== 'all') {
            this.addFilterTag(activeFilters, 'Time', this.getTimeName(this.currentFilters.time), 'time');
        }

        if (this.currentFilters.search) {
            this.addFilterTag(activeFilters, 'Search', this.currentFilters.search, 'search');
        }
    }

    addFilterTag(container, type, value, filterKey) {
        const tag = document.createElement('div');
        tag.className = 'filter-tag';
        tag.innerHTML = `
            ${type}: ${value}
            <button onclick="newsManager.removeFilter('${filterKey}')">
                <i class="fas fa-times"></i>
            </button>
        `;
        container.appendChild(tag);
    }

    removeFilter(filterKey) {
        switch (filterKey) {
            case 'category':
                this.currentFilters.category = 'all';
                document.getElementById('category-filter').value = 'all';
                break;
            case 'time':
                this.currentFilters.time = 'all';
                document.getElementById('time-filter').value = 'all';
                break;
            case 'search':
                this.currentFilters.search = '';
                document.getElementById('news-search').value = '';
                this.toggleClearButton();
                break;
        }
        this.applyFilters();
    }

    getCategoryName(category) {
        const names = {
            'ai': 'AI Innovation',
            'iot': 'IoT Solutions',
            'robotics': 'Robotics',
            'quantum': 'Quantum Computing',
            'mobile': 'Mobile Innovation',
            'security': 'Cybersecurity'
        };
        return names[category] || category;
    }

    getTimeName(time) {
        const names = {
            'today': 'Today',
            'week': 'This Week',
            'month': 'This Month'
        };
        return names[time] || time;
    }

    loadNews() {
        const newsGrid = document.getElementById('news-grid-full');
        if (!newsGrid) return;

        const startIndex = 0;
        const endIndex = this.currentPage * this.articlesPerPage;
        const articlesToShow = this.filteredNews.slice(startIndex, endIndex);

        newsGrid.innerHTML = articlesToShow.map(article => this.createNewsCard(article)).join('');

        // Update load more button
        this.updateLoadMoreButton();
    }

    loadMoreArticles() {
        this.currentPage++;
        this.loadNews();
    }

    updateLoadMoreButton() {
        const loadMoreBtn = document.getElementById('load-more');
        if (!loadMoreBtn) return;

        const totalShown = this.currentPage * this.articlesPerPage;
        const hasMore = totalShown < this.filteredNews.length;

        loadMoreBtn.style.display = hasMore ? 'inline-flex' : 'none';
        
        if (hasMore) {
            const remaining = this.filteredNews.length - totalShown;
            loadMoreBtn.innerHTML = `
                <i class="fas fa-plus"></i>
                Load More Articles (${remaining} remaining)
            `;
        }
    }

    create