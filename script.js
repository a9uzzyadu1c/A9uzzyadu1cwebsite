const b=document.getElementById('theme');
b.onclick=()=>{
document.body.classList.toggle('light');
b.textContent=document.body.classList.contains('light')?'☀️':'🌙';
};
