import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as RouterLink, NavLink, Outlet, useLocation } from 'react-router-dom';

const links = [
  ['/about', 'About'],
  ['/experiences', 'Global Experiences'],
  ['/skills', 'Skills'],
  ['/resume', 'Résumé'],
  ['/reflection', 'Final Reflection'],
];

export default function SiteLayout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    const selector = [
      '.home-hero', '.home-statement', '.home-paths article', '.page-two > div',
      '.experience-story', '.travel-journal', '.skill-card', '.role-list article',
      '.reflection-image', '.reflection-copy',
    ].join(',');
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    elements.forEach((element, index) => {
      element.classList.add('reveal');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 3, 2) * 70}ms`);
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -45px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return <div className="site-shell">
    <a className="skip" href="#content">Skip to content</a>
    <header className="site-header">
      <RouterLink to="/" className="monogram" onClick={() => setOpen(false)}>SG <span>Sebastian Garcia</span></RouterLink>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'site-nav open' : 'site-nav'} aria-label="Main navigation">
        {links.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}
      </nav>
    </header>
    <main id="content"><div className="page-transition" key={pathname}><Outlet /></div></main>
    <footer className="site-footer">
      <strong>Sebastian Garcia</strong><span>Computer Engineering · University of Florida</span>
      <div><a href="mailto:sgarcia190204@gmail.com">Email ↗</a><a href="https://github.com/S3basG">GitHub ↗</a><a href="https://www.linkedin.com/in/sebastian-garcia100">LinkedIn ↗</a></div>
    </footer>
  </div>;
}
