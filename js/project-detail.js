function renderProjectDetail(slug, basePath) {
  basePath = basePath || '';
  const container = document.getElementById('project-detail');
  if (!container) return;

  const project = PROJECTS.find(p => p.slug === slug);
  if (!project) {
    container.innerHTML = '<p class="empty-state">Проект не найден.</p>';
    return;
  }

  document.title = project.title + ' — SCO Youth Talent Hub';

  container.innerHTML = `
    <nav class="breadcrumb">
      <a href="${basePath}projects.html">← Все проекты</a>
    </nav>

    <div class="detail-layout">
      <main class="detail-main">
        <div class="detail-header">
          <div class="detail-header__top">
            <span class="badge badge--category">${project.category}</span>
            ${stageBadge(project.stage)}
          </div>
          <h1 class="detail-title">${project.title}</h1>
          <p class="detail-lead">${project.shortDescription}</p>
        </div>

        <section class="detail-section">
          <h2>О проекте</h2>
          <p>${project.fullDescription}</p>
        </section>

        <section class="detail-section">
          <h2>Проблема</h2>
          <p>${project.problem}</p>
        </section>

        <section class="detail-section">
          <h2>Цель проекта</h2>
          <p>${project.goal}</p>
        </section>

        <section class="detail-section">
          <h2>Связь с повесткой ШОС</h2>
          <p>${project.scoConnection}</p>
        </section>

        <section class="detail-section">
          <h2>Ожидаемый результат</h2>
          <p>${project.expectedResult}</p>
        </section>

        <section class="detail-section">
          <h2>Требуемые роли в команде</h2>
          <div class="roles-list">
            ${project.requiredRoles.map(r => `<div class="role-item"><span class="role-icon">👤</span> ${r}</div>`).join('')}
          </div>
        </section>

        <section class="detail-section">
          <h2>Необходимые компетенции</h2>
          <div class="tags-block">${tagList(project.requiredSkills)}</div>
        </section>

        <div class="detail-apply">
          <a href="${basePath}apply.html?project=${project.slug}" class="btn btn--primary btn--lg">Откликнуться на проект</a>
        </div>
      </main>

      <aside class="detail-sidebar">
        <div class="sidebar-card">
          <h3>Детали проекта</h3>
          <dl class="detail-list">
            <dt>Охват</dt><dd>${project.countryScope}</dd>
            <dt>Стадия</dt><dd>${project.stage}</dd>
            <dt>Формат</dt><dd>${project.format}</dd>
            <dt>Дедлайн набора</dt><dd>${project.deadline}</dd>
            <dt>Открытых мест</dt><dd>${project.openSlots}</dd>
            <dt>Язык проекта</dt><dd>${project.language}</dd>
          </dl>
        </div>

        <div class="sidebar-card">
          <h3>Лидер проекта</h3>
          <div class="leader-info">
            <div class="leader-avatar">${project.leaderName.split(' ').map(w => w[0]).join('')}</div>
            <div>
              <a href="${basePath}talents/${project.leaderSlug}.html" class="leader-name">${project.leaderName}</a>
              <p class="leader-role">${project.leaderRole}</p>
            </div>
          </div>
        </div>

        <div class="sidebar-card">
          <h3>Текущая команда</h3>
          ${project.teamMembers.map(m => `<div class="team-member">👤 ${m}</div>`).join('')}
          <p class="team-note">Ищем ещё ${project.openSlots} участников</p>
        </div>
      </aside>
    </div>
  `;

  // Mobile nav toggle
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('nav--open');
    });
  }
}
