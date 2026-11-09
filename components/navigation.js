export function setupNavigation(){
  const button=document.querySelector('.menu-toggle');
  const nav=document.querySelector('#primary-nav');
  if(!button||!nav)return;
  button.addEventListener('click',()=>{
    const isExpanded=button.getAttribute('aria-expanded')==='true';
    button.setAttribute('aria-expanded',String(!isExpanded));
    nav.classList.toggle('open',!isExpanded);
  });
}
