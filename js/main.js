import projects from './projects.js';
import { getProjectIcon } from './project-utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const projectGrid = document.getElementById('project-grid');
    const projectGroups = document.getElementById('project-groups');

    const groupConfig = [
        {
            key: 'ml-ai',
            id: 'group-ml-ai',
            title: 'ML & AI Systems',
            intro: 'Benchmarking, model operations, and AI platform strategy.'
        },
        {
            key: 'products',
            id: 'group-products',
            title: 'Product & UX Engineering',
            intro: 'User-facing applications across mobile and web.'
        },
        {
            key: 'research',
            id: 'group-research',
            title: 'Research & Data Science',
            intro: 'Scientific studies, analytics, and explainability.'
        },
        {
            key: 'platform',
            id: 'group-platform',
            title: 'Platform & Infrastructure',
            intro: 'Data systems, architecture, and enterprise tooling.'
        }
    ];

    function getProjectGroupKey(project) {
        const text = (project.title + ' ' + project.description + ' ' + project.tags.join(' ')).toLowerCase();

        if (text.includes('llm') || text.includes('benchmark') || text.includes('mcp') || text.includes('robot') || text.includes('inference') || text.includes('ai')) {
            return 'ml-ai';
        }
        if (text.includes('react') || text.includes('next.js') || text.includes('mobile') || text.includes('frontend') || text.includes('app')) {
            return 'products';
        }
        if (text.includes('xai') || text.includes('science') || text.includes('analysis') || text.includes('streamlit') || text.includes('research')) {
            return 'research';
        }
        return 'platform';
    }

    function buildProjectCard(project, showLinks) {
        const card = document.createElement('article');
        card.className = 'project-card';

        const iconHtml = getProjectIcon(project);
        const tagsHtml = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('');

        let linksHtml = '';
        if (showLinks) {
            const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            const repoName = `Mzaex7/${slug}`;

            if (project.github || project.liveUrl || project.learnMore) {
                linksHtml += '<div class="project-links-container">';

                if (project.liveUrl) {
                    linksHtml += `
                        <a href="${project.liveUrl}" class="github-repo-link" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-globe"></i>
                            <span>${project.liveUrl.replace(/^https?:\/\//, '')}</span>
                            <i class="fas fa-arrow-up-right-from-square" style="font-size: 0.8em; margin-left: auto;"></i>
                        </a>
                    `;
                }

                if (project.github) {
                    linksHtml += `
                        <a href="${project.github}" class="github-repo-link" target="_blank" rel="noopener noreferrer">
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

        card.addEventListener('click', (e) => {
            if (e.target.closest('a')) return;
            window.location.href = `project-detail.html?id=${project.id}`;
        });

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        return card;
    }

    function renderHomeProjects() {
        if (!projectGrid) return;
        const limit = projectGrid.dataset.limit ? parseInt(projectGrid.dataset.limit, 10) : projects.length;
        const projectsToRender = projects.slice(0, limit);

        projectGrid.innerHTML = '';
        projectsToRender.forEach((project) => {
            projectGrid.appendChild(buildProjectCard(project, false));
        });
    }

    function renderGroupedProjects() {
        if (!projectGroups) return;

        const grouped = {
            'ml-ai': [],
            products: [],
            research: [],
            platform: []
        };

        projects.forEach((project) => {
            const key = getProjectGroupKey(project);
            grouped[key].push(project);
        });

        projectGroups.innerHTML = '';

        groupConfig.forEach((group) => {
            if (!grouped[group.key].length) return;

            const section = document.createElement('section');
            section.className = 'project-group';
            section.id = group.id;

            const header = document.createElement('div');
            header.className = 'project-group-header';
            header.innerHTML = `
                <span class="group-chip">${group.title}</span>
                <p class="group-intro">${group.intro}</p>
            `;

            const list = document.createElement('div');
            list.className = 'project-list';

            grouped[group.key].forEach((project) => {
                list.appendChild(buildProjectCard(project, true));
            });

            section.appendChild(header);
            section.appendChild(list);
            projectGroups.appendChild(section);
        });
    }

    function setupProjectsSectionProgress() {
        if (!projectGroups) return;

        const jumpNav = document.querySelector('.project-jump-nav');
        if (!jumpNav) return;

        const jumpLinks = Array.from(jumpNav.querySelectorAll('.jump-link'));
        if (!jumpLinks.length) return;

        const sections = jumpLinks
            .map((link) => {
                const href = link.getAttribute('href') || '';
                const id = href.startsWith('#') ? href.slice(1) : href;
                const section = id ? document.getElementById(id) : null;
                return section ? { link, section } : null;
            })
            .filter(Boolean);

        if (!sections.length) return;

        const progressTrack = document.createElement('div');
        progressTrack.className = 'jump-progress-track';

        const progressFill = document.createElement('div');
        progressFill.className = 'jump-progress-fill';

        progressTrack.appendChild(progressFill);
        jumpNav.appendChild(progressTrack);
        let ticking = false;

        const setActiveLink = (activeItem) => {
            sections.forEach(({ link }) => {
                const isActive = link === activeItem.link;
                link.classList.toggle('active', isActive);
                if (isActive) {
                    link.setAttribute('aria-current', 'true');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        };

        const update = () => {
            const navHeight = jumpNav.offsetHeight;
            const stickyTop = parseFloat(window.getComputedStyle(jumpNav).top) || 0;
            const anchorLine = window.scrollY + stickyTop + navHeight + 14;

            let activeIndex = 0;
            for (let i = 0; i < sections.length; i += 1) {
                if (sections[i].section.offsetTop <= anchorLine) {
                    activeIndex = i;
                } else {
                    break;
                }
            }

            const activeItem = sections[activeIndex];
            const sectionStart = Math.max(0, activeItem.section.offsetTop - (stickyTop + navHeight + 14));
            const nextSection = sections[activeIndex + 1] ? sections[activeIndex + 1].section : null;
            const sectionEnd = nextSection
                ? Math.max(sectionStart + 1, nextSection.offsetTop - (stickyTop + navHeight + 14))
                : Math.max(sectionStart + 1, document.documentElement.scrollHeight - window.innerHeight);

            const ratio = Math.min(1, Math.max(0, (window.scrollY - sectionStart) / (sectionEnd - sectionStart)));
            progressFill.style.transform = `scaleX(${ratio})`;

            setActiveLink(activeItem);
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        update();
    }

    renderHomeProjects();
    renderGroupedProjects();
    setupProjectsSectionProgress();
});
