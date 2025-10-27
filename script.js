// Mobile nav toggle, reveal on scroll, small interactions
(function(){
  // nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.querySelector('.main-nav');
  navToggle && navToggle.addEventListener('click', ()=>{
    mainNav.classList.toggle('open');
  });

  // IntersectionObserver for reveal animations
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
      }
    });
  }, {threshold: 0.12});
  reveals.forEach(r => io.observe(r));

  // Hero visual: straighten tilt when visible (like the image's smooth animation)
  const heroVisual = document.getElementById('heroVisual');
  if(heroVisual){
    const hvObserver = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) heroVisual.style.transform = 'rotate(0deg) translateY(0)';
        else heroVisual.style.transform = 'rotate(-8deg)';
      });
    }, {threshold:0.3});
    hvObserver.observe(heroVisual);
  }

  // Close nav when clicking outside on small screens
  document.addEventListener('click', (e)=>{
    if(!e.target.closest('.main-nav') && !e.target.closest('#navToggle')){
      mainNav && mainNav.classList.remove('open');
    }
  });

  // close nav on anchor click (mobile)
  document.querySelectorAll('.main-nav a').forEach(a=>{
    a.addEventListener('click', ()=> mainNav.classList.remove('open'));
  });
})();