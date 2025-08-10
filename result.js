// Research data array (same as in main.js)
const researchData = [
    {
        id: 1,
        title: "Evaluating the Disaster Preparedness and Risk Reduction in Ateneo de Zamboanga University Senior High School",
        author: "Maulana, Jazia; Perez, Marianjeanelle C.; Tinae, Cyril Josef A.; Tuahan, Sharifa Annikah",
        year: "2024",
        strand: "STEM",
        abstract: "Disasters such as earthquakes, floods, hurricanes, and pandemics can have devastating effects on communities, economies, and environments, often exacerbating existing vulnerabilities and hindering progress towards sustainable development.",
        keywords: ["disaster preparedness", "risk reduction", "pre-disaster need assessment", "disaster response team"],
        pdfPath: "Research_Archives/2024_STEM_MAULANA_-Evaluating-the-Disaster-Preparedness-and-Risk-Reduction-in-Ateneo-de-Zamboanga-University-Senior-High-School-U.pdf"
    },
    {
        id: 2,
        title: "Categorizing The Most Consumed Cafeteria Food of Senior High School Students in Ateneo de Zamboanga University Using the NOVA Food Classification System",
        author: "Asagara, Danika D.; Guerrero, Mikaela Mariele L.; Marcelo, Ma. Bleselle S.; Monjardin, Kabuñiang Buhawi M.",
        year: "2024",
        strand: "STEM",
        abstract: "Food processing contributes to the overall classification of critical perspectives in food science. The NOVA food classification system categorizes the level of processing each food undergoes into a range of 4 categories.",
        keywords: ["NOVA Food Classification", "nutrition", "students", "cafeteria", "food processing"],
        pdfPath: "Research_Archives/2024_STEM_ASAGARA_-Categorizing-The-Most-Consumed-Cafeteria-Food-of-Senior-High-School-Students-in-Ateneo-de-Zamboanga-University-Using-the-NOVA-Food-Classification-System.pdf"
    },
    {
        id: 3,
        title: "The Potency of Using Rice (Oryza sativa) Washed Water as an Alternative Irrigation for Pechay",
        author: "Capitanea, Angela Venie M.; Manuel, Antonio Louis A.; Pinong, Aljadid U.; Tura, Maria Allana F.",
        year: "2024",
        strand: "STEM",
        abstract: "With rising inflation, conserving for human needs including water becomes vital. Rice (Oryza sativa) washed water is one of the things humans tend to waste.",
        keywords: ["irrigation", "rice washed water", "pechay plant"],
        pdfPath: "Research_Archives/2024_STEM_CAPITANEA_-The-Potency-of-Using-Rice-Oryza-sativa-Washed-Water-as-an-Alternative-Irrigation-for-Pechay.pdf"
    },
    {
        id: 4,
        title: "The Detective Capabilities and Text Analysis Methods of Senior High School English Teachers from Ateneo de Zamboanga University when Faced with Chat GPT and Student Generated Text",
        author: "Arcillas, Christian Dave; Blando, Elisse Marie; Lopez, Llana; Pingay, Raianne",
        year: "2024",
        strand: "STEM",
        abstract: "As Chat GPT develops, it is also being used by more people to make tasks more convenient. Despite the advantages that Chat GPT brings there are still negative effects that can affect the learning capabilities of students.",
        keywords: ["AI detection", "Chat GPT-generated Text", "Student-generated Text", "Perspectives", "Text Analysis", "Capabilities"],
        pdfPath: "Research_Archives/2024_STEM_ARCILLAS_-The-Detective-Capabilities-and-Text-Analysis-Methods-of-Senior-High-School-English-Teachers-from-Ateneo-de-Zamboanga-University-when-Faced-with-Chat-GPT-and-Student-Generated-Text.pdf"
    },
    {
        id: 5,
        title: "Effects of Internet Connectivity on the COM 111 Learning and Teaching Experiences in Ateneo de Zamboanga University Senior High School",
        author: "Amora, Nixie Wynn F.; Hampac, Bea Jhane D.; Pastrano, Rafael Sebastien B.; Rajik, Riana V.",
        year: "2024",
        strand: "STEM",
        abstract: "Wi-Fi serves as a vital learning tool, providing access to diverse information and enhancing subject understanding. Despite fostering knowledge, dependency and unreliable information pose challenges.",
        keywords: ["Wireless Fidelity", "Students", "Teachers", "Institution", "Buildings", "Information Technology", "Effects", "Wi-Fi Connectivity"],
        pdfPath: "Research_Archives/2024_STEM_AMORA_-Effects-of-Internet-Connectivity-on-the-COM-111-Learning-and-Teaching-Experiences-in-Ateneo-de-Zamboanga-University-Senior-High-Schoo.pdf"
    },
    {
        id: 6,
        title: "Availability of School Clinic Supplies and Equipment: A Case Study in Ateneo de Zamboanga Senior High School Infirmary",
        author: "Cañete, Joshua Mari T.; Cuaresma, Annikha Sophia A.; Rabosa, Keziah Kristin D.; Panugalinog, Andy Carl E.",
        year: "2024",
        strand: "STEM",
        abstract: "A vital aspect of any institution's functionality are the infirmaries or clinics located within. Having a service in which it offers teachers and students in the school community primary or level 1 healthcare support.",
        keywords: ["Infirmary", "Level 1 healthcare", "Assess", "Availability", "Readiness", "DepEd Requirements"],
        pdfPath: "Research_Archives/2024_STEM_CAÑETE_Availability-of-School-Clinic-Supplies-and-Equipment-A-Case-Study-in-Ateneo-de-Zamboanga-Senior-High-School-Infirmary_.pdf"
    },
    {
        id: 7,
        title: "The Impact of Social Media on Political Awareness Among Senior High School Students in Zamboanga City",
        author: "Santos, Maria Clara; Reyes, Juan Carlos; Cruz, Ana Sofia; Torres, Miguel Angel",
        year: "2023",
        strand: "HUMMS",
        abstract: "Social media has become a powerful tool for political engagement and awareness. This study examines how various social media platforms influence the political knowledge and engagement of senior high school students.",
        keywords: ["social media", "political awareness", "students", "engagement", "digital citizenship"],
        pdfPath: "Research_Archives/2023_HUMMS_SANTOS_The-Impact-of-Social-Media-on-Political-Awareness.pdf"
    },
    {
        id: 8,
        title: "Cultural Identity and Language Preservation Among Indigenous Communities in Mindanao",
        author: "Lim, Gabrielle; Tan, Isabella; Wong, Samantha; Chen, Victoria",
        year: "2023",
        strand: "HUMMS",
        abstract: "This research explores the challenges and strategies for preserving indigenous languages and cultural identities in the diverse region of Mindanao, focusing on community-based initiatives and educational approaches.",
        keywords: ["cultural identity", "language preservation", "indigenous communities", "Mindanao", "cultural heritage"],
        pdfPath: "Research_Archives/2023_HUMMS_LIM_Cultural-Identity-and-Language-Preservation.pdf"
    },
    {
        id: 9,
        title: "Financial Literacy and Investment Awareness Among Senior High School Students in Zamboanga City",
        author: "Garcia, Carlos Miguel; Rodriguez, Sofia Isabel; Martinez, Diego Alejandro; Lopez, Camila Sofia",
        year: "2022",
        strand: "ABM",
        abstract: "Financial literacy is crucial for young people's future financial well-being. This study assesses the current level of financial knowledge and investment awareness among senior high school students.",
        keywords: ["financial literacy", "investment awareness", "students", "financial education", "money management"],
        pdfPath: "Research_Archives/2022_ABM_GARCIA_Financial-Literacy-and-Investment-Awareness.pdf"
    },
    {
        id: 10,
        title: "The Role of Entrepreneurship Education in Developing Business Skills Among Senior High School Students",
        author: "Fernandez, Maria Isabella; Gonzales, Jose Antonio; Ramirez, Ana Gabriela; Silva, Carlos Eduardo",
        year: "2022",
        strand: "ABM",
        abstract: "Entrepreneurship education plays a vital role in preparing students for future business endeavors. This research examines the effectiveness of entrepreneurship programs in developing essential business skills.",
        keywords: ["entrepreneurship education", "business skills", "students", "business development", "innovation"],
        pdfPath: "Research_Archives/2022_ABM_FERNANDEZ_The-Role-of-Entrepreneurship-Education.pdf"
    },
    {
        id: 11,
        title: "Digital Marketing Strategies and Consumer Behavior Among Young Adults in Zamboanga City",
        author: "Reyes, Patricia Anne; Santos, Michael Angelo; Cruz, Gabrielle Marie; Torres, Rafael Antonio",
        year: "2021",
        strand: "ABM",
        abstract: "Digital marketing has revolutionized how businesses reach consumers. This study analyzes the effectiveness of various digital marketing strategies and their impact on consumer behavior among young adults.",
        keywords: ["digital marketing", "consumer behavior", "young adults", "marketing strategies", "online engagement"],
        pdfPath: "Research_Archives/2021_ABM_REYES_Digital-Marketing-Strategies-and-Consumer-Behavior.pdf"
    },
    {
        id: 12,
        title: "The Influence of Literature on Moral Development Among Senior High School Students",
        author: "Kim, Ji-eun; Park, Min-seok; Lee, Soo-jin; Choi, Hye-jin",
        year: "2021",
        strand: "HUMMS",
        abstract: "Literature serves as a powerful tool for moral and character development. This research investigates how reading various literary works influences the moral reasoning and ethical development of students.",
        keywords: ["literature", "moral development", "students", "character education", "ethical reasoning"],
        pdfPath: "Research_Archives/2021_HUMMS_KIM_The-Influence-of-Literature-on-Moral-Development.pdf"
    }
];

