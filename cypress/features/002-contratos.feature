#language: pt

Funcionalidade: Contrato

@CASO-1
Esquema do Cenario: Usuário Analista pesquisa contrato por filtro de contrato
 Dado que o usuário está na página inicial
 E clica no módulo de "Contratos"
 E clica na seção "Contrato"
 Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
 E clica no botão "Pesquisar"
 Então a tabela retorna o dado esperado "<CONTRATO>"

 Exemplos:
   | CONTRATO     | CNPJ/CPF/PASSAPORTE  | FORNECEDOR                                        | CONTRAPARTE                     |     
   | S14526287    | 13.623.957/0002-17   | CBSI COMPANHIA BRASILEIRA DE SERVICINFRAESTRUTURA | RICARDO GARCIA DOS SANTOS       |
   | 4600024342   | 17.271.755/0001-23   | TASK FORCE INSTALACOES INDUSTRIAISEIRELI          | MARCELO LAURIANO PEREIRA JUNIOR |

@CASO-2
Esquema do Cenario: Usuário Analista pesquisa contrato por filtro de CPF/CNPJ/Cód.Fornecedor
 Dado que o usuário está na página inicial
 E clica no módulo de "Contratos"
 E clica na seção "Contrato"
 Quando ele insere o valor "<CNPJ/CPF/PASSAPORTE>" no campo "CPF/CNPJ/Cód.Fornecedor"
 E clica no botão "Pesquisar"
 Então a tabela retorna o dado esperado "<CNPJ/CPF/PASSAPORTE>"

 Exemplos:
   | CONTRATO     | CNPJ/CPF/PASSAPORTE  | FORNECEDOR                                        | CONTRAPARTE                     |     
   | S14526287    | 13.623.957/0002-17   | CBSI COMPANHIA BRASILEIRA DE SERVICINFRAESTRUTURA | RICARDO GARCIA DOS SANTOS       |
   | 4600024342   | 17.271.755/0001-23   | TASK FORCE INSTALACOES INDUSTRIAISEIRELI          | MARCELO LAURIANO PEREIRA JUNIOR |
 

@CASO-3
Esquema do Cenario: Usuário Analista pesquisa contrato por filtro de Fornecedor
 Dado que o usuário está na página inicial
 E clica no módulo de "Contratos"
 E clica na seção "Contrato"
 Quando ele insere o valor "<FORNECEDOR>" no campo "Fornecedor"
 E clica no botão "Pesquisar"
 Então a tabela retorna o dado esperado "<FORNECEDOR>"
 

Exemplos:
   | CONTRATO     | CNPJ/CPF/PASSAPORTE  | FORNECEDOR                                        | CONTRAPARTE                     |     
   | S14526287    | 13.623.957/0002-17   | CBSI COMPANHIA BRASILEIRA DE SERVICINFRAESTRUTURA | RICARDO GARCIA DOS SANTOS       |
   | 4600024342   | 17.271.755/0001-23   | TASK FORCE INSTALACOES INDUSTRIAISEIRELI          | MARCELO LAURIANO PEREIRA JUNIOR |

@CASO-4
Esquema do Cenario: Usuário Analista pesquisa contrato por filtro de Contraparte
 Dado que o usuário está na página inicial
 E clica no módulo de "Contratos"
 E clica na seção "Contrato"
 Quando ele insere o valor "<CONTRAPARTE>" no campo "Contraparte"
 E clica no botão "Pesquisar"
 Então a tabela retorna o dado esperado "<CONTRAPARTE>"
 

