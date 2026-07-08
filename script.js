const observer = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const lightbox=document.getElementById('lightbox');
const lightImg=lightbox.querySelector('img');
document.querySelectorAll('#galleryGrid button img').forEach(img=>{img.addEventListener('click',()=>{lightImg.src=img.src;lightImg.alt=img.alt;lightbox.classList.add('active');lightbox.setAttribute('aria-hidden','false');});});
document.getElementById('closeLightbox').addEventListener('click',()=>{lightbox.classList.remove('active');lightbox.setAttribute('aria-hidden','true');});
lightbox.addEventListener('click',(e)=>{if(e.target===lightbox){lightbox.classList.remove('active');lightbox.setAttribute('aria-hidden','true');}});