// Global variables for filters
let currentFilters = {
    strand: '',
    year: '',
    sortBy: 'relevance'
};

document.addEventListener('DOMContentLoaded', function() {
    // Get search results from sessionStorage
    const searchResults = JSON.parse(sessionStorage.getItem('searchResults')) || [];
    const searchTerm = sessionStorage.getItem('searchTerm') || '';

    // Update search input with the search term
    const searchInput = document.getElementById('searchQuery');
    if (searchInput) {
        searchInput.value = searchTerm === 'All Research Papers' ? '010100' : searchTerm;
    }

    displayResults(searchResults, searchTerm);

    // Add event listener for form submission
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            performNewSearch();
        });
    }

    // Add event listener for Enter key in search box
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                performNewSearch();
            }
        });

        // Add autocomplete functionality
        searchInput.addEventListener('input', function() {
            showSearchSuggestions(this.value);
        });

        // Add keyboard navigation for search suggestions
        searchInput.addEventListener('keydown', function(event) {
            handleSearchInputKeydown(event);
        });

        // Hide suggestions when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.search-input-container')) {
                hideSearchSuggestions();
            }
        });
    }

    // Add filter event listeners
    const applyFiltersBtn = document.getElementById('applyFilters');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', applyFilters);
    }

    // Initialize filters from sessionStorage if available
    loadFiltersFromStorage();
});