Exemplos:
   | CONTRATO     | CNPJ/CPF/PASSAPORTE  | FORNECEDOR                                        | CONTRAPARTE                     |     
   | S14526287    | 13.623.957/0002-1    | CBSI COMPANHIA BRASILEIRA DE SERVICINFRAESTRUTURA | RICARDO GARCIA DOS SANTOS       |
   | 4600024342   | 17.271.755/0001-23   | TASK FORCE INSTALACOES INDUSTRIAISEIRELI          | MARCELO LAURIANO PEREIRA JUNIOR |

 @CASO-5
  Esquema do Cenario: Usuário Analista limpa campos da pesquisa em contrato
  Dado que o usuário está na página inicial
  E clica no módulo de "Contratos"
  E clica na seção "Contrato"
  Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
  E ele insere o valor "<CNPJ/CPF/PASSAPORTE>" no campo "CPF/CNPJ/Cód.Fornecedor"
  E ele insere o valor "<FORNECEDOR>" no campo "Fornecedor"
  E ele insere o valor "<CONTRAPARTE>" no campo "Contraparte"
  E clica no botão "Pesquisar"
  E clica no botão "Limpar"
  Então a tabela retorna todos os campos em branco

  Exemplos:
    | CONTRATO     | CNPJ/CPF/PASSAPORTE  | FORNECEDOR                                        | CONTRAPARTE                     |     
    | S14526287    | 13.623.957/0002-1    | CBSI COMPANHIA BRASILEIRA DE SERVICINFRAESTRUTURA | RICARDO GARCIA DOS SANTOS       |

 @CASO-6
  Cenario: Usuário Analista muda página da tela contratos
  Dado que o usuário está na página inicial
  E clica no módulo de "Contratos"
  E clica na seção "Contrato"
  Quando ele clica no seletor de página "5"
  Entao a tabela retorna os contratos da página "5"


 @CASO-7
  Cenario: Usuário analista valida a quantidade de ítens por página
  Dado que o usuário está na página inicial
  E clica no módulo de "Contratos"
  E clica na seção "Contrato"
  Quando ele visualiza a tabela
  Entao devem ser exibidos 15 itens por pagina

 @CASO-8
  Cenario: Usuário Analista remove contrato
  Dado que o usuário está na página inicial
  E clica no módulo de "Contratos"
  E clica na seção "Contrato"
  Quando ele visualiza a tabela
  E clica no botão excluir
  E clica em "SIM" para confirmar
  Entao o sistema executa a ação e exibe a mensagem de "Sucesso"

 @CASO-9
  Esquema do Cenario: Usuário Analista visualiza contrato 
  Dado que o usuário está na página inicial
  E clica no módulo de "Contratos"
  E clica na seção "Contrato"
  Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no valor "<CONTRATO>" apresentado
  Então ele visualiza os dados de "<CONTRATO>"

  Exemplos:
    | CONTRATO     | 
    | S14526287    | 
    | 4600024342   | 

  @CASO-10 
   Esquema do Cenario: Usuário Analista adiciona um substituto dentro de um contrato
   Dado que o usuário está na página inicial
   E clica no módulo de "Contratos"
   E clica na seção "Contrato"
   Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
   E clica no botão "Pesquisar"
   E clica no valor "<CONTRATO>" apresentado
   E clica no botão + em Matricula Substituto
   E preenche o valor de "<MATRICULA>" no campo "Matrícula Substituto"
   E clica no botão "Salvar e Finalizar"
   Então o sistema executa a ação e exibe a mensagem de "Sucesso"

 Exemplos:
   | CONTRATO     | MATRICULA   | 
   | S14526287    | CSO0393     | 

  @CASO-11 
   Esquema do Cenario: Usuário Analista remove um substituto dentro de um contrato
   Dado que o usuário está na página inicial
   E clica no módulo de "Contratos"
   E clica na seção "Contrato"
   Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
   E clica no botão "Pesquisar"
   E clica no valor "<CONTRATO>" apresentado
   E clica no botão - da "<MATRICULA>" que deseja remover
   E clica no botão "Salvar e Finalizar"
   Então o sistema executa a ação e exibe a mensagem de "Sucesso"

 Exemplos:
   | CONTRATO     | MATRICULA   | 
   | S14526287    | CSO0393     | 
   
  @CASO-12 
   Esquema do Cenario: Usuário Analista adiciona e-mail de documentação trabalhista dentro de um contrato
   Dado que o usuário está na página inicial
   E clica no módulo de "Contratos"
   E clica na seção "Contrato"
   Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
   E clica no botão "Pesquisar"
   E clica no valor "<CONTRATO>" apresentado
   E insere o valor "<EMAIL>" no campo "E-mail Documentação Trabalhista"
   E clica no botão "Salvar e Finalizar" 
   Então o sistema executa a ação e exibe a mensagem de "Sucesso"

 Exemplos:
   | CONTRATO     | EMAIL   | 
   | S14526287    | vinnicius.rodrigues@modalgr.com |

  @CASO-13 
   Esquema do Cenario: Usuário Analista remove e-mail de documentação trabalhista dentro de um contrato
   Dado que o usuário está na página inicial
   E clica no módulo de "Contratos"
   E clica na seção "Contrato"
   Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
   E clica no botão "Pesquisar"
   E clica no valor "<CONTRATO>" apresentado
   E insere o valor "<EMAIL>" no campo "E-mail Documentação Trabalhista"
   E clica no botão "Remover"
   E clica no botão "Salvar e Finalizar"
   Então o sistema executa a ação e exibe a mensagem de "Sucesso"

 Exemplos:
   | CONTRATO     | EMAIL   | 
   | S14526287    | vinnicius.rodrigues@modalgr.com | 

  @CASO-14 
   Esquema do Cenario: Usuário Analista realiza upload de evidências dentro de um contrato
   Dado que o usuário está na página inicial
   E clica no módulo de "Contratos"
   E clica na seção "Contrato"
   Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
   E clica no botão "Pesquisar"
   E clica no valor "<CONTRATO>" apresentado
   E clica no botão "Upload"
   E anexa a evidência trabalhista do "Contrato"
   E clica no botão "Salvar e Finalizar"
   Então o sistema executa a ação e exibe a mensagem de "Sucesso"

 Exemplos:
   | CONTRATO     | 
   | S14526287    | 


  @CASO-15 
   Esquema do Cenario: Usuário Analista visualiza evidências dentro de um contrato
   Dado que o usuário está na página inicial
   E clica no módulo de "Contratos"
   E clica na seção "Contrato"
   Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
   E clica no botão "Pesquisar"
   E clica no valor "<CONTRATO>" apresentado
   E clica no botão "Visualizar"
 
 Exemplos:
   | CONTRATO     | 
   | S14526287    | 

  @CASO-16 
   Esquema do Cenario: Usuário Analista remove evidências dentro de um contrato
   Dado que o usuário está na página inicial
   E clica no módulo de "Contratos"
   E clica na seção "Contrato"
   Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
   E clica no botão "Pesquisar"
   E clica no valor "<CONTRATO>" apresentado
   E clica no botão "Delete"
   E clica no botão "SIM"
   E clica no botão "Salvar e Finalizar"
   Então o sistema executa a ação e exibe a mensagem de "Sucesso"

 Exemplos:
   | CONTRATO     | 
   | S14526287    | 

  @CASO-17 
  Esquema do Cenario: Usuário Analista limpa dados dentro de um contrato
  Dado que o usuário está na página inicial
  E clica no módulo de "Contratos"
  E clica na seção "Contrato"
  Quando ele insere o valor "S14526287" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no valor "S14526287" apresentado
  E clica no botão "Limpar"
  Entao a tabela retorna todos os "<CAMPOS>" necessários em branco 
   #Depois refatorar e testar com o botão de salvar 
