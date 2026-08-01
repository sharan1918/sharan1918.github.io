const tabs = document.querySelectorAll('.tab');
const navTargets = document.querySelectorAll('#hero, #about, #skills, #experience, #projects, #education, #contact');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.getElementById(tab.dataset.target);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

const tabObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        tabs.forEach((t) => t.classList.remove('active'));
        const activeTab = document.querySelector(`.tab[data-target="${entry.target.id}"]`);
        if (activeTab) activeTab.classList.add('active');
      }
    });
  },
  { rootMargin: '-48px 0px -60% 0px', threshold: 0 }
);

navTargets.forEach((section) => tabObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.section').forEach((section) => revealObserver.observe(section));
