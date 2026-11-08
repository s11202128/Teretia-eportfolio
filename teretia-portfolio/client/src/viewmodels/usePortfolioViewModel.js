import { useState, useEffect, useCallback } from 'react';
import { PortfolioModel } from '../models/PortfolioModel';

export const SECTIONS = ['about', 'experience', 'skills', 'references'];

export function usePortfolioViewModel() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    async function loadData() {
      const portfolio = await PortfolioModel.fetchPortfolio();
      setData(portfolio);
      setLoading(false);
    }
    loadData();
  }, []);

  // Scroll-spy: highlight the nav item for the section currently in view
  useEffect(() => {
    if (loading) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveTab(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    const hero = document.getElementById('home');
    if (hero) observer.observe(hero);
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [loading]);

  const selectTab = useCallback((tab) => {
    const el = document.getElementById(tab);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveTab(tab);
    // Move focus for keyboard / screen-reader users without a second scroll jump
    el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
  }, []);

  return {
    profile: data?.profile,
    skills: data?.skills,
    experience: data?.experience,
    references: data?.references,
    loading,
    activeTab,
    selectTab
  };
}
