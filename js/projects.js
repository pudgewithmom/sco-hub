document.addEventListener('DOMContentLoaded', function () {
  const list = document.getElementById('projects-list');
  const meta = document.getElementById('catalog-meta');
  const selCategory = document.getElementById('filter-category');
  const selStage = document.getElementById('filter-stage');
  const selFormat = document.getElementById('filter-format');
  const btnReset = document.getElementById('reset-filters');

  function getFiltered() {
    const cat = selCategory.value.toLowerCase();
    const stage = selStage.value.toLowerCase();
    const fmt = selFormat.value.toLowerCase();
    return PROJECTS.filter(p => {
      if (cat && p.category.toLowerCase() !== cat) return false;
      if (stage && p.stage.toLowerCase() !== stage) return false;
      if (fmt && p.format.toLowerCase() !== fmt) return false;
      return true;
    });
  }

  function render() {
    const filtered = getFiltered();
    meta.textContent = `Projects found: ${filtered.length}`;
    list.innerHTML = filtered.length
      ? filtered.map(p => buildProjectCard(p, '')).join('')
      : '<p class="empty-state">No projects match the selected filters.</p>';
  }

  [selCategory, selStage, selFormat].forEach(el => el.addEventListener('change', render));
  btnReset.addEventListener('click', function () {
    selCategory.value = '';
    selStage.value = '';
    selFormat.value = '';
    render();
  });

  render();
});
