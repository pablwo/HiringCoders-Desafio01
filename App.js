function registrar(){
  var nome = document.querySelector('#nome').value;
  var email = document.querySelector('#email').value;
  var endereco = document.querySelector('#endereco').value;

  if(nome==="" || email==="" | email===""){
    alert('Preencha seus dados novamente!');
  }else{
    let user = {
      nome: nome,
      email: email,
      endereco: endereco,
    }
    localStorage.setItem('usuario', JSON.stringify(user));
    alert('Registro realizado com sucesso!');
  }
}

produtos = [
  {
    id: 0,
    nome: 'Black Clover - 01',
    autor: 'Yuki Tabata',
    descricao: 'Em um mundo onde magia é tudo, Asta é um garoto que, mesmo incapaz de utilizá-la, almeja o posto de "Rei Mago", o maior entre os magos, a fim de provar sua força e cumprir a promessa que fez com seu amigo! Abrem-se as cortinas dessa fantástica e mágica aventura!!',
    preco: 24.90,
  },
  {
    id: 1,
    nome: 'Spy X Family - 01',
    autor: 'Tatsuya Endo',
    descricao: 'O habilidoso espião "Twilight" é instruído a construir uma "família" para se infiltrar em uma tradicional instituição de ensino. Mas a "filha" que ele encontra é uma paranormal que lê mentes! E a "esposa" é uma assassina?!',
    preco: 29.90,
  },
  {
    id: 2,
    nome: 'Naruto Gold - 01',
    autor: 'Masashi Kishimoto',
    descricao: 'Esta é a Vila Oculta da Folha. Naruto é o garoto mais problemático da Academia Ninja e está sempre aprontando todas!! Seu grande sonho é se tornar um shinobi digno do título de Hokage, o mais forte e respeitado ninja da vila, e superar todos os Hokages anteriores...!! Mas um segredo em torno de seu nascimento o mantém distante tanto de seu sonho quanto das pessoas...!!',
    preco: 24.90,
  },
  {
    id: 3,
    nome: 'One Piece - 98',
    autor: 'Eiichiro Oda',
    descricao: 'Durante a batalha decisiva em Onigashima, que esquenta cada vez mais, Yamato, a filha de Kaido, surge diante de Luffy querendo lutar ao seu lado?! Enquanto isso, Kaido revela em detalhes o "Plano da Nova Onigashima" e, junto de Big Mom, está prestes a mergulhar o mundo inteiro em caos!',
    preco: 24.90,
  }
]

function adicionarAoCarrinho(id){
    let produto = produtos[id];
    let carrinho = localStorage.getItem('carrinho');
    if (carrinho == null){
      let carrinhoDeCompras = [produto]
      localStorage.setItem('carrinho', JSON.stringify(carrinhoDeCompras));
    }else{
      let carrinho2 = JSON.parse(carrinho)
      carrinho2.push(produto)
      localStorage.setItem('carrinho', JSON.stringify(carrinho2));
    }
}
