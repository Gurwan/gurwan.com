const picture = document.getElementById('picture_profile');
const hobbits_title = document.getElementById('hobbits_title');
const hobbits_content = document.getElementById('hobbits_content');

picture.addEventListener('dblclick', (_) => {
  if(hobbits_title.style.display == 'none'){
    hobbits_title.style.display = 'block';
    hobbits_content.style.display = 'block';
  } else {
    hobbits_title.style.display = 'none';
    hobbits_content.style.display = 'none';
  }
});