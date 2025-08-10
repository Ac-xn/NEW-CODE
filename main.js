// Research data array with PDF file information
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
    }
];

// Function to perform the search
function performSearch() {
    const searchInput = document.querySelector('input[type="text"]');
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === '') {
        alert('Please enter a search term');
        return;
    }

    // Special case: if search term is "010100", show all results
    let filteredResults;
    let displayTerm;
    
    if (searchTerm === '010100') {
        filteredResults = [...researchData]; // Create a copy of all research data
        displayTerm = 'All Research Papers';
    } else {
        // Filter research data based on search term
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

    // Store the search term and filtered results
    sessionStorage.setItem('searchTerm', displayTerm);
    sessionStorage.setItem('searchResults', JSON.stringify(filteredResults));

    // Redirect to results page
    window.location.href = 'results.html';
}

// Add event listener for the search button
document.querySelector('.search-button, button').addEventListener('click', performSearch);

// Add event listener for Enter key
document.querySelector('input[type="text"]').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});