// Function to show search suggestions
function showSearchSuggestions(query) {
    const suggestionsContainer = document.getElementById('searchSuggestions');
    if (!suggestionsContainer) return;

    if (query.length < 2) {
        hideSearchSuggestions();
        return;
    }

    const suggestions = generateSearchSuggestions(query);
    
    if (suggestions.length === 0) {
        hideSearchSuggestions();
        return;
    }

    suggestionsContainer.innerHTML = '';
    suggestions.forEach(suggestion => {
        const item = document.createElement('div');
        item.className = 'search-suggestion-item';
        item.textContent = suggestion;
        item.addEventListener('click', function() {
            document.getElementById('searchQuery').value = suggestion;
            hideSearchSuggestions();
            performNewSearch();
        });
        suggestionsContainer.appendChild(item);
    });

    suggestionsContainer.style.display = 'block';
}

// Function to hide search suggestions
function hideSearchSuggestions() {
    const suggestionsContainer = document.getElementById('searchSuggestions');
    if (suggestionsContainer) {
        suggestionsContainer.style.display = 'none';
    }
}

// Function to handle keyboard navigation in search suggestions
function handleSearchInputKeydown(event) {
    const suggestionsContainer = document.getElementById('searchSuggestions');
    if (!suggestionsContainer || suggestionsContainer.style.display === 'none') {
        return;
    }

    const suggestions = suggestionsContainer.querySelectorAll('.search-suggestion-item');
    const currentHighlighted = suggestionsContainer.querySelector('.search-suggestion-item.highlighted');
    let currentIndex = -1;

    if (currentHighlighted) {
        currentIndex = Array.from(suggestions).indexOf(currentHighlighted);
    }

    switch (event.key) {
        case 'ArrowDown':
            event.preventDefault();
            if (currentIndex < suggestions.length - 1) {
                if (currentHighlighted) currentHighlighted.classList.remove('highlighted');
                suggestions[currentIndex + 1].classList.add('highlighted');
            } else if (currentIndex === -1 && suggestions.length > 0) {
                suggestions[0].classList.add('highlighted');
            }
            break;
        case 'ArrowUp':
            event.preventDefault();
            if (currentIndex > 0) {
                if (currentHighlighted) currentHighlighted.classList.remove('highlighted');
                suggestions[currentIndex - 1].classList.add('highlighted');
            } else if (currentIndex === 0) {
                if (currentHighlighted) currentHighlighted.classList.remove('highlighted');
            }
            break;
        case 'Enter':
            if (currentHighlighted) {
                event.preventDefault();
                document.getElementById('searchQuery').value = currentHighlighted.textContent;
                hideSearchSuggestions();
                performNewSearch();
            }
            break;
        case 'Escape':
            hideSearchSuggestions();
            break;
    }
}