Exemplos:
  | CAMPOS         |
  |  Contrato      |
  |  Cnpj          |
  |  Fornecedor    |

  @CASO-18 
   Esquema do Cenario: Usuário Analista salva e finaliza alterações dentro de um contrato
   Dado que o usuário está na página inicial
   E clica no módulo de "Contratos"
   E clica na seção "Contrato"
   Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
   E clica no botão "Pesquisar"
   E clica no valor "<CONTRATO>" apresentado
   E insere o valor "<EMAIL>" no campo "E-mail Documentação Trabalhista"
   E clica no botão "Salvar e Finalizar" 
   Então o sistema executa a ação e exibe a mensagem de "Sucesso"

 Exemplos:
   | CONTRATO     | EMAIL   | 
   | S14526287    | vinnicius.rodrigues@modalgr.com |

   @CASO-19 
   Esquema do Cenario: Usuário Analistan envia email dentro de um contrato
   Dado que o usuário está na página inicial
   E clica no módulo de "Contratos"
   E clica na seção "Contrato"
   Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
   E clica no botão "Pesquisar"
   E clica no valor "<CONTRATO>" apresentado
   E clica no botão "ENVIAR E-MAIL"
   Então o sistema executa a ação e exibe a mensagem de "Sucesso"

 Exemplos:
   | CONTRATO     | 
   | S14526287    | 

   @CASO-20 
   Esquema do Cenario: Usuário Analista gera subcontrato com sucesso
   Dado que o usuário está na página inicial
   E clica no módulo de "Contratos"
   E clica na seção "Contrato"
   Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
   E clica no botão "Pesquisar"
   E clica no valor "<CONTRATO>" apresentado
   E clica no botão "Gerar Subcontrato"
   #E insere o valor "<EMAIL>" no campo "E-mail Documentação Trabalhista"
   E ele insere o valor "<CNPJ>" no campo "CPF/CNPJ/Cód.Fornecedor" do modal
   E ele insere o valor "<Objeto>" no campo "Objeto do contrato" do modal
   E clica no botão "Salvar e Finalizar" do modal
   Então o sistema executa a ação e exibe a mensagem de "Sucesso"

 Exemplos:
   | CONTRATO     | EMAIL                      | CNPJ              | Objeto |
   | S14526287    | reusmilgrau1999@hotmail.com| 13.623.957/0002-17| Serviço|

   @CASO-21 
   Esquema do Cenario: Usuário Analista gera subcontrato preenchendo apenas o campo de CPF
   Dado que o usuário está na página inicial
   E clica no módulo de "Contratos"
   E clica na seção "Contrato"
   Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
   E clica no botão "Pesquisar"
   E clica no valor "<CONTRATO>" apresentado
   E clica no botão "Gerar Subcontrato"
   #E insere o valor "<EMAIL>" no campo "E-mail Documentação Trabalhista"
   E ele insere o valor "<CNPJ>" no campo "CPF/CNPJ/Cód.Fornecedor" do modal
   #E ele insere o valor "<Objeto>" no campo "Objeto do contrato" do modal
   E clica no botão "Salvar e Finalizar" do modal
   Então o sistema não realiza a requisição e retorna a mensagem de "Erro"
   #mensagem de erro, pois o CPF não pertence a nenhum fornecedor

 Exemplos:
   | CONTRATO     | CNPJ|
   | S14526287    |932.596.028-10|  

  @CASO-22 
   Esquema do Cenario: Usuário Analista realiza upload de evidências dentro de um SubContrato
   Dado que o usuário está na página inicial
   E clica no módulo de "Contratos"
   E clica na seção "Contrato"
   Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
   E clica no botão "Pesquisar"
   E clica no valor "<CONTRATO>" apresentado
   E clica no botão "Gerar Subcontrato"
   E clica no botão "Upload" do modal
   E anexa a evidência trabalhista do "Modal"
   E ele insere o valor "<CNPJ>" no campo "CPF/CNPJ/Cód.Fornecedor" do modal
   E ele insere o valor "<Objeto>" no campo "Objeto do contrato" do modal
   E clica no botão "Salvar e Finalizar" do modal
   Então o sistema executa a ação e exibe a mensagem de "Sucesso"
   
 Exemplos:
   | CONTRATO     | CNPJ              | Objeto |
   | S14526287    | 13.623.957/0002-17| Serviço|

  @CASO-23 
   Esquema do Cenario: Usuário Analista visualiza documento anexado em gerar subcontrato
   Dado que o usuário está na página inicial
   E clica no módulo de "Contratos"
   E clica na seção "Contrato"
   Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
   E clica no botão "Pesquisar"
   E clica no valor "<CONTRATO>" apresentado
   E clica no botão "Gerar Subcontrato"
   E clica no botão "Upload" do modal
   E anexa a evidência trabalhista do "Modal"
   E clica no botão "Visualizar"
 
 Exemplos:
   | CONTRATO     | 
   | S14526287    | 
 
  @CASO-24 
  Esquema do Cenario: Usuário Analista remove evidências dentro de um SubContrato
  Dado que o usuário está na página inicial
  E clica no módulo de "Contratos"
  E clica na seção "Contrato"
  Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no valor "<CONTRATO>" apresentado
  E clica no botão "Gerar Subcontrato"
  E clica no botão "Upload" do modal
  E anexa a evidência trabalhista do "Modal"
  E clica no botão "Delete"
  E clica no botão "SIM"
  E ele insere o valor "<CNPJ>" no campo "CPF/CNPJ/Cód.Fornecedor" do modal
  E ele insere o valor "<Objeto>" no campo "Objeto do contrato" do modal
  E clica no botão "Salvar e Finalizar" do modal
  Então o sistema executa a ação e exibe a mensagem de "Sucesso"
   
 Exemplos:
   | CONTRATO     | CNPJ              | Objeto |
   | S14526287    | 13.623.957/0002-17| Serviço|

  @CASO-25 
  Esquema do Cenario: Usuário Analista limpa dados em gerar subcontrato
  Dado que o usuário está na página inicial
  E clica no módulo de "Contratos"
  E clica na seção "Contrato"
  Quando ele insere o valor "S14526287" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no valor "S14526287" apresentado
  E clica no botão "Gerar Subcontrato"
  E ele insere o valor "<CNPJ>" no campo "CPF/CNPJ/Cód.Fornecedor" do modal
  E ele insere o valor "<Objeto>" no campo "Objeto do contrato" do modal
  E clica no botão "Limpar" do modal
  Entao a tabela retorna todos os "<CAMPOS>" necessários em branco 
  #Depois refatorar e testar com o botão de salvar 
