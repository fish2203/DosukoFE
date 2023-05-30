function check_again(){
  const modal = document.querySelector('.modal');
  const body = document.querySelector('body');
  const button = document.querySelector('.button');

  modal.style.visibility = 'visible';
  button.style.visibility = 'hidden';
  body.style.backgroundColor = 'gray'
}

function shutdown_modal(){
  const modal = document.querySelector('.modal');
  const body = document.querySelector('body');
  const button = document.querySelector('.button');

  modal.style.visibility = 'hidden';
  button.style.visibility = 'visible';
  body.style.backgroundColor = 'white'
}

function check_idpw(){
  const id = document.getElementById("studentId").value
  const pw = document.getElementById("name").value
  if(id == '1614378' && pw == '어진아'){
    location.replace("./main.html")
  }
  else{
    check_again()
  }
}