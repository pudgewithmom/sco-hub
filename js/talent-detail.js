function renderTalentDetail(slug, basePath) {
  basePath = basePath || '';
  const container = document.getElementById('talent-detail');
  if (!container) return;

  const talent = TALENTS.find(t => t.slug === slug);
  if (!talent) {
    container.innerHTML = '<p class="empty-state">Профиль не найден.</p>';
    return;
  }

  document.title = talent.fullName + ' — SCO Youth Talent Hub';

  container.innerHTML = `
    <nav class="breadcrumb">
      <a href="${basePath}talents.html">← Все специалисты</a>
    </nav>

    <div class="detail-layout">
      <main class="detail-main">
        <div class="talent-header">
          <div class="talent-avatar talent-avatar--lg">${talent.fullName.split(' ').map(w => w[0]).join('')}</div>
          <div class="talent-header__info">
            <h1 class="detail-title">${talent.fullName}</h1>
            <p class="talent-location">📍 ${talent.city}, ${talent.country}</p>
            <p class="talent-spec">${talent.specialization}</p>
            <span class="badge badge--green">Готов к участию в проектах</span>
          </div>
        </div>

        <section class="detail-section">
          <h2>О себе</h2>
          <p>${talent.shortBio}</p>
        </section>

        <section class="detail-section">
          <h2>Образование</h2>
          <p>${talent.education}</p>
        </section>

        <section class="detail-section">
          <h2>Программы и мероприятия ШОС</h2>
          <ul class="simple-list">
            ${talent.programs.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </section>

        <section class="detail-section">
          <h2>Компетенции</h2>
          <div class="tags-block">${tagList(talent.skills)}</div>
        </section>

        <section class="detail-section">
          <h2>Языки</h2>
          <div class="tags-block">${tagList(talent.languages)}</div>
        </section>

        <section class="detail-section">
          <h2>Проектный опыт</h2>
          <ul class="simple-list">
            ${talent.projectExperience.map(e => `<li>${e}</li>`).join('')}
          </ul>
        </section>

        <section class="detail-section">
          <h2>Желаемые роли в проектах</h2>
          <div class="tags-block">${tagList(talent.desiredRoles)}</div>
        </section>

        <section class="detail-section">
          <h2>Формат участия</h2>
          <p>${talent.availability}</p>
        </section>

        <div class="detail-apply" id="invite">
          <button class="btn btn--primary btn--lg" id="open-invite-modal">Пригласить в проект</button>
        </div>
      </main>

      <aside class="detail-sidebar">
        <div class="sidebar-card">
          <h3>Информация</h3>
          <dl class="detail-list">
            <dt>Страна</dt><dd>${talent.country}</dd>
            <dt>Город</dt><dd>${talent.city}</dd>
            <dt>Формат</dt><dd>${talent.format}</dd>
            <dt>Специализация</dt><dd>${talent.specialization}</dd>
          </dl>
        </div>

        <div class="sidebar-card">
          <h3>Желаемые роли</h3>
          <div class="tags-block">${tagList(talent.desiredRoles)}</div>
        </div>

        <div class="sidebar-card sidebar-card--cta">
          <p>Хотите пригласить ${talent.fullName.split(' ')[0]} в свой проект?</p>
          <button class="btn btn--primary btn--full" id="open-invite-modal-2">Пригласить в проект</button>
        </div>
      </aside>
    </div>
  `;

  // Invite modal logic
  const modal = document.getElementById('invite-modal');
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  const form = document.getElementById('invite-form');

  function openModal() {
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  document.getElementById('open-invite-modal').addEventListener('click', openModal);
  const btn2 = document.getElementById('open-invite-modal-2');
  if (btn2) btn2.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      closeModal();
      // Show inline success
      const applyDiv = document.getElementById('invite');
      if (applyDiv) {
        applyDiv.innerHTML = `
          <div class="success-inline">
            ✅ Приглашение отправлено! В полноценной версии специалист получит уведомление в личном кабинете.
          </div>`;
      }
    });
  }

  // Mobile nav toggle
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('nav--open');
    });
  }
}
