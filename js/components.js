/**
 * Shared UI component builders
 */

function tagList(items) {
  return items.map(i => `<span class="tag">${i}</span>`).join('');
}

function stageBadge(stage) {
  const map = {
    'поиск команды': 'badge--blue',
    'идея': 'badge--gray',
    'подготовка заявки': 'badge--orange',
    'заявка подана': 'badge--green',
    'проект в реализации': 'badge--teal',
    'проект завершен': 'badge--dark'
  };
  const cls = map[stage] || 'badge--gray';
  return `<span class="badge ${cls}">${stage}</span>`;
}

function buildProjectCard(p, basePath) {
  basePath = basePath || '';
  return `
    <article class="card">
      <div class="card__header">
        <h3 class="card__title"><a href="${basePath}projects/${p.slug}.html">${p.title}</a></h3>
        ${stageBadge(p.stage)}
      </div>
      <p class="card__desc">${p.shortDescription}</p>
      <div class="card__meta">
        <span class="card__meta-item">🌍 ${p.countryScope}</span>
        <span class="card__meta-item">📅 до ${p.deadline}</span>
        <span class="card__meta-item">👥 ${p.openSlots} мест</span>
      </div>
      <div class="card__tags">${tagList(p.requiredRoles.slice(0, 3))}</div>
      <div class="card__actions">
        <a href="${basePath}projects/${p.slug}.html" class="btn btn--outline btn--sm">Открыть проект</a>
        <a href="${basePath}apply.html?project=${p.slug}" class="btn btn--primary btn--sm">Откликнуться</a>
      </div>
    </article>
  `;
}

function buildTalentCard(t, basePath) {
  basePath = basePath || '';
  return `
    <article class="card">
      <div class="card__header">
        <div class="card__avatar">${t.fullName.split(' ').map(w => w[0]).join('')}</div>
        <div>
          <h3 class="card__title"><a href="${basePath}talents/${t.slug}.html">${t.fullName}</a></h3>
          <span class="card__sub">${t.country}, ${t.city}</span>
        </div>
      </div>
      <p class="card__spec">${t.specialization}</p>
      <div class="card__tags">${tagList(t.skills.slice(0, 3))}</div>
      <div class="card__langs">🗣 ${t.languages.slice(0, 2).join(' · ')}</div>
      <div class="card__actions">
        <a href="${basePath}talents/${t.slug}.html" class="btn btn--outline btn--sm">Открыть профиль</a>
        <a href="${basePath}talents/${t.slug}.html#invite" class="btn btn--primary btn--sm">Пригласить</a>
      </div>
    </article>
  `;
}

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('nav--open');
      burger.setAttribute('aria-expanded', nav.classList.contains('nav--open'));
    });
  }
});
