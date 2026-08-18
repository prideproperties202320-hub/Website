const menu=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav-menu');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-menu a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const filters=document.querySelectorAll('.filter'), cards=document.querySelectorAll('.property-card');
filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(x=>x.classList.remove('active')); btn.classList.add('active');
  const wanted=btn.dataset.filter;
  cards.forEach(card=>{
    card.style.display=(wanted==='all'||card.dataset.type.split(' ').includes(wanted))?'block':'none';
  });
}));

document.querySelectorAll('.property-enquire').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelector('[name="requirement"]').value=btn.dataset.subject.includes('Rental')?'Property on Rent':btn.dataset.subject.includes('Purchase')?'Buy / Purchase':'Sell My Property';
  document.querySelector('#contact').scrollIntoView({behavior:'smooth'});
}));

const lb=document.getElementById('lightbox'), lbImg=lb.querySelector('img');
document.querySelectorAll('.gallery button').forEach(b=>b.addEventListener('click',()=>{lbImg.src=b.dataset.img;lb.classList.add('open')}));
lb.querySelector('button').addEventListener('click',()=>lb.classList.remove('open'));
lb.addEventListener('click',e=>{if(e.target===lb)lb.classList.remove('open')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open')});

document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('enquiryForm').addEventListener('submit',e=>{
  e.preventDefault();
  const f=new FormData(e.currentTarget);
  const subject=encodeURIComponent('PRIDE PROPERTIES - '+f.get('requirement'));
  const body=encodeURIComponent(
`Hello PRIDE PROPERTIES,

Name: ${f.get('name')}
Phone: ${f.get('phone')}
Email: ${f.get('email')}
Requirement: ${f.get('requirement')}

Details:
${f.get('details')||'Not provided'}

Thank you.`
  );
  location.href=`mailto:prideproperties2023.20@gmail.com?subject=${subject}&body=${body}`;
});
