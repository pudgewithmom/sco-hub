document.addEventListener('DOMContentLoaded', function () {
  // Read project slug from URL query
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('project');
  const nameEl = document.getElementById('apply-project-name');

  if (slug && typeof PROJECTS !== 'undefined') {
    const project = PROJECTS.find(p => p.slug === slug);
    if (project && nameEl) {
      nameEl.textContent = project.title;
      // Pre-populate role options from project
      const roleSelect = document.getElementById('role');
      if (roleSelect && project.requiredRoles) {
        roleSelect.innerHTML = '<option value="">Выберите роль</option>' +
          project.requiredRoles.map(r => `<option value="${r}">${r}</option>`).join('');
      }
    }
  } else if (nameEl) {
    nameEl.textContent = 'Выберите проект';
  }

  const form = document.getElementById('apply-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const role = document.getElementById('role').value;
      const message = document.getElementById('message').value.trim();
      const consent = document.getElementById('consent').checked;

      if (!name || !email || !role || !message || !consent) {
        alert('Пожалуйста, заполните все обязательные поля и дайте согласие на обработку данных.');
        return;
      }

      // Save to localStorage for demo purposes
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
      } catch (err) {
        // localStorage not available — demo still works
      }

      // Redirect to success page
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
