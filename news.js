/* ===============================================
   TechnovateX - Advanced News Management System
   =============================================== */

// News System Configuration
const NewsSystem = {
    articlesPerPage: 12,
    currentPage: 1,
    totalPages: 1,
    totalArticles: 0,
    currentView: 'grid',
    filters: {
        category: 'all',
        date: 'all',
        search: ''
    },
    sortBy: 'date-desc',
    allArticles: [],
    filteredArticles: [],
    isLoading: false
};

// Sample News Data (In a real application, this would come from an API)
const sampleNewsData = [
    {
        id: 'ai-breakthrough-2024-001',
        title: 'Revolutionary AI Algorithm Breaks Computing Barriers',
        excerpt: 'Our latest neural network architecture achieves unprecedented performance in complex problem solving, opening new possibilities for artificial general intelligence.',
        content: 'Full article content would be here...',
        category: 'ai-innovation',
        date: '2024-01-15T10:30:00Z',
        author: 'Dr. Sarah Chen',
        readTime: 5,
        image: '🧠',
        tags: ['AI', 'Machine Learning', 'Neural Networks', 'Research'],
        featured: true,
        views: 2847
    },
    {
        id: 'iot-milestone-2024-002',
        title: 'IoT Network Scales to Million Connected Devices',
        excerpt: 'TechnovateX successfully deploys massive IoT infrastructure across three continents, setting new industry standards for scalability.',
        content: 'Full article content would be here...',
        category: 'iot-solutions',
        date: '2024-01-12T14:15:00Z',
        author: 'Michael Rodriguez',
        readTime: 4,
        image: '🌐',
        tags: ['IoT', 'Infrastructure', 'Scalability', 'Enterprise'],
        featured: false,
        views: 1923
    },
    {
        id: 'quantum-processor-2024-003',
        title: 'Quantum Computing Milestone: 1000-Qubit Processor',
        excerpt: 'Breakthrough in quantum coherence enables unprecedented computational capacity, bringing us closer to practical quantum advantage.',
        content: 'Full article content would be here...',
        category: 'quantum-computing',
        date: '2024-01-10T09:45:00Z',
        author: 'Prof. Alan Turing Jr.',
        readTime: 7,
        image: '⚛️',
        tags: ['Quantum Computing', 'Processors', 'Research', 'Innovation'],
        featured: true,
        views: 3156
    },
    {
        id: 'robotics-automation-2024-004',
        title: 'Autonomous Robotics Revolution in Manufacturing',
        excerpt: 'Self-navigating robots achieve 99.7% efficiency in industrial automation, revolutionizing production lines worldwide.',
        content: 'Full article content would be here...',
        category: 'robotics',
        date: '2024-01-08T16:20:00Z',
        author: 'Dr. Emma Watson',
        readTime: 6,
        image: '🤖',
        tags: ['Robotics', 'Automation', 'Manufacturing', 'Efficiency'],
        featured: false,
        views: 2134
    },
    {
        id: 'mobile-innovation-2024-005',
        title: 'Next-Gen Mobile Platform Launches Globally',
        excerpt: 'Revolutionary mobile development framework enables cross-platform applications with native performance and unified codebase.',
        content: 'Full article content would be here...',
        category: 'mobile-innovation',
        date: '2024-01-05T11:30:00Z',
        author: 'David Kim',
        readTime: 5,
        image: '📱',
        tags: ['Mobile', 'Development', 'Cross-platform', 'Framework'],
        featured: false,
        views: 1876
    },
    {
        id: 'cybersecurity-defense-2024-006',
        title: 'AI-Powered Cybersecurity Stops 10M Attacks',
        excerpt: 'Advanced threat detection system successfully prevents sophisticated cyber attacks using machine learning and behavioral analysis.',
        content: 'Full article content would be here...',
        category: 'cybersecurity',
        date: '2024-01-03T13:45:00Z',
        author: 'Jennifer Lee',
        readTime: 4,
        image: '🔒',
        tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Defense'],
        featured: true,
        views: 2789
    },
    {
        id: 'ai-healthcare-2024-007',
        title: 'AI Diagnostics Achieve 95% Accuracy in Medical Imaging',
        excerpt: 'Revolutionary computer vision system outperforms human specialists in detecting early-stage diseases through medical imaging analysis.',
        content: 'Full article content would be here...',
        category: 'ai-innovation',
        date: '2024-01-01T08:00:00Z',
        author: 'Dr. Maria Rodriguez',
        readTime: 6,
        image: '🏥',
        tags: ['AI', 'Healthcare', 'Medical Imaging', 'Diagnostics'],
        featured: false,
        views: 3421
    },
    {
        id: 'iot-smart-cities-2024-008',
        title: 'Smart City Initiative Reduces Energy Consumption by 40%',
        excerpt: 'Comprehensive IoT deployment in urban infrastructure demonstrates significant environmental and economic benefits.',
        content: 'Full article content would be here...',
        category: 'iot-solutions',
        date: '2023-12-28T15:30:00Z',
        author: 'Carlos Mendoza',
        readTime: 5,
        image: '🏙️',
        tags: ['IoT', 'Smart Cities', 'Energy', 'Sustainability'],
        featured: false,
        views: 2156
    },
    {
        id: 'quantum-encryption-2024-009',
        title: 'Quantum Encryption Secures Global Communications',
        excerpt: 'Breakthrough quantum key distribution protocol ensures unbreakable encryption for sensitive data transmission.',
        content: 'Full article content would be here...',
        category: 'quantum-computing',
        date: '2023-12-25T10:15:00Z',
        author: 'Dr. Alice Cooper',
        readTime: 7,
        image: '🔐',
        tags: ['Quantum Computing', 'Encryption', 'Security', 'Communications'],
        featured: true,
        views: 2967
    },
    {
        id: 'robotics-space-2024-010',
        title: 'Robotic Mission to Mars Achieves Historic Milestone',
        excerpt: 'Autonomous exploration robots successfully establish the first permanent research station on Mars, marking a new era in space exploration.',
        content: 'Full article content would be here...',
        category: 'robotics',
        date: '2023-12-22T14:45:00Z',
        author: 'Dr. Neil Armstrong III',
        readTime: 8,
        image: '🚀',
        tags: ['Robotics', 'Space Exploration', 'Mars', 'Autonomous Systems'],
        featured: true,
        views: 4523
    },
    {
        id: 'mobile-ar-2024-011',
        title: 'Augmented Reality Platform Transforms Mobile Experience',
        excerpt: 'Revolutionary AR framework enables immersive mobile applications with real-time object recognition and spatial computing.',
        content: 'Full article content would be here...',
        category: 'mobile-innovation',
        date: '2023-12-20T09:30:00Z',
        author: 'Lisa Chang',
        readTime: 5,
        image: '🥽',
        tags: ['Mobile', 'Augmented Reality', 'AR', 'Spatial Computing'],
        featured: false,
        views: 1987
    },
    {
        id: 'cybersecurity-blockchain-2024-012',
        title: 'Blockchain Security Protocol Prevents Data Breaches',
        excerpt: 'Innovative distributed ledger technology creates tamper-proof security infrastructure for enterprise data protection.',
        content: 'Full article content would be here...',
        category: 'cybersecurity',
        date: '2023-12-18T16:00:00Z',
        author: 'Robert Chen',
        readTime: 6,
        image: '⛓️',
        tags: ['Cybersecurity', 'Blockchain', 'Data Protection', 'Enterprise'],
        featured: false,
        views: 2345
    }
];

