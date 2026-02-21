const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let cx = 0, cy = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => {
      cx = e.clientX; cy = e.clientY;
      cursor.style.left = cx + 'px'; cursor.style.top = cy + 'px';
    });
    (function loop() {
      rx += (cx - rx) * .12; ry += (cy - ry) * .12;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    })();

    const headerBg = document.getElementById('headerBg');
    window.addEventListener('scroll', () => headerBg.classList.toggle('visible', scrollY > 60));

    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); o.unobserve(e.target); } });
    }, { threshold: .08 });
    document.querySelectorAll('.reveal').forEach(r => obs.observe(r));

    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    hamburger.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

    document.getElementById('contact-form').addEventListener('submit', e => {
      e.preventDefault();
      const s = document.getElementById('form-status');
      s.textContent = "Thank you — I'll be in touch soon.";
      s.classList.add('visible');
      e.target.reset();
    });

    const preview = document.getElementById('imgPreview');
    const previewImg = document.getElementById('previewImg');
    document.querySelectorAll('.project-entry[data-img]').forEach(entry => {
      entry.addEventListener('mouseenter', () => {
        const src = entry.getAttribute('data-img');
        if (src) { previewImg.src = src; preview.classList.add('active'); }
      });
      entry.addEventListener('mouseleave', () => preview.classList.remove('active'));
    });
    document.addEventListener('mousemove', e => {
      preview.style.left = (e.clientX + 30) + 'px';
      preview.style.top = (e.clientY - 100) + 'px';
    });