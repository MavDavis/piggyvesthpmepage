  
  function navbar(){

    let navList = document.getElementsByClassName('nav-links');
    for(var i = 0; i < navList.length; i++){
      navList[i].addEventListener('click', function(e){
        e.preventDefault();
        let navLink = document.querySelector('.navLink').style.display = 'none';
        let signButton = document.querySelector('.sign').style.display = 'none';
        let nav = document.querySelector('.nav')
nav.classList.toggle('show-div');
      })
    }
    }
  
  const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function(e){
let nav = document.querySelector('.nav')
nav.classList.toggle('show-div');

  let navLink = document.querySelector('.navLink');
   let signButton = document.querySelector('.sign');
 
  if(navLink.style.display === 'block' && signButton.style.display === 'block'){
    navLink.style.display = 'none' ;
    signButton.style.display = 'none'
  }
  else{
    navLink.style.display =' block';
    signButton.style.display = 'block'
  };
navbar();
})