// Initialize News System
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('news-grid')) {
        initializeNewsSystem();
    }
});

function initializeNewsSystem() {
    // Initialize data
    NewsSystem.allArticles = [...sampleNewsData];
    NewsSystem.filteredArticles = [...sampleNewsData];
    NewsSystem.totalArticles = sampleNewsData.length;
    
    // Initialize UI elements
    initializeFilters();
    initializeSearch();
    initializeViewToggle();
    initializeSorting();
    initializePagination();
    
    // Render initial content
    applyFiltersAndSort();
    renderNewsGrid();
    updateResultsInfo();
    updatePagination();
    
    console.log('News system initialized with', NewsSystem.totalArticles, 'articles');
}

// Filter Management
function initializeFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const dateFilter = document.getElementById('date-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', handleCategoryFilter);
    }
    
    if (dateFilter) {
        dateFilter.addEventListener('change', handleDateFilter);
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
}

function handleCategoryFilter(event) {
    NewsSystem.filters.category = event.target.value;
    NewsSystem.currentPage = 1;
    applyFiltersAndSort();
    renderNewsGrid();
    updateResultsInfo();
    updatePagination();
    updateActiveFilters();
}

function handleDateFilter(event) {
    NewsSystem.filters.date = event.target.value;
    NewsSystem.currentPage = 1;
    applyFiltersAndSort();
    renderNewsGrid();
    updateResultsInfo();
    updatePagination();
    updateActiveFilters();
}

