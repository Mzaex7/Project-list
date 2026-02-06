import projects from './projects.js';

document.addEventListener('DOMContentLoaded', () => {
    const projectGrid = document.getElementById('project-grid');

    if (!projectGrid) return;

    // Check if we should limit the number of projects (e.g. for Home page)
    const limit = projectGrid.dataset.limit ? parseInt(projectGrid.dataset.limit) : projects.length;

    // Check if we are on the Projects page (List view) or Home page (Grid view)
    const isListView = projectGrid.classList.contains('project-list');

    function getProjectIcon(project) {
        // Simple heuristic to pick an icon based on title/tags
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

    function renderProjects() {
        projectGrid.innerHTML = '';

        const projectsToRender = projects.slice(0, limit);

        projectsToRender.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';

            const iconHtml = getProjectIcon(project);

            // Create tags HTML
            const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

            // Build links section (Only for Projects Page / List View)
            let linksHtml = '';

            if (isListView) {
                // Determine GitHub display text (User/Repo-Slug)
                const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                const repoName = `Mzaex7/${slug}`;

                if (project.github || project.learnMore) {
                    linksHtml += '<div class="project-links-container">';

                    if (project.github) {
                        linksHtml += `
                            <a href="${project.github}" class="github-repo-link" target="_blank">
                                <i class="fab fa-github"></i>
                                <span>${repoName}</span>
                                <i class="fas fa-arrow-up-right-from-square" style="font-size: 0.8em; margin-left: auto;"></i>
                            </a>
                        `;
                    }

                    if (project.learnMore) {
                        linksHtml += `
                            <a href="project-detail.html?id=${project.id}" class="learn-more-link">
                                Read More <i class="fas fa-arrow-right"></i>
                            </a>
                        `;
                    }

                    linksHtml += '</div>';
                }
            }

            card.innerHTML = `
                <!-- Thumbnail wrapper (Visible in List View, Hidden in Grid View via CSS) -->
                <div class="project-thumbnail">
                    ${iconHtml}
                </div>

                <div class="card-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description}</p>
                    
                    ${linksHtml}
                    
                    <div class="project-tags">
                        ${tagsHtml}
                    </div>
                </div>
            `;

            // Hover effect logic
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });

            projectGrid.appendChild(card);
        });
    }

    renderProjects();
});
