document.addEventListener('DOMContentLoaded', function () {
  const list = document.getElementById('talents-list');
  const meta = document.getElementById('catalog-meta');
  const selCountry = document.getElementById('filter-country');
  const selSkill = document.getElementById('filter-skill');
  const selLang = document.getElementById('filter-lang');
  const btnReset = document.getElementById('reset-filters');

  function getFiltered() {
    const country = selCountry.value.toLowerCase();
    const skill = selSkill.value.toLowerCase();
    const lang = selLang.value.toLowerCase();
    return TALENTS.filter(t => {
      if (country && t.country.toLowerCase() !== country) return false;
      if (skill && !t.skills.some(s => s.toLowerCase().includes(skill))) return false;
      if (lang && !t.languages.some(l => l.toLowerCase().includes(lang))) return false;
      return true;
    });
  }

  function render() {
    const filtered = getFiltered();
    meta.textContent = `Specialists found: ${filtered.length}`;
    list.innerHTML = filtered.length
      ? filtered.map(t => buildTalentCard(t, '')).join('')
      : '<p class="empty-state">No specialists match the selected filters.</p>';
  }

  [selCountry, selSkill, selLang].forEach(el => el.addEventListener('change', render));
  btnReset.addEventListener('click', function () {
    selCountry.value = '';
    selSkill.value = '';
    selLang.value = '';
    render();
  });

  render();
});
