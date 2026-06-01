document.addEventListener('DOMContentLoaded', function () {
  // Featured projects (first 3)
  const projContainer = document.getElementById('featured-projects');
  if (projContainer && typeof PROJECTS !== 'undefined') {
    projContainer.innerHTML = PROJECTS.slice(0, 3).map(p => buildProjectCard(p, '')).join('');
  }

  // Featured talents (first 3)
  const talentContainer = document.getElementById('featured-talents');
  if (talentContainer && typeof TALENTS !== 'undefined') {
    talentContainer.innerHTML = TALENTS.slice(0, 3).map(t => buildTalentCard(t, '')).join('');
  }
});
