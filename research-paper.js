// Research Paper Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters to identify which research paper to display
    const urlParams = new URLSearchParams(window.location.search);
    const paperId = urlParams.get('id');
    
    // Load research paper data
    if (paperId) {
        loadResearchPaper(paperId);
    } else {
        // If no ID provided, show default or redirect
        console.log('No research paper ID provided');
    }
    
    // Set up event listeners
    setupEventListeners();
});

function setupEventListeners() {
    // PDF viewer click event
    const pdfViewer = document.getElementById('pdfViewer');
    if (pdfViewer) {
        pdfViewer.addEventListener('click', function() {
            openPDFModal();
        });
    }
    
    // Download button
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            downloadPDF();
        });
    }
    
    // View full button
    const viewFullBtn = document.getElementById('viewFullBtn');
    if (viewFullBtn) {
        viewFullBtn.addEventListener('click', function() {
            openPDFModal();
        });
    }
    
    // Close modal button
    const closeModal = document.getElementById('closeModal');
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            closePDFModal();
        });
    }
    
    // Close modal when clicking outside
    const pdfModal = document.getElementById('pdfModal');
    if (pdfModal) {
        pdfModal.addEventListener('click', function(e) {
            if (e.target === pdfModal) {
                closePDFModal();
            }
        });
    }
}

function loadResearchPaper(paperId) {
    // Get research data from sessionStorage or use default data
    let researchData = JSON.parse(sessionStorage.getItem('researchData')) || [];
    
    // Find the specific research paper
    let paper = researchData.find(item => item.id === paperId);
    
    if (!paper) {
        // If not found in sessionStorage, try to get from the researchData array
        // This would typically come from search.js
        paper = getResearchPaperFromData(paperId);
    }
    
    if (paper) {
        displayResearchPaper(paper);
    } else {
        // Show error or default content
        displayDefaultContent();
    }
}

function getResearchPaperFromData(paperId) {
    // Try to get research data from the global researchData array (from search.js)
    if (window.researchData && Array.isArray(window.researchData)) {
        const paper = window.researchData.find(item => item.id == paperId);
        if (paper) {
            // Convert the data structure to match what the research paper page expects
            return {
                id: paper.id.toString(),
                title: paper.title,
                authors: paper.author,
                year: paper.year,
                strand: paper.strand,
                methodology: paper.methodology || 'Not specified',
                abstract: paper.abstract,
                keywords: paper.keywords,
                filePath: paper.pdfPath,
                fileSize: "2.5 MB", // Default values for now
                pageCount: "15",
                uploadDate: "January 15, 2024",
                category: "Research Study"
            };
        }
    }
    
    // Fallback to sample data if researchData is not available
    const samplePapers = [
        {
            id: "1",
            title: "Evaluating the Disaster Preparedness and Risk Reduction in Ateneo de Zamboanga University Senior High School",
            authors: "Maulana, Jazia; Perez, Marianjeanelle C.; Tinae, Cyril Josef A.; Tuahan, Sharifa Annikah",
            year: "2024",
            strand: "STEM",
            methodology: "Quantitative",
            abstract: "Disasters such as earthquakes, floods, hurricanes, and pandemics can have devastating effects on communities, economies, and environments, often exacerbating existing vulnerabilities and hindering progress towards sustainable development. This study evaluates the disaster preparedness and risk reduction measures in Ateneo de Zamboanga University Senior High School, examining current protocols, student and staff awareness, and the effectiveness of existing emergency response systems.",
            keywords: ["disaster preparedness", "risk reduction", "pre-disaster need assessment", "disaster response team"],
            filePath: "Research_Archives/2024_STEM_MAULANA_-Evaluating-the-Disaster-Preparedness-and-Risk-Reduction-in-Ateneo-de-Zamboanga-University-Senior-High-School-U.pdf",
            fileSize: "2.5 MB",
            pageCount: "15",
            uploadDate: "January 15, 2024",
            category: "Research Study"
        }
    ];
    
    return samplePapers.find(paper => paper.id === paperId) || samplePapers[0];
}

function displayResearchPaper(paper) {
    // Update page title
    document.title = `${paper.title} - AdZU SHS Digital Archive`;
    
    // Update paper header
    document.getElementById('paperTitle').textContent = paper.title;
    document.getElementById('paperAuthors').textContent = paper.authors;
    document.getElementById('paperYear').textContent = paper.year;
    document.getElementById('paperStrand').textContent = paper.strand;
    document.getElementById('paperMethodology').textContent = paper.methodology;
    
    // Update abstract
    document.getElementById('paperAbstract').textContent = paper.abstract;
    
    // Update keywords
    const keywordsContainer = document.getElementById('paperKeywords');
    keywordsContainer.innerHTML = '';
    paper.keywords.forEach(keyword => {
        const keywordTag = document.createElement('span');
        keywordTag.className = 'keyword-tag';
        keywordTag.textContent = keyword;
        keywordsContainer.appendChild(keywordTag);
    });
    
    // Update additional details
    document.getElementById('fileSize').textContent = paper.fileSize;
    document.getElementById('pageCount').textContent = paper.pageCount;
    document.getElementById('uploadDate').textContent = paper.uploadDate;
    document.getElementById('category').textContent = paper.category;
    
    // Update modal title
    document.getElementById('modalTitle').textContent = paper.title;
    
    // Store paper data for download functionality
    window.currentPaper = paper;
}

function displayDefaultContent() {
    // Display default content if no paper is found
    document.getElementById('paperTitle').textContent = 'Research Paper Not Found';
    document.getElementById('paperAbstract').textContent = 'The requested research paper could not be found. Please check the URL or return to the search results.';
}

function openPDFModal() {
    const modal = document.getElementById('pdfModal');
    const pdfFrame = document.getElementById('pdfFrame');
    
    if (window.currentPaper && window.currentPaper.filePath) {
        // Set the PDF source
        pdfFrame.src = window.currentPaper.filePath;
        modal.style.display = 'block';
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    } else {
        alert('PDF file not available for preview.');
    }
}

function closePDFModal() {
    const modal = document.getElementById('pdfModal');
    const pdfFrame = document.getElementById('pdfFrame');
    
    // Clear the PDF source
    pdfFrame.src = '';
    modal.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

function downloadPDF() {
    if (window.currentPaper && window.currentPaper.filePath) {
        // Create a temporary link element for download
        const link = document.createElement('a');
        link.href = window.currentPaper.filePath;
        link.download = `${window.currentPaper.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`;
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('PDF file not available for download.');
    }
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
    // Refresh the page content if needed
    const urlParams = new URLSearchParams(window.location.search);
    const paperId = urlParams.get('id');
    if (paperId) {
        loadResearchPaper(paperId);
    }
});

// Export functions for use in other scripts
window.researchPaperFunctions = {
    loadResearchPaper,
    openPDFModal,
    closePDFModal,
    downloadPDF
};
