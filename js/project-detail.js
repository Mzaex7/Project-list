import projects from './projects.js';

document.addEventListener('DOMContentLoaded', () => {
    const detailContent = document.getElementById('project-detail-content');
    if (!detailContent) return;

    // Get project ID from URL query param
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    const project = projects.find(p => p.id === projectId);

    if (!project) {
        detailContent.innerHTML = `<p>Project not found.</p>`;
        return;
    }

    // Update Page Title
    document.title = `${project.title} | Max Zeitler`;

    function getProjectIcon(project) {
        // Same logic as main.js
        const text = (project.title + " " + project.tags.join(" ")).toLowerCase();
        if (text.includes('data') || text.includes('analysis')) return '<i class="fas fa-chart-bar"></i>';
        if (text.includes('game') || text.includes('scrabble')) return '<i class="fas fa-gamepad"></i>';
        if (text.includes('database') || text.includes('sql')) return '<i class="fas fa-database"></i>';
        if (text.includes('ai') || text.includes('gpt') || text.includes('llm') || text.includes('learning')) return '<i class="fas fa-brain"></i>';
        if (text.includes('react') || text.includes('web')) return '<i class="fas fa-globe"></i>';
        if (text.includes('robot') || text.includes('twin')) return '<i class="fas fa-robot"></i>';
        if (text.includes('security')) return '<i class="fas fa-shield-alt"></i>';
        return '<i class="fas fa-code"></i>';
    }

    const iconHtml = getProjectIcon(project);

    // Generate Highlights HTML
    let highlightsHtml = '';
    if (project.highlights && project.highlights.length > 0) {
        highlightsHtml = `
            <div class="tech-highlights">
                <h3>Technical Highlights:</h3>
                <ul class="tech-list">
                    ${project.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Generate Footer Links
    let footerLinks = '';

    if (project.github) {
        footerLinks += `
            <a href="${project.github}" class="detail-footer-icon" title="View Source on GitHub" target="_blank">
                <i class="fab fa-github"></i>
            </a>
        `;
    }

    footerLinks += `
        <a href="mailto:zeitler.max04@gmail.com?subject=Inquiry about ${project.title}" class="detail-footer-icon" title="Contact about this project">
            <i class="fas fa-envelope"></i>
        </a>
    `;

    footerLinks += `
        <a href="CV_Max_Zeitler.pdf" class="detail-footer-icon" title="View Resume" target="_blank">
            <i class="fas fa-file-alt"></i>
        </a>
    `;

    // Render Template - Structure changed to Flexbox container (div instead of header to avoid CSS conflict)
    detailContent.innerHTML = `
        <div class="detail-header">
            <div class="detail-icon-container">
                ${iconHtml}
            </div>
            <div class="detail-info">
                <h1 class="detail-title">${project.title}</h1>
                <p class="detail-subtitle">${project.description}</p>
                <div class="detail-tags">
                    ${project.tags.map(tag => `<span class="detail-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>

        <section class="detail-content">
            <p>${project.detailedDescription || project.description}</p>
        </section>

        ${highlightsHtml}

        <div class="detail-footer">
             <div class="detail-footer-links">
                ${footerLinks}
             </div>
        </div>
    `;
});