Exemplos:
  | CAMPOS         | CNPJ              | Objeto |
  |  Cnpj          | 04.100.193/0001-03| Serviço|

  @CASO26 
  Esquema do Cenario: Usuário Analista adiciona novo contrato com sucesso
  Dado que o usuário está na página inicial
  E clica no módulo de "Contratos"
  E clica na seção "Contrato"
  Quando ele insere o valor "S14526287" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no valor "S14526287" apresentado
  E clica no botão "Adicionar Novo"
  E ele insere o valor "<Contrato>" no campo "Contrato" em adicionar
  E ele insere o valor "<CNPJ>" no campo "CNPJ" em adicionar
  E clica no icone pesquisar
  E ele insere o valor "<Objeto>" no campo "Objeto" em adicionar
  E ele insere o valor "<CRE>" no campo "CRE" em adicionar
  E ele insere o valor "<DataInicial>" no campo "Início Vigência Contrato"
  E ele insere o valor "<DataFinal>" no campo "Fim Vigência Contrato"
  E ele insere o valor "200,00" no campo "ValorContratual" em adicionar
  E ele insere o valor "CORPORATIVO" no campo "Negócio"
  E ele insere o valor "T464322" no campo "MatriculaContraparte" e clica na opção de autocomplete
  #E clica no botão de autocomplete
  E ele insere o valor "(BOOK) EMP EMB METAL LBM" no campo "Empresa" e clica na opção de autocomplete
  E ele insere o valor "ACEROS MEXICO CSN" no campo "Centro Planta" e clica na opção de autocomplete
  E ele insere o valor "<CRE>" no campo "CRE"
  * ele insere o valor "<Negocio>" no campo "Negócio" e clica na opção de autocomplete
  * insere o valor "<EMAIL>" no campo "E-mail Documentação Trabalhista"
  * clica no botão "Salvar e Finalizar"
  Entao o sistema executa a ação e exibe a mensagem de "Sucesso" 

