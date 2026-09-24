(function(){
function fit(){var w=document.documentElement.clientWidth;document.documentElement.style.setProperty('--zd',String(w/1440));document.documentElement.style.setProperty('--zm',String(Math.min(w,520)/390));}
fit();window.addEventListener('resize',fit);
var io;
document.querySelectorAll('[data-anim-root]').forEach(function(root){(function(){
const d = document;
if (!root || root.classList.contains('anim-on')) return;
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
const faqAnim = (el, from, to, done) => { el.classList.add('jr-faq-anim'); const a = el.animate({ height: [from + 'px', to + 'px'] }, { duration: 480, easing: 'cubic-bezier(.4,0,.2,1)' }); let ended = false; const end = () => { if (ended) return; ended = true; a.cancel(); el.classList.remove('jr-faq-anim'); el.removeAttribute('data-faq-busy'); if (done) done(); }; a.onfinish = end; setTimeout(end, 520); };
root.querySelectorAll('details').forEach((el) => { const s = el.querySelector('summary'); if (!s) return; s.addEventListener('click', (e) => { e.preventDefault(); if (el.hasAttribute('data-faq-busy')) return; el.setAttribute('data-faq-busy', ''); const border = el.offsetHeight - el.clientHeight; if (!el.open) { const from = el.offsetHeight; el.open = true; faqAnim(el, from, el.offsetHeight); } else { faqAnim(el, el.offsetHeight, s.offsetHeight + border, () => { el.open = false; }); } }); });
const mark = (el, kind, delay) => { if (!el || el.hasAttribute('data-rv')) return; el.setAttribute('data-rv', kind); if (delay) el.setAttribute('data-rv-d', String(Math.min(delay, 6))); };
const isList = (c) => { const k = Array.from(c.children); return k.length >= 3 && k.every((x) => x.tagName === 'DIV' || x.tagName === 'DETAILS'); };
const walk = (box) => {
Array.from(box.children).forEach((c) => {
if (isList(c)) { Array.from(c.children).forEach((k, i) => { mark(k, 'up', i + 1); if (k.tagName === 'DIV') k.setAttribute('data-card', ''); }); }
else if (c.children.length === 1 && c.firstElementChild.tagName === 'DIV' && c.firstElementChild.children.length > 1) { walk(c.firstElementChild); }
else { mark(c, 'up', 0); }
});
};
Array.from(root.children).forEach((sec) => {
const h1 = sec.querySelector('h1');
if (h1) {
if (sec.firstElementChild && !sec.firstElementChild.contains(h1)) mark(sec.firstElementChild, 'down', 0);
mark(h1.parentElement, 'up', 1);
sec.querySelectorAll('.ph').forEach((p) => mark(p, 'right', 2));
Array.from(sec.querySelectorAll('div')).filter((e) => /box-shadow/.test(e.getAttribute('style') || '')).forEach((b, i) => { mark(b, 'pop', 4 + i); b.setAttribute('data-float', String(i % 3)); });
return;
}
if (sec.hasAttribute('data-marquee') || (sec.children.length && Array.from(sec.children).every((x) => x.tagName === 'SPAN'))) { mark(sec, 'fade', 0); return; }
walk(sec);
});
root.classList.add('anim-on');
const items = Array.from(root.querySelectorAll('[data-rv]'));
const show = (el) => { el.classList.add('rv-in'); setTimeout(() => el.classList.add('rv-done'), 1900); };
if (!('IntersectionObserver' in window)) { items.forEach(show); return; }
io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
items.forEach((el) => io.observe(el));
})();});
})();

/* Rolagem suave (Lenis) — desativada para quem prefere menos movimento; toque no celular continua nativo */
(function(){
if(!window.Lenis||(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches))return;
window.lenis=new Lenis({duration:1.15,easing:function(t){return Math.min(1,1.001-Math.pow(2,-10*t))},smoothWheel:true,autoRaf:true});
document.addEventListener('click',function(ev){var l=ev.target.closest&&ev.target.closest('a[href^="#"]');if(!l)return;var id=l.getAttribute('href');if(id.length<2)return;var t=document.getElementById(id.slice(1));if(!t)return;ev.preventDefault();window.lenis.scrollTo(t,{duration:1.2});history.replaceState(null,'',id);});
})();