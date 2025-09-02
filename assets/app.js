document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('menuBtn');
  var nav = document.querySelector('.nav');
  var backdrop = document.getElementById('navBackdrop');
  function closeNav(){
    if(nav) nav.classList.remove('open');
    if(backdrop) backdrop.classList.remove('show');
  }
  if(btn){
    btn.addEventListener('click', function(){
      if(nav) nav.classList.toggle('open');
      if(backdrop) backdrop.classList.toggle('show');
    });
  }
  if(backdrop){ backdrop.addEventListener('click', closeNav); }
});