Exemplos:
  | CAMPOS    | CNPJ              | Objeto | Contrato  | CRE    | DataInicial| DataFinal| Negocio | EMAIL|
  |  Cnpj     | 13.623.957/0002-17| Serviço| V12345678 | Sazonal| 25122023   | 29122023 | SERVIÇO | vinniciusrodrigues1999@gmail.com|

  @CASO27 
  Esquema do Cenario: Usuário Analista tenta adicionar novo contrato que já existe
  Dado que o usuário está na página inicial
  E clica no módulo de "Contratos"
  E clica na seção "Contrato"
  Quando ele insere o valor "S14526287" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no valor "S14526287" apresentado
  E clica no botão "Adicionar Novo"
  E ele insere o valor "<Contrato>" no campo "Contrato" em adicionar
  E ele insere o valor "<CNPJ>" no campo "CNPJ" em adicionar
  E clica no icone pesquisar
  E ele insere o valor "<Objeto>" no campo "Objeto" em adicionar
  E ele insere o valor "<CRE>" no campo "CRE" em adicionar
  E ele insere o valor "<DataInicial>" no campo "Início Vigência Contrato"
  E ele insere o valor "<DataFinal>" no campo "Fim Vigência Contrato"
  E ele insere o valor "200,00" no campo "ValorContratual" em adicionar
  E ele insere o valor "CORPORATIVO" no campo "Negócio"
  E ele insere o valor "T464322" no campo "MatriculaContraparte" e clica na opção de autocomplete
  E ele insere o valor "(BOOK) EMP EMB METAL LBM" no campo "Empresa" e clica na opção de autocomplete
  E ele insere o valor "ACEROS MEXICO CSN" no campo "Centro Planta" e clica na opção de autocomplete
  E ele insere o valor "<CRE>" no campo "CRE"
  * ele insere o valor "<Negocio>" no campo "Negócio" e clica na opção de autocomplete
  * insere o valor "<EMAIL>" no campo "E-mail Documentação Trabalhista"
  * clica no botão "Salvar e Finalizar" 
  Então o sistema não realiza a requisição e retorna a mensagem de "Erro"

