const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');


buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if(e.target === Orange){
      body.style.backgroundColor = e.target.id;
    }

    if(e.target === Blue){
      body.style.backgroundColor = e.target.id;
    }

    if(e.target === Red){
      body.style.backgroundColor = e.target.id;
    }

    if(e.target === Grey){
      body.style.backgroundColor = e.target.id;
    }
  })
})
