document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){ e.preventDefault(); const t=document.querySelector(this.getAttribute('href')); if(t) t.scrollIntoView({behavior:'smooth', block:'start'}); });
  });
  // Active nav item on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  function onScroll(){
    const pos = window.scrollY + 90;
    sections.forEach(sec=>{
      if(sec.offsetTop <= pos && (sec.offsetTop + sec.offsetHeight) > pos){
        navLinks.forEach(l=> l.classList.remove('active'));
        const link = document.querySelector('.nav-link[href="#'+sec.id+'"]');
        if(link) link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
});