document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('project');
  const nameEl = document.getElementById('apply-project-name');

  if (slug && typeof PROJECTS !== 'undefined') {
    const project = PROJECTS.find(p => p.slug === slug);
    if (project && nameEl) {
      nameEl.textContent = project.title;
      const roleSelect = document.getElementById('role');
      if (roleSelect && project.requiredRoles) {
        roleSelect.innerHTML = '<option value="">Select a role</option>' +
          project.requiredRoles.map(r => `<option value="${r}">${r}</option>`).join('');
      }
    }
  } else if (nameEl) {
    nameEl.textContent = 'Select a project';
  }

  const form = document.getElementById('apply-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const role = document.getElementById('role').value;
      const message = document.getElementById('message').value.trim();
      const consent = document.getElementById('consent').checked;

      if (!name || !email || !role || !message || !consent) {
        alert('Please fill in all required fields and give your consent.');
        return;
      }

      const application = {
        projectSlug: slug,
        name, email,
        telegram: document.getElementById('telegram').value.trim(),
        role, message,
        timestamp: new Date().toISOString()
      };
      try {
        const existing = JSON.parse(localStorage.getItem('sco_applications') || '[]');
        existing.push(application);
        localStorage.setItem('sco_applications', JSON.stringify(existing));
      } catch (err) { /* localStorage not available — demo still works */ }

      window.location.href = 'success.html';
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
});
