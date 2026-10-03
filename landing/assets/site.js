(function(){
  var root=document.documentElement;
  root.classList.add('js');

  // UI strings used by the script; page copy lives in the HTML of each language.
  var T={
    en:{
      name:'Please enter your name.',
      email:'Please enter a valid work email, for example name@company.lu.',
      org:'Please enter your entity name.',
      type:'Please choose an entity type.',
      consent:'Please confirm we may contact you.',
      sending:'Sending…',
      fail:'Something went wrong sending your request. Please email us directly at '
    },
    fr:{
      name:'Veuillez indiquer votre nom.',
      email:'Veuillez indiquer une adresse e-mail professionnelle valide, par exemple nom@societe.lu.',
      org:'Veuillez indiquer le nom de votre entité.',
      type:'Veuillez choisir un type d’entité.',
      consent:'Veuillez confirmer que nous pouvons vous contacter.',
      sending:'Envoi…',
      fail:'L’envoi de votre demande a échoué. Écrivez-nous directement à '
    }
  };
  var t=T[(root.lang||'en').slice(0,2)]||T.en;

  var yr=document.getElementById('yr'); if(yr) yr.textContent=new Date().getFullYear();

  // Days to 31 March 2027 (Luxembourg end of day)
  var d=document.getElementById('days');
  if(d){var n=Math.ceil((new Date('2027-03-31T23:59:59+02:00')-new Date())/864e5);d.textContent=n>0?n:'0';}

  // Language switch keeps the current section
  document.querySelectorAll('[data-lang-switch]').forEach(function(a){
    a.addEventListener('click',function(){if(location.hash)a.href=a.getAttribute('href').split('#')[0]+location.hash;});
  });

  // Header border + mobile CTA
  var header=document.querySelector('header.site'),mcta=document.getElementById('mobile-cta'),book=document.getElementById('book');
  function onScroll(){
    var y=window.scrollY;header.classList.toggle('scrolled',y>8);
    var r=book.getBoundingClientRect();
    mcta.classList.toggle('show',y>600&&!(r.top<window.innerHeight&&r.bottom>0));
  }
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  // Scroll reveal
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(el){io.observe(el);});
  }else{els.forEach(function(el){el.classList.add('in');});}

  // Offer buttons preselect the interest field (option values are language-neutral keys)
  var interest=document.getElementById('f-interest');
  document.querySelectorAll('[data-interest]').forEach(function(a){
    a.addEventListener('click',function(){interest.value=a.getAttribute('data-interest');});
  });
  document.querySelectorAll('a[href="#book"]:not([data-interest])').forEach(function(a){
    a.addEventListener('click',function(){interest.value='health-check';});
  });

  // Form validation + submit
  var form=document.getElementById('book-form'),status=document.getElementById('form-status');
  var rules=[
    ['f-name','e-name',function(v){return v.trim()?'':t.name;}],
    ['f-email','e-email',function(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())?'':t.email;}],
    ['f-org','e-org',function(v){return v.trim()?'':t.org;}],
    ['f-type','e-type',function(v){return v?'':t.type;}],
    ['f-consent','e-consent',function(_,el){return el.checked?'':t.consent;}]
  ];
  function check(r){
    var el=document.getElementById(r[0]),msg=r[2](el.value,el),err=document.getElementById(r[1]),f=el.closest('.field');
    err.textContent=msg; el.setAttribute('aria-invalid',msg?'true':'false');
    if(msg)f.setAttribute('data-invalid','');else f.removeAttribute('data-invalid');
    return !msg;
  }
  rules.forEach(function(r){
    var el=document.getElementById(r[0]);
    el.addEventListener('blur',function(){if(el.value||el.type==='checkbox')check(r);});
    el.addEventListener('change',function(){if(el.closest('.field').hasAttribute('data-invalid'))check(r);});
  });
  form.addEventListener('submit',function(ev){
    ev.preventDefault();status.className='form-status';status.textContent='';
    var bad=rules.filter(function(r){return !check(r);});
    if(bad.length){document.getElementById(bad[0][0]).focus();return;}
    var btn=form.querySelector('button[type=submit]'),label=btn.innerHTML;
    btn.disabled=true;btn.textContent=t.sending;
    // Netlify Forms: POST url-encoded fields (including form-name) to any static path.
    fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form)).toString()})
      .then(function(r){if(!r.ok)throw 0;location.assign(form.getAttribute('action'));})
      .catch(function(){
        btn.disabled=false;btn.innerHTML=label;
        status.className='form-status bad';status.textContent=t.fail+form.getAttribute('data-mailto')+'.';
      });
  });
})();