// Function to generate search suggestions
function generateSearchSuggestions(query) {
    const suggestions = new Set();
    const lowerQuery = query.toLowerCase();

    // Add title suggestions
    researchData.forEach(research => {
        if (research.title.toLowerCase().includes(lowerQuery)) {
            suggestions.add(research.title);
        }
    });

    // Add author suggestions
    researchData.forEach(research => {
        if (research.author.toLowerCase().includes(lowerQuery)) {
            suggestions.add(research.author);
        }
    });

    // Add strand suggestions
    researchData.forEach(research => {
        if (research.strand.toLowerCase().includes(lowerQuery)) {
            suggestions.add(research.strand);
        }
    });

    // Add keyword suggestions
    researchData.forEach(research => {
        research.keywords.forEach(keyword => {
            if (keyword.toLowerCase().includes(lowerQuery)) {
                suggestions.add(keyword);
            }
        });
    });

    // Convert to array and limit to 8 suggestions
    return Array.from(suggestions).slice(0, 8);
}

// Function to apply filters
function applyFilters() {
    const strandFilter = document.getElementById('strandFilter').value;
    const yearFilter = document.getElementById('yearFilter').value;
    const sortFilter = document.getElementById('sortFilter').value;

    currentFilters = {
        strand: strandFilter,
        year: yearFilter,
        sortBy: sortFilter
    };

    // Save filters to sessionStorage
    sessionStorage.setItem('searchFilters', JSON.stringify(currentFilters));

    // Get current search results and apply filters
    const currentResults = JSON.parse(sessionStorage.getItem('searchResults')) || researchData;
    const filteredResults = filterResults(currentResults);
    const searchTerm = sessionStorage.getItem('searchTerm') || 'All Research Papers';

    displayResults(filteredResults, searchTerm);
}

// Function to filter results based on current filters
function filterResults(results) {
    let filtered = [...results];

    // Apply strand filter
    if (currentFilters.strand) {
        filtered = filtered.filter(research => research.strand === currentFilters.strand);
    }

    // Apply year filter
    if (currentFilters.year) {
        filtered = filtered.filter(research => research.year === currentFilters.year);
    }

    // Apply sorting
    switch (currentFilters.sortBy) {
        case 'recent':
            filtered.sort((a, b) => new Date(b.year) - new Date(a.year));
            break;
        case 'oldest':
            filtered.sort((a, b) => new Date(a.year) - new Date(b.year));
            break;
        case 'newest':
            filtered.sort((a, b) => new Date(b.year) - new Date(a.year));
            break;
        case 'relevance':
        default:
            // Keep original order for relevance
            break;
    }

    return filtered;
}

