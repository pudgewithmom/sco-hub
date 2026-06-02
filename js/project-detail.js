function renderProjectDetail(slug, basePath) {
  basePath = basePath || '';
  const container = document.getElementById('project-detail');
  if (!container) return;

  const project = PROJECTS.find(p => p.slug === slug);
  if (!project) {
    container.innerHTML = '<p class="empty-state">Project not found.</p>';
    return;
  }

  document.title = project.title + ' — SCO Youth Talent Hub';

  container.innerHTML = `
    <nav class="breadcrumb">
      <a href="${basePath}projects.html">← All Projects</a>
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
          <h2>About the Project</h2>
          <p>${project.fullDescription}</p>
        </section>

        <section class="detail-section">
          <h2>The Problem</h2>
          <p>${project.problem}</p>
        </section>

        <section class="detail-section">
          <h2>Project Goal</h2>
          <p>${project.goal}</p>
        </section>

        <section class="detail-section">
          <h2>Connection to the SCO Agenda</h2>
          <p>${project.scoConnection}</p>
        </section>

        <section class="detail-section">
          <h2>Expected Result</h2>
          <p>${project.expectedResult}</p>
        </section>

        <section class="detail-section">
          <h2>Required Team Roles</h2>
          <div class="roles-list">
            ${project.requiredRolesDetail
              ? project.requiredRolesDetail.map(r => `
                  <div class="role-item role-item--detailed">
                    <div class="role-item__header"><span class="role-icon">👤</span> <strong>${r.role}</strong></div>
                    <p class="role-item__desc">${r.description}</p>
                  </div>`).join('')
              : project.requiredRoles.map(r => `<div class="role-item"><span class="role-icon">👤</span> ${r}</div>`).join('')
            }
          </div>
        </section>

        <section class="detail-section">
          <h2>Required Skills</h2>
          <div class="tags-block">${tagList(project.requiredSkills)}</div>
        </section>

        <div class="detail-apply">
          <a href="${basePath}apply.html?project=${project.slug}" class="btn btn--primary btn--lg">Apply for this Project</a>
        </div>
      </main>

      <aside class="detail-sidebar">
        <div class="sidebar-card">
          <h3>Project Details</h3>
          <dl class="detail-list">
            <dt>Scope</dt><dd>${project.countryScope}</dd>
            <dt>Stage</dt><dd>${project.stage}</dd>
            <dt>Format</dt><dd>${project.format}</dd>
            <dt>Team deadline</dt><dd>${project.deadline}</dd>
            <dt>Open slots</dt><dd>${project.openSlots}</dd>
            <dt>Working language</dt><dd>${project.language}</dd>
          </dl>
        </div>

        <div class="sidebar-card">
          <h3>Project Leader</h3>
          <div class="leader-info">
            <div class="leader-avatar">${project.leaderName.split(' ').map(w => w[0]).join('')}</div>
            <div>
              <a href="${basePath}talents/${project.leaderSlug}.html" class="leader-name">${project.leaderName}</a>
              <p class="leader-role">${project.leaderRole}</p>
            </div>
          </div>
        </div>

        <div class="sidebar-card">
          <h3>Current Team</h3>
          ${project.teamMembers.map(m => `<div class="team-member">👤 ${m}</div>`).join('')}
          <p class="team-note">Looking for ${project.openSlots} more members</p>
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
