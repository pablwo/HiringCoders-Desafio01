function registrar(){
  var nome = document.querySelector('#nome').value;
  var email = document.querySelector('#email').value;

  if(nome==="" || email===""){
    alert('Preencha seus dados novamente!');
  }else{
    let user = {
      nome: nome,
      email: email,
    }
    localStorage.setItem('usuario', JSON.stringify(user));
    alert('Registro realizado com sucesso!');
  }
}