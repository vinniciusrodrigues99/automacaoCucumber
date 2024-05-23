#language: pt
Funcionalidade: Validação de acesso

@CASO-01
   Esquema do Cenario: Usuário Analista adiciona novo fornecedor ao contrato para que seja realizado o primeiro acesso. 
   Dado que o usuário está na página inicial
   E clica no módulo de Contratos
   E clica na seção "Contrato"
   Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
   E clica no botão "Pesquisar"
   E clica no contrato "<CONTRATO>"
   E insere o valor "<EMAIL>" no campo "E-mail Documentação Trabalhista"
   E clica no botão "Salvar e Finalizar" 
   Então o sistema executa a ação e exibe a mensagem de "Sucesso"
   E clica no botão "Fechar"

 Exemplos:
   | CONTRATO   | EMAIL   | 
   #| 001110    | testandoColaboradorDuplicado@vintomaper.com |
   |  001110    | gabrielpinheiro@vintomaper.com               |
   |  001110    |  vinnitestevalidacao@vintomaper.com        |
   
@CASO-02
  Cenario: Analista acessa a tela de validação de acesso
   Dado que o usuário está na página inicial
   E clica no módulo de Contratos
   Entao clica na seção "Validação de Acesso"

@CASO-03
 Esquema do Cenario: Analista filtra por CPF/Passaporte na tela de pesquisar
  Dado que o usuário está na página inicial
  E clica no módulo de Contratos
  E clica na seção "Validação de Acesso"
  Quando ele insere o valor "<CPF/PASSAPORTE>" no campo "CPF / Passaporte"
  E clica no botão "Pesquisar"
  Então a tabela retorna o colaborador relacionado ao "<CPF/PASSAPORTE>"
  
  Exemplos:
  | CPF/PASSAPORTE     |  
  | 853.446.660-20     |

@CASO-04
 Esquema do Cenario: Analista valida acesso de colaborador
  Dado que o usuário está na página inicial
  E clica no módulo de Contratos
  E clica na seção "Validação de Acesso"
  Quando o analista clica no checkbox do "<COLABORADOR>" que deseja validar
  E clica no botão "Validar"
  E clica no botão "Sim"
  Entao o sistema executa a ação e exibe a mensagem de "Sucesso"
  
  Exemplos:
  |  COLABORADOR   |
  | Hatake Kakashi | 

@CASO-05_06
Esquema do Cenario: Analista relaciona contrato ao fornecedor
  Dado que o usuário está na página inicial
  E clica no módulo de Contratos
  E clica na seção "Validação de Acesso"
  Quando ele insere o valor "<CPF/PASSAPORTE>" no campo "CPF / Passaporte"
  E clica no botão "Pesquisar"
  E a tabela retorna o colaborador relacionado ao "<CPF/PASSAPORTE>"
  E clica no botão de ação "<botoes>"
  E seleciona o "<contrato>" não vinculado que deseja vincular ao colaborador
  E clica na seta para "<setas>" o contrato
  E clica no botão "Salvar"
  Entao o sistema executa a ação e exibe a mensagem de "Sucesso"
  
  
  Exemplos:
  | CPF/PASSAPORTE     |  botoes             | contrato   | setas   | 
  | 853.446.660-20    | relacionar contrato | 001110 | vincular    |
  | 853.446.660-20    | relacionar contrato | 001110 | desvincular |                                                              

@CASO-07
Esquema do Cenario: Analista relaciona contrato ao fornecedor
  Dado que o usuário está na página inicial
  E clica no módulo de Contratos
  E clica na seção "Validação de Acesso"
  E clica no botão de ação "<botoes>"
  E clica no input de "Perfil"
  E seleciona o valor do "<perfil>" que deseja relacionar ao fornecedor
  E clica no botão "Salvar"
  Entao o sistema executa a ação e exibe a mensagem de "Sucesso"
  
  
  Exemplos:
  |  perfil                  | botoes | 
  | Fornecedor Administrador | editar |    
  | Fornecedor Operador NGT | editar  |    
 # | Fornecedor Operador GST | editar |                                                               
  | Fornecedor Operador Híbrido | editar | 

@CASO-08
Esquema do Cenario: Analista altera o perfil do Fornecedor para Fornecedor Operador GST
  Dado que o usuário está na página inicial
  E clica no módulo de Contratos
  E clica na seção "Validação de Acesso"
  E clica no botão de ação "<botoes>"
  E clica no input de "Perfil"
  E seleciona o valor do "<perfil>" que deseja relacionar ao fornecedor
  E clica no botão "Salvar"
  Entao o sistema executa a ação e exibe a mensagem de "Sucesso"
  
  
  Exemplos:
  |           perfil        | botoes |  setas  |  
 # | Fornecedor Operador GST | editar | vincular| Preciso limpar a massa de dados                                                            
  

