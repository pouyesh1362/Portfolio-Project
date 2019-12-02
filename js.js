const aTags = ( )=>{
  const aboutTage = document.querySelector('.About');
  const skillsTage = document.querySelector('.Skills');
  const projectsTage = document.querySelector('.Projects');
  const contactTage = document.querySelector('.Contact');
  const sectionAbout =document.querySelector('#About');
  const sectionSkills =document.querySelector('#Skills');
  const sectionProject =document.querySelector('#Projects');
  const sectionContact =document.querySelector('#Contact');

  aboutTage.addEventListener('click',()=>{
    
    sectionAbout.classList.toggle('animated');
    sectionAbout.classList.toggle('fadeInLeft');
  })
  skillsTage.addEventListener('click',()=>{
    
    sectionSkills.classList.toggle('animated');
    sectionSkills.classList.toggle('fadeInLeft');
  })
  projectsTage.addEventListener('click',()=>{
    
    sectionProject.classList.toggle('animated');
    sectionProject.classList.toggle('fadeInLeft');
  })

  contactTage.addEventListener('click',()=>{
    
    sectionContact.classList.toggle('animated');
    sectionContact.classList.toggle('fadeInLeft');
  })
  
}


aTags();

