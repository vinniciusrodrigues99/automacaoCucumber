# language: pt
Funcionalidade: Login

  @CASO-1
  Cenario: Usuário Fornecedor realiza o login com sucesso.
    Dado que o usuário está na página de login
    E clica em "ENTRAR NO PORTAL FORNECEDOR"
    Quando ele insere o valor "vinnicius.rodrigues@modalgr.com.br" no campo "E-mail" da tela de login
    E ele insere o valor "Reus_01020" no campo "Senha" da tela de login
    E clica no botão "entrar" da tela de login
    Entao ele deve ser redirecionado para a página inicial do Fornecedor

  @CASO-2
  Cenario: Usuário Analista realiza o login com sucesso.
    Dado que o usuário está na página de login
    E clica em "ENTRAR NO PORTAL NGT"
    E clica em "OK" no Falha ao Acessar pela rede
    Quando ele insere o valor "T456616" no campo "Matrícula" da tela de login 
    E ele insere o valor "ModalGR@202402" no campo "Senha" da tela de login
    E clica no botão "entrar" da tela de login
    Entao ele deve ser redirecionado para a página inicial do Analista

  @CASO-3
  Cenario: Usuário Contraparte realiza o login com sucesso.
    Dado que o usuário está na página de login
    E clica em "ENTRAR NO PORTAL NGT"
    E clica em "OK" no Falha ao Acessar pela rede
    Quando ele insere o valor "T464322" no campo "Matrícula" da tela de login
    E ele insere o valor "ModalGR@202311" no campo "Senha" da tela de login
    E clica no botão "entrar" da tela de login
    Entao ele deve ser redirecionado para a página inicial do Contraparte