// Function to load filters from sessionStorage
function loadFiltersFromStorage() {
    const savedFilters = sessionStorage.getItem('searchFilters');
    if (savedFilters) {
        currentFilters = JSON.parse(savedFilters);
        
        // Update UI elements
        const strandFilter = document.getElementById('strandFilter');
        const yearFilter = document.getElementById('yearFilter');
        const sortFilter = document.getElementById('sortFilter');

        if (strandFilter) strandFilter.value = currentFilters.strand;
        if (yearFilter) yearFilter.value = currentFilters.year;
        if (sortFilter) sortFilter.value = currentFilters.sortBy;
    }
}

// Function to display results
function displayResults(results, searchTerm) {
    const resultsContainer = document.querySelector('.results-container');
    if (!resultsContainer) return;

    // Clear existing results
    resultsContainer.innerHTML = '';

    // Add the heading
    const heading = document.createElement('h2');
    heading.textContent = searchTerm ? `Search Results for "${searchTerm}"` : 'Available Research Papers';
    resultsContainer.appendChild(heading);

    if (results.length === 0) {
        // Display no results message
        const noResults = document.createElement('div');
        noResults.className = 'no-results-message';
        noResults.innerHTML = 'No research papers found matching your search criteria.';
        resultsContainer.appendChild(noResults);
    } else {
        // Display each result
        results.forEach(research => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <h3><a href="main.html" onclick="redirectToMainPapers()">${research.title}</a></h3>
                <p><strong>Author(s):</strong> ${research.author}</p>
                <p><strong>Year:</strong> ${research.year}</p>
                <p><strong>Strand:</strong> ${research.strand}</p>
                <p><strong>Abstract:</strong> ${research.abstract}</p>
                <p><strong>Keywords:</strong> ${research.keywords.join(', ')}</p>
            `;
            resultsContainer.appendChild(resultItem);
        });
    }
}

// Function to redirect to main papers page
function redirectToMainPapers() {
    // Store the current search context for when user returns to main page
    sessionStorage.setItem('returnFromResults', 'true');
    window.location.href = 'main.html';
}

// Function to perform new search from results page
function performNewSearch() {
    const searchInput = document.getElementById('searchQuery');
    if (!searchInput) return;

    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        alert('Please enter a search term');
        return;
    }

    // Special case: if search term is "010100", show all results
    let filteredResults;
    let displayTerm;
    
    if (searchTerm === '010100') {
        filteredResults = [...researchData];
        displayTerm = 'All Research Papers';
    } else {
        // Filter research data based on new search term
        filteredResults = researchData.filter(research => {
            return research.title.toLowerCase().includes(searchTerm) ||
                   research.author.toLowerCase().includes(searchTerm) ||
                   research.strand.toLowerCase().includes(searchTerm) ||
                   research.year.toString().includes(searchTerm) ||
                   research.abstract.toLowerCase().includes(searchTerm) ||
                   research.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm));
        });
        displayTerm = searchTerm;
    }

    // Apply current filters to new search results
    filteredResults = filterResults(filteredResults);

    // Store new results in sessionStorage
    sessionStorage.setItem('searchTerm', displayTerm);
    sessionStorage.setItem('searchResults', JSON.stringify(filteredResults));

    // Display the new results immediately without reloading
    displayResults(filteredResults, displayTerm);
}

// Function to store research data and redirect to detail page (kept for compatibility)
function viewResearch(id) {
    // Get the research data from search results
    const searchResults = JSON.parse(sessionStorage.getItem('searchResults')) || [];
    const research = searchResults.find(r => r.id === id);
    
    if (research) {
        // Store the selected research data
        sessionStorage.setItem('selectedResearch', JSON.stringify(research));
        window.location.href = 'research-detail.html';
    }
}