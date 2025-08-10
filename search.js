// Research data array with PDF file information
const researchData = [
    {
        id: 1,
        title: "Evaluating the Disaster Preparedness and Risk Reduction in Ateneo de Zamboanga University Senior High School",
        author: "Maulana, Jazia; Perez, Marianjeanelle C.; Tinae, Cyril Josef A.; Tuahan, Sharifa Annikah",
        year: "2024",
        strand: "STEM",
        methodology: "Quantitative",
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
        methodology: "Quantitative",
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
        methodology: "Experimental",
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
        methodology: "Mixed Methods",
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
        methodology: "Quantitative",
        abstract: "Wi-Fi serves as a vital learning tool, providing access to diverse information and enhancing subject understanding. Despite fostering knowledge, dependency and unreliable information pose challenges.",
        keywords: ["Wireless Fidelity", "Students", "Teachers", "Institution", "Buildings", "Information Technology", "Effects", "Wi-Fi Connectivity"],
        pdfPath: "Research_Archives/2024_STEM_AMORA_-Effects-of-Internet-Connectivity-on-the-COM-111-Learning-and-Teaching-Experiences-in-Ateneo-de-Zamboanga-University-Senior-High-Schoo.pdf"
    },
    {
        id: 6,
        title: "Availability of School Clinic Supplies and Equipment: A Case Study in Ateneo de Zamboanga Senior High School Infirmary",
        author: "Cañete, Joshua Mari T.; Cuaresma, Annikah Sophia A.; Rabosa, Keziah Kristin D.; Panugalinog, Andy Carl E.",
        year: "2024",
        strand: "STEM",
        methodology: "Case Study",
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
        methodology: "Quantitative",
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
        methodology: "Qualitative",
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
        methodology: "Quantitative",
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
        methodology: "Mixed Methods",
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
        methodology: "Quantitative",
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
        methodology: "Qualitative",
        abstract: "Literature serves as a powerful tool for moral and character development. This research investigates how reading various literary works influences the moral reasoning and ethical development of students.",
        keywords: ["literature", "moral development", "students", "character education", "ethical reasoning"],
        pdfPath: "Research_Archives/2021_HUMMS_KIM_The-Influence-of-Literature-on-Moral-Development.pdf"
    }
];

// Function to handle PDF file upload
function handlePDFUpload(file) {
    return new Promise((resolve, reject) => {
        if (!file || file.type !== 'application/pdf') {
            reject(new Error('Please upload a valid PDF file'));
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const pdfData = {
                name: file.name,
                type: file.type,
                lastModified: new Date(file.lastModified).toISOString(),
                content: e.target.result
            };
            resolve(pdfData);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Function to extract metadata from PDF
async function extractPDFMetadata(pdfData) {
    return {
        uploadDate: new Date().toISOString(),
        lastModified: pdfData.lastModified
    };
}

// Function to perform the search
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === '') {
        alert('Please enter a search term');
        return;
    }

    // Store the search term and filtered results
    sessionStorage.setItem('searchTerm', searchTerm);
    
    // Filter research data based on search term
    const filteredResults = researchData.filter(research => {
        return research.title.toLowerCase().includes(searchTerm) ||
               research.author.toLowerCase().includes(searchTerm) ||
               research.strand.toLowerCase().includes(searchTerm) ||
               research.year.toString().includes(searchTerm) ||
               research.abstract.toLowerCase().includes(searchTerm) ||
               research.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm));
    });

    // Store filtered results in sessionStorage
    sessionStorage.setItem('searchResults', JSON.stringify(filteredResults));

    // Redirect to results page
    window.location.href = 'results.html';
}

// Function to update search results on the results page
function updateSearchResults(results, searchTerm) {
    const resultsContainer = document.querySelector('.results-container');
    if (!resultsContainer) {
        console.error('Results container not found');
        return;
    }

    // Clear existing results
    resultsContainer.innerHTML = '';

    // Add the heading
    const heading = document.createElement('h2');
    heading.textContent = searchTerm === 'All Research Papers' ? 'All Research Papers' : `Search Results for "${searchTerm}"`;
    resultsContainer.appendChild(heading);

    if (results.length === 0) {
        // Display no results message
        const noResults = document.createElement('div');
        noResults.className = 'no-results-message';
        noResults.innerHTML = 'No research papers found matching your search.';
        resultsContainer.appendChild(noResults);
    } else {
        // Display each result
        results.forEach(research => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.onclick = function() {
                viewResearchPaper(research.id);
            };

            // Get first author's last name
            const firstAuthor = research.author.split(';')[0].trim();
            const authorLastName = firstAuthor.split(',')[0].trim();

            resultItem.innerHTML = `
                <h3 class="result-title">${research.title}</h3>
                <div class="result-meta">
                    <p><strong>Author(s):</strong> ${research.author}</p>
                    <p><strong>Year:</strong> ${research.year}</p>
                    <p><strong>Strand:</strong> ${research.strand}</p>
                    <p><strong>Methodology:</strong> ${research.methodology || 'Not specified'}</p>
                </div>
                <div class="result-abstract">
                    <p><strong>Abstract:</strong> ${research.abstract}</p>
                </div>
                <div class="keywords-section">
                    <strong>Keywords:</strong>
                    <div class="keyword-tags">
                        ${research.keywords.map(keyword => `<span class="keyword-tag">${keyword}</span>`).join('')}
                    </div>
                </div>
                <div class="file-preview-section">
                    <i class="fas fa-file-pdf"></i>
                    <span class="file-info">Click to view research paper</span>
                </div>
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

// Function to view a specific research paper
function viewResearchPaper(paperId) {
    // Store the paper ID in sessionStorage for the research paper page
    sessionStorage.setItem('currentPaperId', paperId);
    
    // Redirect to the research paper page
    window.location.href = `research-paper.html?id=${paperId}`;
}

// Function to perform new search from results page
function performNewSearch() {
    performSearch();
}

// Function to store research data and redirect to detail page (kept for compatibility)
function viewResearch(id) {
    const research = researchData.find(r => r.id === id);
    if (research) {
        sessionStorage.setItem('selectedResearch', JSON.stringify(research));
        window.location.href = 'research-detail.html';
    }
}

// Function to check if user is returning from results page
function checkReturnFromResults() {
    const returnFromResults = sessionStorage.getItem('returnFromResults');
    if (returnFromResults === 'true') {
        // Clear the flag
        sessionStorage.removeItem('returnFromResults');
        
        // Get the search context from results page
        const searchTerm = sessionStorage.getItem('searchTerm');
        const searchResults = JSON.parse(sessionStorage.getItem('searchResults')) || [];
        
        if (searchTerm && searchResults.length > 0) {
            // Update the search input to show what was searched
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.value = searchTerm === 'All Research Papers' ? '010100' : searchTerm;
            }
            
            // Display the results on the main page
            updateSearchResults(searchResults, searchTerm);
        }
    }
}

// Add event listener for Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            performSearch();
        });
    }
    
    // Check if returning from results page
    checkReturnFromResults();
}); 