// Search Functionality
function initializeSearch() {
    const searchInput = document.getElementById('news-search');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }
}

function handleSearch() {
    const searchInput = document.getElementById('news-search');
    if (searchInput) {
        NewsSystem.filters.search = searchInput.value.trim();
        NewsSystem.currentPage = 1;
        applyFiltersAndSort();
        renderNewsGrid();
        updateResultsInfo();
        updatePagination();
        updateActiveFilters();
    }
}

// View Toggle
function initializeViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.getAttribute('data-view');
            
            // Update active state
            viewButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update view
            NewsSystem.currentView = view;
            updateNewsGridView();
        });
    });
}

function updateNewsGridView() {
    const newsGrid = document.getElementById('news-grid');
    if (newsGrid) {
        newsGrid.classList.remove('list-view', 'grid-view');
        newsGrid.classList.add(`${NewsSystem.currentView}-view`);
    }
}

// Sorting
function initializeSorting() {
    const sortSelect = document.getElementById('sort-select');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function(e) {
            NewsSystem.sortBy = e.target.value;
            applyFiltersAndSort();
            renderNewsGrid();
            updatePagination();
        });
    }
}

// Filter and Sort Logic
function applyFiltersAndSort() {
    showLoading();
    
    // Start with all articles
    let filtered = [...NewsSystem.allArticles];
    
    // Apply category filter
    if (NewsSystem.filters.category !== 'all') {
        filtered = filtered.filter(article => 
            article.category === NewsSystem.filters.category
        );
    }
    
    // Apply date filter
    if (NewsSystem.filters.date !== 'all') {
        const now = new Date();
        const filterDate = getFilterDate(NewsSystem.filters.date, now);
        
        filtered = filtered.filter(article => 
            new Date(article.date) >= filterDate
        );
    }
    
    // Apply search filter
    if (NewsSystem.filters.search) {
        const searchTerm = NewsSystem.filters.search.toLowerCase();
        filtered = filtered.filter(article =>
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            article.author.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply sorting
    filtered.sort(getSortFunction(NewsSystem.sortBy));
    
    NewsSystem.filteredArticles = filtered;
    NewsSystem.totalPages = Math.ceil(filtered.length / NewsSystem.articlesPerPage);
    
    // Ensure current page is valid
    if (NewsSystem.currentPage > NewsSystem.totalPages) {
        NewsSystem.currentPage = Math.max(1, NewsSystem.totalPages);
    }
    
    hideLoading();
}

function getFilterDate(filter, now) {
    switch (filter) {
        case 'today':
            return new Date(now.getFullYear(), now.getMonth(), now.getDate());
        case 'week':
            const weekAgo = new Date(now);
            weekAgo.setDate(now.getDate() - 7);
            return weekAgo;
        case 'month':
            const monthAgo = new Date(now);
            monthAgo.setMonth(now.getMonth() - 1);
            return monthAgo;
        case 'quarter':
            const quarterAgo = new Date(now);
            quarterAgo.setMonth(now.getMonth() - 3);
            return quarterAgo;
        default:
            return new Date(0); // Beginning of time
    }
}

function getSortFunction(sortBy) {
    switch (sortBy) {
        case 'date-desc':
            return (a, b) => new Date(b.date) - new Date(a.date);
        case 'date-asc':
            return (a, b) => new Date(a.date) - new Date(b.date);
        case 'title-asc':
            return (a, b) => a.title.localeCompare(b.title);
        case 'title-desc':
            return (a, b) => b.title.localeCompare(a.title);
        case 'category':
            return (a, b) => a.category.localeCompare(b.category);
        default:
            return (a, b) => new Date(b.date) - new Date(a.date);
    }
}

// Rendering Functions
function renderNewsGrid() {
    const newsGrid = document.getElementById('news-grid');
    const noResults = document.getElementById('no-results');
    
    if (!newsGrid) return;
    
    // Calculate pagination
    const startIndex = (NewsSystem.currentPage - 1) * NewsSystem.articlesPerPage;
    const endIndex = startIndex + NewsSystem.articlesPerPage;
    const articlesToShow = NewsSystem.filteredArticles.slice(startIndex, endIndex);
    
    // Clear grid
    newsGrid.innerHTML = '';
    
    if (articlesToShow.length === 0) {
        newsGrid.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
        return;
    }
    
    newsGrid.style.display = 'grid';
    if (noResults) noResults.style.display = 'none';
    
    // Render articles
    articlesToShow.forEach((article, index) => {
        const articleElement = createNewsCard(article);
        articleElement.style.animationDelay = `${index * 0.1}s`;
        newsGrid.appendChild(articleElement);
    });
    
    // Update view class
    updateNewsGridView();
}

function createNewsCard(article) {
    const card = document.createElement('article');
    card.className = 'news-card';
    card.setAttribute('data-category', article.category);
    
    const categoryName = getCategoryDisplayName(article.category);
    const formattedDate = formatDate(article.date);
    const readTimeText = `${article.readTime} min read`;
    
    card.innerHTML = `
        <div class="news-image">
            <div class="news-icon">${article.image}</div>
            ${article.featured ? '<div class="featured-badge">Featured</div>' : ''}
        </div>
        <div class="news-content">
            <div class="news-meta">
                <span class="news-category">${categoryName}</span>
                <span class="news-date">${formattedDate}</span>
            </div>
            <h3 class="news-title">
                <a href="news-article.html?id=${article.id}">${article.title}</a>
            </h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <div class="news-footer">
                <div class="news-author">
                    <span class="author-icon">👤</span>
                    <span class="author-name">${article.author}</span>
                </div>
                <div class="news-stats">
                    <span class="read-time">⏱️ ${readTimeText}</span>
                    <span class="view-count">👁️ ${formatNumber(article.views)}</span>
                </div>
            </div>
            <div class="news-tags">
                ${article.tags.map(tag => `<span class="news-tag">${tag}</span>`).join('')}
            </div>
            <div class="news-actions">
                <a href="news-article.html?id=${article.id}" class="read-more-btn">Read More →</a>
                <div class="share-buttons">
                    <button class="share-btn" onclick="shareArticle('${article.id}', 'twitter')" title="Share on Twitter">🐦</button>
                    <button class="share-btn" onclick="shareArticle('${article.id}', 'linkedin')" title="Share on LinkedIn">💼</button>
                    <button class="share-btn" onclick="shareArticle('${article.id}', 'copy')" title="Copy Link">🔗</button>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Pagination
function initializePagination() {
    // Event delegation for pagination buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('pagination-btn')) {
            e.preventDefault();
            const page = parseInt(e.target.getAttribute('data-page'));
            if (page && page !== NewsSystem.currentPage) {
                NewsSystem.currentPage = page;
                renderNewsGrid();
                updatePagination();
                scrollToTop();
            }
        }
    });
}

function updatePagination() {
    const paginationContainer = document.getElementById('pagination');
    const paginationInfo = document.getElementById('pagination-info');
    
    if (!paginationContainer) return;
    
    if (NewsSystem.totalPages <= 1) {
        paginationContainer.parentElement.style.display = 'none';
        return;
    }
    
    paginationContainer.parentElement.style.display = 'block';
    
    // Generate pagination buttons
    const buttons = [];
    
    // Previous button
    buttons.push(createPaginationButton(
        '← Previous',
        NewsSystem.currentPage - 1,
        NewsSystem.currentPage === 1
    ));
    
    // Page numbers
    const startPage = Math.max(1, NewsSystem.currentPage - 2);
    const endPage = Math.min(NewsSystem.totalPages, NewsSystem.currentPage + 2);
    
    if (startPage > 1) {
        buttons.push(createPaginationButton('1', 1));
        if (startPage > 2) {
            buttons.push('<span class="pagination-ellipsis">...</span>');
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        buttons.push(createPaginationButton(
            i.toString(),
            i,
            false,
            i === NewsSystem.currentPage
        ));
    }
    
    if (endPage < NewsSystem.totalPages) {
        if (endPage < NewsSystem.totalPages - 1) {
            buttons.push('<span class="pagination-ellipsis">...</span>');
        }
        buttons.push(createPaginationButton(NewsSystem.totalPages.toString(), NewsSystem.totalPages));
    }
    
    // Next button
    buttons.push(createPaginationButton(
        'Next →',
        NewsSystem.currentPage + 1,
        NewsSystem.currentPage === NewsSystem.totalPages
    ));
    
    paginationContainer.innerHTML = buttons.join('');
    
    // Update pagination info
    if (paginationInfo) {
        const startItem = (NewsSystem.currentPage - 1) * NewsSystem.articlesPerPage + 1;
        const endItem = Math.min(NewsSystem.currentPage * NewsSystem.articlesPerPage, NewsSystem.filteredArticles.length);
        paginationInfo.textContent = `Showing ${startItem}-${endItem} of ${NewsSystem.filteredArticles.length} articles (Page ${NewsSystem.currentPage} of ${NewsSystem.totalPages})`;
    }
}

function createPaginationButton(text, page, disabled = false, active = false) {
    if (disabled) {
        return `<span class="pagination-btn disabled">${text}</span>`;
    }
    
    const activeClass = active ? ' active' : '';
    return `<a href="#" class="pagination-btn${activeClass}" data-page="${page}">${text}</a>`;
}

// UI Updates
function updateResultsInfo() {
    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
        const count = NewsSystem.filteredArticles.length;
        const total = NewsSystem.allArticles.length;
        
        if (count === total) {
            resultsCount.textContent = `${total} articles`;
        } else {
            resultsCount.textContent = `${count} of ${total} articles`;
        }
    }
}

function updateActiveFilters() {
    const activeFiltersContainer = document.getElementById('active-filters');
    const filterTagsContainer = document.getElementById('filter-tags');
    
    if (!activeFiltersContainer || !filterTagsContainer) return;
    
    const activeTags = [];
    
    // Category filter
    if (NewsSystem.filters.category !== 'all') {
        activeTags.push({
            type: 'category',
            label: getCategoryDisplayName(NewsSystem.filters.category),
            value: NewsSystem.filters.category
        });
    }
    
    // Date filter
    if (NewsSystem.filters.date !== 'all') {
        activeTags.push({
            type: 'date',
            label: getDateDisplayName(NewsSystem.filters.date),
            value: NewsSystem.filters.date
        });
    }
    
    // Search filter
    if (NewsSystem.filters.search) {
        activeTags.push({
            type: 'search',
            label: `"${NewsSystem.filters.search}"`,
            value: NewsSystem.filters.search
        });
    }
    
    if (activeTags.length === 0) {
        activeFiltersContainer.style.display = 'none';
        return;
    }
    
    activeFiltersContainer.style.display = 'flex';
    
    filterTagsContainer.innerHTML = activeTags.map(tag => `
        <span class="filter-tag">
            ${tag.label}
            <span class="filter-tag-remove" onclick="removeFilter('${tag.type}', '${tag.value}')">×</span>
        </span>
    `).join('');
}

// Utility Functions
function removeFilter(type, value) {
    switch (type) {
        case 'category':
            NewsSystem.filters.category = 'all';
            document.getElementById('category-filter').value = 'all';
            break;
        case 'date':
            NewsSystem.filters.date = 'all';
            document.getElementById('date-filter').value = 'all';
            break;
        case 'search':
            NewsSystem.filters.search = '';
            document.getElementById('news-search').value = '';
            break;
    }
    
    NewsSystem.currentPage = 1;
    applyFiltersAndSort();
    renderNewsGrid();
    updateResultsInfo();
    updatePagination();
    updateActiveFilters();
}

function clearAllFilters() {
    // Reset filters
    NewsSystem.filters = {
        category: 'all',
        date: 'all',
        search: ''
    };
    
    // Reset UI elements
    const categoryFilter = document.getElementById('category-filter');
    const dateFilter = document.getElementById('date-filter');
    const searchInput = document.getElementById('news-search');
    
    if (categoryFilter) categoryFilter.value = 'all';
    if (dateFilter) dateFilter.value = 'all';
    if (searchInput) searchInput.value = '';
    
    NewsSystem.currentPage = 1;
    applyFiltersAndSort();
    renderNewsGrid();
    updateResultsInfo();
    updatePagination();
    updateActiveFilters();
}

function getCategoryDisplayName(category) {
    const categoryNames = {
        'all': 'All Categories',
        'ai-innovation': 'AI Innovation',
        'iot-solutions': 'IoT Solutions',
        'robotics': 'Robotics',
        'quantum-computing': 'Quantum Computing',
        'mobile-innovation': 'Mobile Innovation',
        'cybersecurity': 'Cybersecurity'
    };
    return categoryNames[category] || category;
}

function getDateDisplayName(date) {
    const dateNames = {
        'all': 'All Time',
        'today': 'Today',
        'week': 'This Week',
        'month': 'This Month',
        'quarter': 'This Quarter'
    };
    return dateNames[date] || date;
}

function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function formatNumber(num) {
    if (num >= 1000000) {
        return Math.floor(num / 1000000) + 'M';
    } else if (num >= 1000) {
        return Math.floor(num / 1000) + 'K';
    }
    return num.toString();
}

function showLoading() {
    const loadingState = document.getElementById('loading-state');
    const newsGrid = document.getElementById('news-grid');
    
    if (loadingState) loadingState.style.display = 'block';
    if (newsGrid) newsGrid.style.opacity = '0.5';
    
    NewsSystem.isLoading = true;
}

function hideLoading() {
    const loadingState = document.getElementById('loading-state');
    const newsGrid = document.getElementById('news-grid');
    
    setTimeout(() => {
        if (loadingState) loadingState.style.display = 'none';
        if (newsGrid) newsGrid.style.opacity = '1';
        NewsSystem.isLoading = false;
    }, 300); // Small delay for better UX
}

function scrollToTop() {
    const newsContent = document.querySelector('.news-content');
    if (newsContent) {
        newsContent.scrollIntoView({ behavior: 'smooth' });
    }
}

// Social Sharing
function shareArticle(articleId, platform) {
    const article = NewsSystem.allArticles.find(a => a.id === articleId);
    if (!article) return;
    
    const url = `${window.location.origin}/news-article.html?id=${articleId}`;
    const text = `Check out this article: ${article.title}`;
    
    switch (platform) {
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
            break;
        case 'linkedin':
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
            break;
        case 'copy':
            navigator.clipboard.writeText(url).then(() => {
                showNotification('Link copied to clipboard!', 'success');
            }).catch(() => {
                showNotification('Failed to copy link', 'error');
            });
            break;
    }
}

// Newsletter Integration (same as main script)
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const submitButton = this.querySelector('button[type="submit"]');
        const email = emailInput.value;
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        const originalText = submitButton.textContent;
        submitButton.innerHTML = '<span class="loading"></span> Subscribing...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            showNotification('Successfully subscribed to our newsletter!', 'success');
            emailInput.value = '';
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);
    });
}

// Initialize newsletter if on news page
if (document.getElementById('newsletter-form')) {
    document.addEventListener('DOMContentLoaded', initNewsletterForm);
}

// Debounce utility function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Notification function (reused from main script)
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    const styles = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 1rem;
            animation: slideIn 0.3s ease-out;
            max-width: 400px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        
        .notification-success { background-color: #28a745; }
        .notification-error { background-color: #dc3545; }
        .notification-info { background-color: #17a2b8; }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0;
            margin-left: auto;
        }
        
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideIn 0.3s ease-out reverse';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        NewsSystem,
        getCategoryDisplayName,
        getDateDisplayName,
        formatDate,
        formatNumber
    };
}