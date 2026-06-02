function renderTalentDetail(slug, basePath) {
  basePath = basePath || '';
  const container = document.getElementById('talent-detail');
  if (!container) return;

  const talent = TALENTS.find(t => t.slug === slug);
  if (!talent) {
    container.innerHTML = '<p class="empty-state">Profile not found.</p>';
    return;
  }

  document.title = talent.fullName + ' — SCO Youth Talent Hub';

  // Avatar: photo or initials
  const avatarHtml = talent.photo
    ? `<img src="${basePath}${talent.photo}" alt="${talent.fullName}" class="talent-avatar--photo talent-avatar--lg" />`
    : `<div class="talent-avatar talent-avatar--lg">${talent.fullName.split(' ').map(w => w[0]).join('')}</div>`;

  // Education block
  const eduHtml = Array.isArray(talent.education)
    ? talent.education.map(e => `
        <div class="edu-item">
          <div class="edu-institution">${e.institution}</div>
          <div class="edu-degree">${e.degree}</div>
        </div>`).join('')
    : `<p>${talent.education}</p>`;

  // Additional education
  const addEduHtml = talent.additionalEducation && talent.additionalEducation.length
    ? `<section class="detail-section">
        <h2>Additional Education</h2>
        <ul class="simple-list">${talent.additionalEducation.map(a => `<li>${a}</li>`).join('')}</ul>
      </section>`
    : '';

  // Experience block
  const expHtml = talent.experience && talent.experience.length
    ? `<section class="detail-section">
        <h2>Work Experience</h2>
        <div class="exp-list">
          ${talent.experience.map(e => `
            <div class="exp-item">
              <div class="exp-role">${e.role}</div>
              <div class="exp-org">${e.org}</div>
              <div class="exp-period">${e.period}</div>
            </div>`).join('')}
        </div>
      </section>`
    : '';

  // Awards block
  const awardsHtml = talent.awards && talent.awards.length
    ? `<section class="detail-section">
        <h2>Awards &amp; Honours</h2>
        <ul class="simple-list">${talent.awards.map(a => `<li>${a}</li>`).join('')}</ul>
      </section>`
    : '';

  // Memberships
  const membHtml = talent.memberships && talent.memberships.length
    ? `<section class="detail-section">
        <h2>Licensing &amp; Memberships</h2>
        <ul class="simple-list">${talent.memberships.map(m => `<li>${m}</li>`).join('')}</ul>
      </section>`
    : '';

  // Project interest
  const interestHtml = talent.projectInterest
    ? `<section class="detail-section">
        <h2>Projects I Would Like to Participate In</h2>
        <p>${talent.projectInterest}</p>
      </section>`
    : '';

  container.innerHTML = `
    <nav class="breadcrumb">
      <a href="${basePath}talents.html">← All Specialists</a>
    </nav>

    <div class="detail-layout">
      <main class="detail-main">
        <div class="talent-header">
          ${avatarHtml}
          <div class="talent-header__info">
            <h1 class="detail-title">${talent.fullName}</h1>
            <p class="talent-location">📍 ${talent.city}, ${talent.country}</p>
            <p class="talent-spec">${talent.specialization}</p>
            <span class="badge badge--green">Available for projects</span>
          </div>
        </div>

        <section class="detail-section">
          <h2>About</h2>
          <p>${talent.shortBio}</p>
        </section>

        <section class="detail-section">
          <h2>Education</h2>
          <div class="edu-list">${eduHtml}</div>
        </section>

        ${addEduHtml}

        ${expHtml}

        <section class="detail-section">
          <h2>SCO Programmes &amp; Events</h2>
          <ul class="simple-list">
            ${talent.programs.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </section>

        <section class="detail-section">
          <h2>Skills</h2>
          <div class="tags-block">${tagList(talent.skills)}</div>
        </section>

        <section class="detail-section">
          <h2>Languages</h2>
          <div class="tags-block">${tagList(talent.languages)}</div>
        </section>

        ${interestHtml}

        ${awardsHtml}

        ${membHtml}

        <section class="detail-section">
          <h2>Participation Format</h2>
          <p>${talent.availability}</p>
        </section>

        <div class="detail-apply" id="invite">
          <button class="btn btn--primary btn--lg" id="open-invite-modal">Invite to a Project</button>
        </div>
      </main>

      <aside class="detail-sidebar">
        <div class="sidebar-card">
          <h3>Details</h3>
          <dl class="detail-list">
            <dt>Country</dt><dd>${talent.country}</dd>
            <dt>City</dt><dd>${talent.city}</dd>
            <dt>Format</dt><dd>${talent.format}</dd>
            <dt>Specialisation</dt><dd>${talent.specialization}</dd>
          </dl>
        </div>

        <div class="sidebar-card">
          <h3>Desired Roles</h3>
          <div class="tags-block">${tagList(talent.desiredRoles)}</div>
        </div>

        <div class="sidebar-card">
          <h3>Languages</h3>
          <div class="tags-block">${tagList(talent.languages)}</div>
        </div>

        <div class="sidebar-card sidebar-card--cta">
          <p>Want to invite ${talent.fullName.split(' ')[0]} to your project?</p>
          <button class="btn btn--primary btn--full" id="open-invite-modal-2">Invite to a Project</button>
        </div>
      </aside>
    </div>
  `;

  // Invite modal logic
  const modal = document.getElementById('invite-modal');
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  const form = document.getElementById('invite-form');

  function openModal() { modal.hidden = false; document.body.style.overflow = 'hidden'; }
  function closeModal() { modal.hidden = true; document.body.style.overflow = ''; }

  document.getElementById('open-invite-modal').addEventListener('click', openModal);
  const btn2 = document.getElementById('open-invite-modal-2');
  if (btn2) btn2.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      closeModal();
      const applyDiv = document.getElementById('invite');
      if (applyDiv) {
        applyDiv.innerHTML = `<div class="success-inline">✅ Invitation sent! In the full version the specialist will receive a notification in their dashboard.</div>`;
      }
    });
  }

  // Mobile nav toggle
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('nav--open'));
  }
}