Exemplos:
  | CAMPOS    | CNPJ              | Objeto | Contrato  | CRE    | DataInicial| DataFinal| Negocio | EMAIL|
  |  Cnpj     | 13.623.957/0002-17| Serviço| S14526287 | Sazonal| 25122023   | 29122023 | SERVIÇO | vinniciusrodrigues1999@gmail.com|

  @CASO28 
  Esquema do Cenario: Usuário Analista adiciona um substituto dentro de adicionar um novo contrato
  Dado que o usuário está na página inicial
  E clica no módulo de "Contratos"
  E clica na seção "Contrato"
  Quando ele insere o valor "V12345678" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no valor "V12345678" apresentado
  #E clica no botão "Fechar"
  E clica no botão "Adicionar Novo"
  E ele insere o valor "<Contrato>" no campo "Contrato" em adicionar
  E ele insere o valor "<CNPJ>" no campo "CNPJ" em adicionar
  E clica no icone pesquisar
  E ele insere o valor "<Objeto>" no campo "Objeto" em adicionar
  E ele insere o valor "<CRE>" no campo "CRE" em adicionar
  E ele insere o valor "<DataInicial>" no campo "Início Vigência Contrato"
  E ele insere o valor "<DataFinal>" no campo "Fim Vigência Contrato"
  E ele insere o valor "200,00" no campo "ValorContratual" em adicionar
  E ele insere o valor "CORPORATIVO" no campo "Negócio"
  E ele insere o valor "T464322" no campo "MatriculaContraparte" e clica na opção de autocomplete
  E ele insere o valor "(BOOK) EMP EMB METAL LBM" no campo "Empresa" e clica na opção de autocomplete
  E ele insere o valor "ACEROS MEXICO CSN" no campo "Centro Planta" e clica na opção de autocomplete
  E ele insere o valor "<CRE>" no campo "CRE"
  * ele insere o valor "<Negocio>" no campo "Negócio" e clica na opção de autocomplete
  * insere o valor "<EMAIL>" no campo "E-mail Documentação Trabalhista"
  E clica no botão + em Matricula Substituto
  E preenche o valor de "<MATRICULA>" no campo "Matrícula Substituto"
  E clica no botão "Salvar e Finalizar"
  Então o sistema executa a ação e exibe a mensagem de "Sucesso"

 Exemplos:
 | CNPJ              | Objeto | Contrato  | CRE    | DataInicial| DataFinal| Negocio | EMAIL                           | MATRICULA|
 | 13.623.957/0002-17| Serviço| V23456789 | Sazonal| 25122023   | 29122023 | SERVIÇO | vinniciusrodrigues1999@gmail.com|  CSO0393 |   

  @CASO29
  Esquema do Cenario: Usuário Analista remove um substituto dentro de adicionar um novo contrato
  Dado que o usuário está na página inicial
  E clica no módulo de "Contratos"
  E clica na seção "Contrato"
  Quando ele insere o valor "V12345678" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no valor "V12345678" apresentado
  #E clica no botão "Fechar"
  E clica no botão + em Matricula Substituto
  E preenche o valor de "<MATRICULA>" no campo "Matrícula Substituto"
  E clica no botão "Salvar e Finalizar"
  Então o sistema executa a ação e exibe a mensagem de "Sucesso"
  