@CASO-09
Esquema do Cenario: Analista desativa um fornecedor
  Dado que o usuário está na página inicial
  E clica no módulo de Contratos
  E clica na seção "Validação de Acesso"
  Quando ele insere o valor "<CPF/PASSAPORTE>" no campo "CPF / Passaporte"
  E clica no botão "Pesquisar"
  E a tabela retorna o colaborador relacionado ao "<CPF/PASSAPORTE>"
  E clica no botão de ação "<botoes>"
  E clica no botão "Sim"
  E clica no input de "Status"
  E seleciona o valor do status "<status>" que deseja relacionar ao fornecedor
  E clica no botão "Pesquisar"
  E a tabela retorna o colaborador relacionado ao "<CPF/PASSAPORTE>"
  Entao o sistema executa a solicitação e o "<COLABORADOR>" é desativado com sucesso
  
  Exemplos:
  | CPF/PASSAPORTE     |  botoes  | contrato  | COLABORADOR | status |
  | 853.446.660-20     | bloquear | 001110    | Vinni testes| Desativado | 


@CASO-10
Esquema do Cenario: Analista realiza a reativação de um fornecedor desativado
  Dado que o usuário está na página inicial
  E clica no módulo de Contratos
  E clica na seção "Validação de Acesso"
  Quando ele insere o valor "<CPF/PASSAPORTE>" no campo "CPF / Passaporte"
  E clica no input de "Status"
  E seleciona o valor do status "<status>" que deseja relacionar ao fornecedor
  E clica no botão "Pesquisar"
  E a tabela retorna o colaborador relacionado ao "<CPF/PASSAPORTE>"
  E clica no botão de ação "<botoes>"
  Entao clica no botão "Sim"
  
  Exemplos:
  | CPF/PASSAPORTE     |  botoes  | contrato  | COLABORADOR | status |
  | 853.446.660-20     | reativar | 001110    | Vinni testes| Desativado | 


@CASO-11
 Esquema do Cenario: Analista filtra pelos inputs disponíveis para digito na tela 
  Dado que o usuário está na página inicial
  E clica no módulo de Contratos
  E clica na seção "Validação de Acesso"
  Quando ele insere o valor "<Valores>" no campo "<Campos>"
  E clica no botão "Pesquisar"
  Então a tabela retorna o colaborador relacionado ao "<Valores>"
  
  Exemplos:
  | Valores        |    Campos                   | 
  | Vinni testes   | Colaborador                 |
  | 974.531.440-43 | CPF / Passaporte            |
  | pepelepsteste3@vintomaper.com  | E-mail      |  

@CASO-12
 Esquema do Cenario: Analista filtra por CPF/Passaporte inválido na tela de pesquisar
  Dado que o usuário está na página inicial
  E clica no módulo de Contratos
  E clica na seção "Validação de Acesso"
  Quando ele insere o valor "<CPF/PASSAPORTE>" no campo "CPF / Passaporte"
  E clica no botão "Pesquisar"
  Então o sistema executa a ação e retorna o status "HTTP 204", indicando que não há conteúdo para exibir
  
  Exemplos:
  | CPF/PASSAPORTE     |  
  | 000.000.000-00     |

  @CASO-13
 Esquema do Cenario: Analista filtra por data de validade de acesso
  Dado que o usuário está na página inicial
  E clica no módulo de Contratos
  E clica na seção "Validação de Acesso"
  Quando ele insere o valor "<DATA INÍCIO>" no campo "Validade de Acesso (Início)" e insere o valor "<DATA FIM>" no campo "Validade de Acesso (Final)" em validação de acesso
  E clica no botão "Pesquisar"
  Então a tabela retorna o colaborador relacionado ao "<DATA INÍCIO>"
  
  Exemplos:
  | DATA INÍCIO        |    DATA FIM     | 
  | 19/05/2024         | 19/05/2024      |

 @CASO-14
Esquema do Cenario: Analista filtra por Status na tela Pesquisar
  Dado que o usuário está na página inicial
  E clica no módulo de Contratos
  E clica na seção "Validação de Acesso"
  E clica no input de "Status"
  E seleciona o valor do status "<status>" que deseja relacionar ao fornecedor
  E clica no botão "Pesquisar"
  Entao a tabela retorna os colaboradores relacionados aos status "<status>"
  
  Exemplos:
  |  status                  | 
  | Todos                    |    
  | Bloqueado                |
  | Desativado               |  
  #| Pendente                 | gerar massa de dados
  | Liberado                 |     

@CASO-15
Esquema do Cenario: Analista clica no botão relatório de acesso
  Dado que o usuário está na página inicial
  E clica no módulo de Contratos
  E clica na seção "Validação de Acesso"
  Quando clica no botão "RELATÓRIO DE ACESSO"
  Entao o usuário é redirecionado para a página "<Pagina>"
   
  Exemplos:
  |  Pagina             |
  | Relatório de acesso | 