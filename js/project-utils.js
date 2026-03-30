export function getProjectIcon(project) {
    const tags = Array.isArray(project.tags) ? project.tags.join(' ') : '';
    const text = `${project.title || ''} ${tags}`.toLowerCase();

    if (text.includes('data') || text.includes('analysis')) return '<i class="fas fa-chart-bar"></i>';
    if (text.includes('game') || text.includes('scrabble')) return '<i class="fas fa-gamepad"></i>';
    if (text.includes('database') || text.includes('sql')) return '<i class="fas fa-database"></i>';
    if (text.includes('coffee') || text.includes('brew') || text.includes('espresso')) return '<i class="fas fa-mug-hot"></i>';
    if (text.includes('ai') || text.includes('gpt') || text.includes('llm') || text.includes('learning')) return '<i class="fas fa-brain"></i>';
    if (text.includes('react') || text.includes('web')) return '<i class="fas fa-globe"></i>';
    if (text.includes('robot') || text.includes('twin')) return '<i class="fas fa-robot"></i>';
    if (text.includes('mobile') || text.includes('expo') || text.includes('react native')) return '<i class="fas fa-mobile-alt"></i>';
    if (text.includes('hdfs') || text.includes('catalog') || text.includes('duckdb')) return '<i class="fas fa-server"></i>';

    return '<i class="fas fa-code"></i>';
}
