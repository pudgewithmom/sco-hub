document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('pilot-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const country = document.getElementById('country').value.trim();
    const role = document.getElementById('role').value;
    const contact = document.getElementById('contact').value.trim();
    const consent = document.getElementById('consent').checked;

    if (!name || !country || !role || !contact || !consent) {
      alert('Please fill in all required fields.');
      return;
    }

    const entry = {
      name, country, role, contact,
      comment: document.getElementById('comment').value.trim(),
      timestamp: new Date().toISOString()
    };
    try {
      const existing = JSON.parse(localStorage.getItem('sco_pilot_leads') || '[]');
      existing.push(entry);
      localStorage.setItem('sco_pilot_leads', JSON.stringify(existing));
    } catch (err) { /* ignore */ }

    form.innerHTML = `
      <div class="success-inline success-inline--lg">
        <div class="success-icon">✅</div>
        <h3>Application received!</h3>
        <p>Thank you, ${name}! We will reach out when the pilot version of the platform launches.</p>
      </div>
    `;
  });

  // Mobile nav toggle
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('nav--open');
    });
  }
});