Exemplos:
   | CONTRATO     | MATRICULA   | 
   | V12345678    | CSO0393     |

  @CASO30,31e32
  Esquema do Cenario: Usuário Analista realiza upload e visualiza evidência dentro de um adicionar novo contrato
  Dado que o usuário está na página inicial
  E clica no módulo de "Contratos"
  E clica na seção "Contrato"
  Quando ele insere o valor "V12345678" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no valor "V12345678" apresentado
  E clica no botão "Adicionar Novo"
  E ele insere o valor "<Contrato>" no campo "Contrato" em adicionar
  E ele insere o valor "<CNPJ>" no campo "CNPJ" em adicionar
  E clica no icone pesquisar
  E ele insere o valor "<Objeto>" no campo "Objeto" em adicionar
  E ele insere o valor "<CRE>" no campo "CRE" em adicionar
  E ele insere o valor "<DataInicial>" no campo "Início Vigência Contrato"
  E ele insere o valor "<DataFinal>" no campo "Fim Vigência Contrato"
  E ele insere o valor "200,00" no campo "ValorContratual" em adicionar
  E ele insere o valor "CORPORATIVO" no campo "Negócio"
  E ele insere o valor "T464322" no campo "MatriculaContraparte" e clica na opção de autocomplete
  E ele insere o valor "(BOOK) EMP EMB METAL LBM" no campo "Empresa" e clica na opção de autocomplete
  E ele insere o valor "ACEROS MEXICO CSN" no campo "Centro Planta" e clica na opção de autocomplete
  #E ele insere o valor "<CRE>" no campo "CRE"
  * ele insere o valor "<Negocio>" no campo "Negócio" e clica na opção de autocomplete
  * insere o valor "<EMAIL>" no campo "E-mail Documentação Trabalhista"
  E clica no botão "Upload"
  E anexa a evidência trabalhista do "Contrato"
  E clica no botão "Visualizar"
  E clica no botão "Salvar e Finalizar"
  Então o sistema executa a ação e exibe a mensagem de "Sucesso"
  
Exemplos:
 | CNPJ              | Objeto | Contrato  | CRE    | DataInicial| DataFinal| Negocio | EMAIL                           | MATRICULA|
 | 13.623.957/0002-17| Serviço| F12345678 | Sazonal| 25122023   | 29122023 | SERVIÇO | vinniciusrodrigues1999@gmail.com|  CSO0393 | 

  @CASO33
  Esquema do Cenario: Usuário Analista remove um documento aneoxado dentro de adicionar um novo contrato
  Dado que o usuário está na página inicial
  E clica no módulo de "Contratos"
  E clica na seção "Contrato"
  Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no valor "<CONTRATO>" apresentado
  E clica no botão "Delete"
  E clica no botão "SIM"
  E clica no botão "Salvar e Finalizar"
  Então o sistema executa a ação e exibe a mensagem de "Sucesso"
  
Exemplos:
   | CONTRATO     | 
   | F12345678    |  

  @CASO34
  Esquema do Cenario: Usuário Analista limpa dados dentro de um adicionar novo contrato
  Dado que o usuário está na página inicial
  E clica no módulo de "Contratos"
  E clica na seção "Contrato"
  Quando ele insere o valor "F12345678" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no valor "F12345678" apresentado
  E clica no botão "Adicionar Novo"
  E ele insere o valor "<Contrato>" no campo "Contrato" em adicionar
  E ele insere o valor "<CNPJ>" no campo "CNPJ" em adicionar
  E clica no icone pesquisar
  E ele insere o valor "<Objeto>" no campo "Objeto" em adicionar
  E ele insere o valor "<CRE>" no campo "CRE" em adicionar
  E ele insere o valor "<DataInicial>" no campo "Início Vigência Contrato"
  E ele insere o valor "<DataFinal>" no campo "Fim Vigência Contrato"
  E ele insere o valor "300,00" no campo "ValorContratual" em adicionar
  E ele insere o valor "CORPORATIVO" no campo "Negócio"
  E ele insere o valor "T464322" no campo "MatriculaContraparte" e clica na opção de autocomplete
  E ele insere o valor "(BOOK) EMP EMB METAL LBM" no campo "Empresa" e clica na opção de autocomplete
  E ele insere o valor "ACEROS MEXICO CSN" no campo "Centro Planta" e clica na opção de autocomplete
  #E ele insere o valor "<CRE>" no campo "CRE"
  * ele insere o valor "<Negocio>" no campo "Negócio" e clica na opção de autocomplete
  * insere o valor "<EMAIL>" no campo "E-mail Documentação Trabalhista"
  E clica no botão "Limpar"
  Então a tabela retorna todos os campos do "novo contrato" em branco
  
Exemplos:
 | CNPJ              | Objeto | Contrato  | CRE    | DataInicial| DataFinal| Negocio | EMAIL                           | MATRICULA|
 | 13.623.957/0002-17| Serviço| F2345678 | Sazonal| 25122023   | 29122023 | SERVIÇO | vinniciusrodrigues1999@gmail.com|  CSO0393 | 