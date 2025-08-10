document.addEventListener('DOMContentLoaded', function() {
    // Get the selected research data from sessionStorage
    const researchData = JSON.parse(sessionStorage.getItem('selectedResearch'));
    
    if (!researchData) {
        // If no research data is found, redirect back to results page
        window.location.href = 'results.html';
        return;
    }

    // Update the page content with research details
    document.getElementById('research-title').textContent = researchData.title;
    document.getElementById('research-author').textContent = researchData.author;
    document.getElementById('research-year').textContent = researchData.year;
    document.getElementById('research-strand').textContent = researchData.strand;
    document.getElementById('research-abstract').textContent = researchData.abstract;
    
    // Update keywords
    const keywordsContainer = document.getElementById('research-keywords');
    keywordsContainer.innerHTML = researchData.keywords.map(keyword => 
        `<span class="keyword">${keyword}</span>`
    ).join('');

    // Set up the PDF viewer
    const pdfViewer = document.getElementById('pdf-viewer');
    if (pdfViewer) {
        // Create an iframe to display the PDF
        const iframe = document.createElement('iframe');
        iframe.src = researchData.pdfPath;
        iframe.width = '100%';
        iframe.height = '600px';
        iframe.style.border = 'none';
        pdfViewer.appendChild(iframe);
    }

    // Set up the download button
    const downloadButton = document.getElementById('download-button');
    if (downloadButton) {
        downloadButton.onclick = function() {
            // Create a temporary link to download the PDF
            const link = document.createElement('a');
            link.href = researchData.pdfPath;
            link.download = researchData.pdfPath.split('/').pop();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    }

    // Set up the back button
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.onclick = function() {
            window.location.href = 'results.html';
        };
    }
}); 