#language: pt
Funcionalidade:CRE

@CASO-01
Cenario: Analista NGT acessa a tela Análise CRE
   Dado que o usuário está na página inicial
   Quando clica no módulo de "CRE"
   E clica na seção "Análise CRE"
   Entao o usuário é redirecionado para a página "Análise CRE"

@CASO-02
Esquema do Cenario: Analista filtra por contrato na tela Pesquisar em CRE
   Dado que o usuário está na página inicial
   Quando clica no módulo de "CRE"
   E clica na seção "Análise CRE"
   E o usuário é redirecionado para a página "Análise CRE"
   E ele insere o valor "<CONTRATO>" no campo "Contrato"
   E clica no botão "Pesquisar"
   Então o sistema apresenta na tabela o "Contrato" "<CONTRATO>" filtrado
   
   Exemplos: 
   |CONTRATO |
   |001110|

@CASO-03
Esquema do Cenario: Analista filtra por Fornecedor na tela Pesquisar em CRE
   Dado que o usuário está na página inicial
   Quando clica no módulo de "CRE"
   E clica na seção "Análise CRE"
   E o usuário é redirecionado para a página "Análise CRE"
   E ele insere o valor "<FORNECEDOR>" no campo "Fornecedor" da tela Análise CRE
   E clica no botão "Pesquisar"
   Então o sistema apresenta na tabela o "Fornecedor" "<FORNECEDOR>" filtrado
   
   Exemplos: 
   |FORNECEDOR |
   |CIVILPORT ENGENHARIA LTDA |

@CASO-04
Esquema do Cenario: Analista filtra contratos por número de CRE na tela Pesquisar em CRE
   Dado que o usuário está na página inicial
   Quando clica no módulo de "CRE"
   E clica na seção "Análise CRE"
   E o usuário é redirecionado para a página "Análise CRE"
   E ele insere o valor "<CRE>" no campo "CRE" da tela Análise CRE
   E clica no botão "Pesquisar"
   Então o sistema apresenta na tabela o "CRE" "<CRE>" filtrado
   
   Exemplos: 
   |CRE |
   |GOC/TC04640/2011 |

@CASO-05
Esquema do Cenario: Analista NGT filtra contratos por Bloqueio CRE na tela Pesquisar em análise CRE
   Dado que o usuário está na página inicial
   Quando clica no módulo de "CRE"
   E clica na seção "Análise CRE"
   E o usuário é redirecionado para a página "Análise CRE"
   E clica no botão "Sim" do filtro de "Bloqueio Pagamento"
   E clica no botão "Pesquisar"
   Entao ao filtrar por "Bloqueio CRE" o sistema exibe os contratos com "<STATUS>"

   Exemplos:
   | STATUS |
   | Pendência de Análise |


@CASO-06
Esquema do Cenario: Analista NGT filtra contratos por Bloqueio CRE na tela Pesquisar em análise CRE
   Dado que o usuário está na página inicial
   Quando clica no módulo de "CRE"
   E clica na seção "Análise CRE"
   E o usuário é redirecionado para a página "Análise CRE"
   E clica no botão "Sim" do filtro de "Bloqueio CRE"
   E clica no botão "Pesquisar"
   Entao ao filtrar por "Bloqueio CRE" o sistema exibe os contratos com "<STATUS>"

   Exemplos:
   | STATUS |
   | Pendência de Análise |

@CASO-07
Esquema do Cenario: Usuário Analista consulta informações do contrato selecionado
   Esquema do Cenario: Analista filtra por Fornecedor na tela Pesquisar em CRE
   Dado que o usuário está na página inicial
   Quando clica no módulo de "CRE"
   E clica na seção "Análise CRE"
   E o usuário é redirecionado para a página "Análise CRE"
   Quando ele insere o valor "<CONTRATO>" no campo "Contrato" da tela Análise CRE
   E clica no botão "Pesquisar"
   E clica no contrato "<CONTRATO>" com competência "<COMPETENCIA>"
   Entao o sistema apresenta na tabela o "Contrato" "<CONTRATO>" filtrado

   Exemplos: 
   | CONTRATO | COMPETENCIA | 
   | 001110 | 03/2011 | 

@CASO-09
Esquema do Cenario: Usuário Analista limpa campos de pesquisa dos filtros em Análise CRE
   Esquema do Cenario: Analista filtra por Fornecedor na tela Pesquisar em CRE
   Dado que o usuário está na página inicial
   Quando clica no módulo de "CRE"
   E clica na seção "Análise CRE"
   E o usuário é redirecionado para a página "Análise CRE"
   E ele insere o valor "<FORNECEDOR>" no campo "Fornecedor" da tela Análise CRE
   E ele insere o valor "<CRE>" no campo "CRE" da tela Análise CRE
   E ele insere o valor "<CONTRATO>" no campo "Contrato" da tela Análise CRE
   E clica no botão "Limpar"
   Então os campos em "Analise CRE" são limpos

   Exemplos: 
   | FORNECEDOR | CONTRATO | CRE |
   | 123456789  | 987654321| 123 |

@CASO-10&12
Esquema do Cenario: O sistema exbibe contratos encerrados e com flag de CRE N/A em Análise CRE 
  Esquema do Cenario: Analista filtra por Fornecedor na tela Pesquisar em CRE
  Dado que o usuário está na página inicial
  Quando clica no módulo de "CRE"
  E clica na seção "Análise CRE"
  E o usuário é redirecionado para a página "Análise CRE"
  Quando ele insere o valor "<CONTRATO>" no campo "Contrato" da tela Análise CRE
  E clica no botão "Pesquisar"
  E clica no contrato "<CONTRATO>" com competência "<COMPETENCIA>"
  E verifica se o contrato tem flag de "<FLAG>" na tela de Análise CRE
   
   Exemplos: 
   | CONTRATO | COMPETENCIA | FLAG | 
  # | 001110   | 03/2011     | Encerrado |
   | 0012020 | 09/2021 | N/A |

   