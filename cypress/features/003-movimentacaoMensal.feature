# language: pt
Funcionalidade: Movimentação Mensal

  @CASO-1
  Cenario: Usuário Analista acessa a tela de movimentação Mensal
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Entao o usuário é redirecionado para a tela de Movimentação Mensal

  @CASO-2
  Esquema do Cenario: Usuário Analista pesquisa contrato por filtro de contrato
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
    E clica no botão "Pesquisar"
    Então a tabela retorna o dado esperado "<CONTRATO>"

    Exemplos: 
      | CONTRATO   | CNPJ/CPF/PASSAPORTE | FORNECEDOR                                        | CONTRAPARTE                     |
      | S14526287  |  13.623.957/0002-17 | CBSI COMPANHIA BRASILEIRA DE SERVICINFRAESTRUTURA | RICARDO GARCIA DOS SANTOS       |
      | 4600024342 |  17.271.755/0001-23 | TASK FORCE INSTALACOES INDUSTRIAISEIRELI          | MARCELO LAURIANO PEREIRA JUNIOR |


  @CASO-3.1
  Esquema do Cenario: Usuário Analista pesquisa contrato por filtro de CPF/Passaporte
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele insere o valor do CPF no campo "CPF/Passaporte"
    E clica no botão "Pesquisar"
    Então a tabela retorna o contrato relacionado ao "<CNPJ/CPF/PASSAPORTE>" do contrato

    Exemplos: 
      | CNPJ/CPF/PASSAPORTE |
      |      079.336.757-35 |

  @CASO-4
  Esquema do Cenario: Usuário Analista pesquisa contrato por filtro de fornecedor
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele insere o valor "<FORNECEDOR>" no campo "Fornecedor" de movimentação mensal
    E clica no botão "Pesquisar"
    Então a tabela retorna o contrato relacionado ao "<FORNECEDOR>" do contrato

    Exemplos: 
      | FORNECEDOR               |
      | MAGNESITA REFRATARIOS SA |

  @CASO-5
  Esquema do Cenario: Usuário Analista pesquisa contrato por filtro de status
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele clica no campo "Status" e seleciona o "<STATUS>"
    E clica no botão "Pesquisar"
    Então a tabela retorna os contratos relacionados ao status "<STATUS>"

    Exemplos: 
      | STATUS          |
      | Sem Mobilização |
      | Com Mobilização |
      | Compartilhado   |
      | Todos           |

  @CASO-6
  Esquema do Cenario: Usuário Analista pesquisa contrato por filtro de Tipos Movimentações
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele clica no campo "Tipos Movimentações" e seleciona o "<TIPOS>"
    E clica no botão "Pesquisar"
    Então a tabela retorna os contratos relacionados ao status "<TIPOS>"

    Exemplos: 
      | TIPOS           |
      | Cadastradas     |
      | Não Cadastradas |
      | Todas           |

  # @CASO-7
  # Esquema do Cenario: Usuário Analista pesquisa contrato por Diretoria executiva
  #   Dado que o usuário está na página inicial
  #   E clica no módulo de "Efetivos"
  #   E clica na seção "Movimentação Mensal"
  #   Quando ele clica no campo "Diretoria Executiva" e seleciona o "<FILTRO>"
  #   E clica no botão "Pesquisar"
  #   Então a tabela retorna os contratos relacionados ao status "<FILTRO>"

  #   Exemplos: 
  #     | FILTRO                                  |
  #     | DIRETORIA EXECUTIVA PRODUCAO SIDERURGIA |
  #     | DIRETORIA INVESTIMENTOS MINERACAO       |
  #     | DIRETORIA SUPERINTENDENCIA MINERACAO    |
  #     | DIRETORIA EXECUTIVA DE FINANÇAS         |
  #     | DIRETORIA ADMINISTRATIVA FINANCEIRA     |

  @CASO-8
  Esquema do Cenario: Usuário Analista pesquisa contrato por filtro de validação Analista
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele clica no campo "Tipos Movimentações" e seleciona o "<TIPOS>"
    E clica no botão "Pesquisar"
    Então a tabela retorna os contratos relacionados ao status "<TIPOS>"

    Exemplos: 
      | TIPOS       |
      | Cadastradas |

  @CASO-9
  Esquema do Cenario: Usuário Analista pesquisa contrato por filtro de validação Contraparte
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele clica no campo "Tipos Movimentações" e seleciona o "<TIPOS>"
    E clica no botão "Pesquisar"
    Então a tabela retorna os contratos relacionados ao status "<TIPOS>"

    Exemplos: 
      | TIPOS       |
      | Cadastradas |

  # @CASO-10
  # Esquema do Cenario: Usuário Analista pesquisa contrato por filtro de Diretoria
  #   Dado que o usuário está na página inicial
  #   E clica no módulo de "Efetivos"
  #   E clica na seção "Movimentação Mensal"
  #   Quando ele clica no campo "Diretoria" e seleciona o "<FILTRO>"
  #   E clica no botão "Pesquisar"
  #   Então a tabela retorna os contratos relacionados ao status "<FILTRO>"

  #   Exemplos: 
  #     | FILTRO                                         |
  #     | DIRETORIA DE PRODUTIVIDADE E GERAÇÃO DE RISCOS |
  #     | DIRETORIA DE SUPRIMENTOS                       |

  # @CASO-11
  # Esquema do Cenario: Usuário Analista pesquisa contrato por filtro de Gerência Geral
  #   Dado que o usuário está na página inicial
  #   E clica no módulo de "Efetivos"
  #   E clica na seção "Movimentação Mensal"
  #   Quando ele clica no campo "Gerência Geral" e seleciona o "<FILTRO>"
  #   E clica no botão "Pesquisar"
  #   Então a tabela retorna os contratos relacionados ao status "<FILTRO>"

  #   Exemplos: 
  #     | FILTRO                              |
  #     | GERENCIA GERAL DE METALURGIA DO ACO |

  # @CASO-12
  # Esquema do Cenario: Usuário Analista pesquisa contrato por filtro de Gerência
  #   Dado que o usuário está na página inicial
  #   E clica no módulo de "Efetivos"
  #   E clica na seção "Movimentação Mensal"
  #   Quando ele clica no campo "Gerência" e seleciona o "<FILTRO>"
  #   E clica no botão "Pesquisar"
  #   Então a tabela retorna os contratos relacionados ao status "<FILTRO>"

  #   Exemplos: 
  #     | FILTRO                                   |
  #     | GERENCIA DE ACIARIA                      |
  #     | GERENCIA DE TECNOLOGIA EQUIP E PROCESSOS |

  @CASO-13
  Esquema do Cenario: Usuário Analista pesquisa contrato por filtro de competência
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele insere o valor "<DATA INÍCIO>" no campo "Competência (Início)" e insere o valor "<DATA FIM>" no campo "Competência (Fim)"
    E clica no botão "Pesquisar"
    Então a tabela retorna os contratos relacionados ao status "competência"

    Exemplos: 
      | DATA INÍCIO | DATA FIM |
      |     11/2023 |  12/2023 |

  @CASO-14
  Esquema do Cenario: Usuário Analista limpa campos de pesquisa dos filtros
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele insere o valor "<DATA INÍCIO>" no campo "Competência (Início)" e insere o valor "<DATA FIM>" no campo "Competência (Fim)"
    E ele insere o valor do CPF no campo "CPF/Passaporte"
    E ele insere o valor "<CONTRATO>" no campo "Contrato"
    E clica no botão "Limpar"
    Então os inputs em "Movimentação Mensal" são limpos

    Exemplos: 
      | DATA INÍCIO | DATA FIM | CNPJ/CPF/PASSAPORTE | CONTRATO  |
      |     11/2023 |  12/2023 |      079.336.757-35 | S14526287 |

  @CASO-15
  Cenario: Usuário Analista valida os itens por página em Movimentação mensal
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele visualiza a tabela
    Entao devem ser exibidos 15 itens por página

  # @CASO-16
  # Cenario: Usuário Analista muda página em Movimentação mensal
  #   Dado que o usuário está na página inicial
  #   E clica no módulo de "Efetivos"
  #   E clica na seção "Movimentação Mensal"
  #   Quando ele clica no seletor de página "5"
  #   Entao a tabela retorna os contratos da página 5

  @CASO-17
  Esquema do Cenario: Usuário Analista visualiza contratos de efetivos sem mobilização
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
    E clica no botão "Pesquisar"
    E clica no contrato "<CONTRATO>" com competência "<COMPETENCIA>
    E seleciona a opção "Sem Mobilização"
    #E verifica se o botão "Replicar para atual" está desabilitado
    Entao verifica que em movimentação mensal visão individual "Não há lançamento de efetivo"

    Exemplos: 
      | CONTRATO   | COMPETENCIA |
      | 4502904269 |     02/2023 |

  @CASO-18
  Esquema do Cenario: Usuário Analista visualiza contratos de efetivos sem mobilização e com lançamentos de efetivos
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
    Quando ele clica no campo "Status" e seleciona o "<STATUS>"
    E clica no botão "Pesquisar"
    E clica no contrato "<CONTRATO>" com competência "<COMPETENCIA>"
    E seleciona a opção "Sem Mobilização"
    E verifica se o botão "Replicar para atual" está desabilitado
    Entao verifica que em movimentação mensal visão individual "há lançamentos de efetivos"

    Exemplos: 
      | CONTRATO   | STATUS          | COMPETENCIA |
      | 4502904269 | Sem Mobilização |     01/2023 |

  @CASO-19
  Esquema do Cenario: Usuário Analista visualiza contratos de efetivos com mobilização e sem lançamentos de efetivos
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
    Quando ele clica no campo "Status" e seleciona o "<STATUS>"
    E clica no botão "Pesquisar"
    E clica no contrato "<CONTRATO>"
    E seleciona a opção "Com Mobilização"
 #E verifica se o botão "Upload" está desabilitado
    Entao verifica que em movimentação mensal visão individual "Não possui dados nesta competencia"

    Exemplos: 
      | CONTRATO   | STATUS          |
      | 4501165081 | Com Mobilização |

  @CASO-20
  Esquema do Cenario: Usuário Analista visualiza contratos de efetivos com mobilização e com lançamentos de efetivos
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
    Quando ele clica no campo "Status" e seleciona o "<STATUS>"
    E clica no botão "Pesquisar"
    E clica no contrato "<CONTRATO>" com competência "<COMPETENCIA>"
    E seleciona a opção "Com Mobilização"
  #E verifica se o botão "Replicar para atual" está desabilitado
    Entao verifica que em movimentação mensal visão individual "há lançamentos de efetivos"

    Exemplos: 
      | CONTRATO   | STATUS          | COMPETENCIA |
      | 4502904269 | Com Mobilização |     12/2022 |

  @CASO-21
  Esquema do Cenario: Usuário Analista visualiza contratos de efetivos somente compartilhado
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
    Quando ele insere o valor "<DATA INÍCIO>" no campo "Competência (Início)" e insere o valor "<DATA FIM>" no campo "Competência (Fim)"
    Quando ele clica no campo "Status" e seleciona o "<STATUS>"
    E clica no botão "Pesquisar"
    E clica no contrato "<CONTRATO>" com competência "<COMPETENCIA>"
    E seleciona a opção "Compartilhado"
  #E verifica se o botão "Replicar para atual" está desabilitado
    E verifica o "<contratoVinculado>" a qual está vinculado
    Entao verifica que em movimentação mensal visão individual "há lançamentos de efetivos"

    Exemplos: 
      | CONTRATO   | STATUS        | COMPETENCIA | DATA INÍCIO | DATA FIM | contratoVinculado |
      | 4600019678 | Compartilhado |     01/2023 |     01/2023 |  01/2023 |        4600021476 |

  @CASO-22
  Esquema do Cenario: Usuário Analista faz download do template em movimentação mensal
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
    E clica no botão "Pesquisar"
    E clica no contrato "<CONTRATO>"
    E clica no botão "Download Template"
    Então o sistema realiza o download do "template"

    Exemplos: 
      | CONTRATO   |  
      | 4503325069 |
  #colocar um contrato diferente que tenha algum efetivo. 

@CASO-23
  Esquema do Cenario: Usuário Analista adiciona linha de efetivo físico ativo em movimentação mensal na competencia atual
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
    E clica no botão "Pesquisar"
    E clica no contrato "<CONTRATO>"
    E clica no botão "+ Adicionar Linha"
    E ele clica no campo "Nacionalidade" e seleciona o "Brasileiro"
    E ele insere o valor "<CPF>" no campo "CPF" do modal
    E ele clica no campo "Gênero" e seleciona o "Masculino"
    E ele insere o valor "<NOME>" no campo "Nome" do modal
    E ele clica no campo "Status do colaborador" e seleciona o "<STATUS>"
    E ele insere o valor "<DATA_ADMISSÃO>" no campo "Data Admissão" do modal
    E ele clica no campo "Tipo Efetivo" e seleciona o "<TIPO_EFETIVO>"
    E ele insere o valor "<FUNÇÃO>" no campo "Função" do modal
    E ele clica no campo "Categoria" e seleciona o "<CATEGORIA>"
    E clica no botão "Salvar" do modal
    Entao clica no botão "SALVAR E VERIFICAR"

    Exemplos: 
      | CONTRATO    | CPF            | NOME              | STATUS | DATA_ADMISSÃO | TIPO_EFETIVO | FUNÇÃO             | CATEGORIA   |
      | 001110      | 595.433.760-85 | Usuário de testes | Ativo  | 08/01/2024    | CLT          | Analista de Testes | Operacional |

  # @CASO-24
  # Esquema do Cenario: Usuário Analista remove efetivo físico em movimentação mensal na competência atual
  #   Dado que o usuário está na página inicial
  #   E clica no módulo de "Efetivos"
  #   E clica na seção "Movimentação Mensal"
  #   Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
  #   E clica no botão "Pesquisar"
  #   E clica no contrato "<CONTRATO>"
  #   E clica no botão "Remover efetivo"
  #   E clica no botão "Sim"
  #   Entao clica no botão "SALVAR E VERIFICAR"

  #   Exemplos: 
  #     | CONTRATO    |
  #     | 001110      | 

  @CASO-25
    Esquema do Cenario: Usuário Analista edita movimentação de efetivo físico em movimentação mensal na competência atual
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
    E clica no botão "Pesquisar"
    E clica no contrato "<CONTRATO>"
    E clica no botão "Editar efetivo" e edita o nome do efetivo "VINNICIUS"
    E ele insere o valor "<NOME>" no campo "Nome" do modal
    E clica no botão "Salvar" do modal
    Entao o sistema executa a ação e exibe a mensagem de "Sucesso"

    Exemplos: 
      | CONTRATO    | NOME  |
      | 001110      | Vinni |

@CASO-26
Esquema do Cenario: Usuário Analista adiciona movimentação de efetivos através do upload de uma planilha. 
  Dado que o usuário está na página inicial
  E clica no módulo de "Efetivos"
  E clica na seção "Movimentação Mensal"
  Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no contrato "<CONTRATO>"
  E clica no botão "Upload"
  E anexa a planilha de "movimentação mensal correta"
  E clica no botão "SALVAR E VERIFICAR" do modal
  Entao o sistema executa a ação e exibe a mensagem de "Sucesso"

  Exemplos: 
    | CONTRATO    | NOME  |
    | 001110      | Vinni |

@CASO-27
Esquema do Cenario: Usuário Analista tenta inserir efetivos que já estão contidos na movimentação da competência atual
  Dado que o usuário está na página inicial
  E clica no módulo de "Efetivos"
  E clica na seção "Movimentação Mensal"
  Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no contrato "<CONTRATO>"
  E clica no botão "Upload"
  E anexa a planilha de "movimentação mensal duplicada"
  E clica no botão "SALVAR E VERIFICAR" do modal
  Entao o sistema executa a ação e exibe um "alerta de erro" pois o efetivo já foi lançado

Exemplos: 
  | CONTRATO    | 
  | 001110      | 

@CASO-28
Esquema do Cenario: Usuário Analista remove efetivo que já está contido na movimentação da competência atual de algum contrato
  Dado que o usuário está na página inicial
  E clica no módulo de "Efetivos"
  E clica na seção "Movimentação Mensal"
  Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no contrato "<CONTRATO>"
  E clica no botão "Remover" do efetivo "<NOME>"
  E clica no botão "Sim"
  E clica no botão "SALVAR E VERIFICAR" do modal
  Entao o sistema executa a ação e exibe a mensagem de "Sucesso"

  Exemplos: 
    | CONTRATO    | NOME  |
    | 001110      | GIAN MARCOS DA SILVA COELHO |

@CASO-29
Esquema do Cenario: Usuário Analista faz o download do pdf dos contratos com lançamentos de efetivos
  Dado que o usuário está na página inicial
  E clica no módulo de "Efetivos"
  E clica na seção "Movimentação Mensal"
  Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no contrato "<CONTRATO>"
  E clica no botão "Download do PDF"
  Então o sistema realiza o download do "PDF"

  Exemplos: 
    | CONTRATO   |
    | 001110 |
 
@CASO-30
Esquema do Cenario: Usuário Analista faz o download da planilha Excel do contrato com lançamento de efetivos
  Dado que o usuário está na página inicial
  E clica no módulo de "Efetivos"
  E clica na seção "Movimentação Mensal"
  Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no contrato "<CONTRATO>"
  E clica no botão "Download do Excel"
  Então o sistema realiza o download do "Excel"

  Exemplos: 
    | CONTRATO   |
    | 001110 |

  @CASO-31
  Esquema do Cenario: Usuário Analista clica no botão voltar em movimentação mensal
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
    Quando ele insere o valor "<DATA INÍCIO>" no campo "Competência (Início)" e insere o valor "<DATA FIM>" no campo "Competência (Fim)"
    Quando ele clica no campo "Status" e seleciona o "<STATUS>"
    E clica no botão "Pesquisar"
    E clica no contrato "<CONTRATO>" com competência "<COMPETENCIA>"
    E seleciona a opção "Compartilhado"
    E verifica se o botão "Replicar para atual" está desabilitado
    E clica no botão "Voltar"
    Entao o sistema redireciona o usuário para a página de "Pesquisar"

    Exemplos: 
      | CONTRATO   | STATUS        | COMPETENCIA | DATA INÍCIO | DATA FIM | contratoVinculado |
      | 4600019678 | Compartilhado |     01/2023 |     01/2023 |  01/2023 |        4600021476 |

@CASO-38
Esquema do Cenario: Usuário Analista valida o campo de Total Efetivo em Movimentação Mensal
  Dado que o usuário está na página inicial
  E clica no módulo de "Efetivos"
  E clica na seção "Movimentação Mensal"
  Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no contrato "<CONTRATO>"
  E clica no botão "SALVAR E VERIFICAR" do modal
  E o sistema executa a ação e exibe a mensagem de "Sucesso"
  E clica no botão "Fechar"
  Entao ao verificar o campo "Total Efetivo" deve ser exibido o valor correto


  Exemplos: 
    | CONTRATO   | 
    | 001110     | 

@CASO-40
  Esquema do Cenario: Usuário Analista valida o campo Mês atual em movimentação mensal
  Dado que o usuário está na página inicial
  E clica no módulo de "Efetivos"
  E clica na seção "Movimentação Mensal"
  Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no contrato "<CONTRATO>"
  E clica no botão "SALVAR E VERIFICAR" do modal
  E o sistema executa a ação e exibe a mensagem de "Sucesso"
  E clica no botão "Fechar"
  Entao ao verificar o campo "<CAMPO>" deve ser exibido o valor correto


  Exemplos: 
    | CONTRATO   |   CAMPO   |
    | 001110     | Mês atual |

  @CASO-41
  Esquema do Cenario: Usuário Analista filtra por contratos com movimentações não cadastradas em competências anteriores
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele clica no campo "Tipos Movimentações" e seleciona o "<TIPOS>"
    E ele insere o valor "<DATA INÍCIO>" no campo "Competência (Início)" e insere o valor "<DATA FIM>" no campo "Competência (Fim)"
    E clica no botão "Pesquisar"
    Então o sistema não retorna os contratos de "Movimentações não cadastradas" de competências anteriores

    Exemplos: 
      | TIPOS           | DATA INÍCIO | DATA FIM |
      | Não Cadastradas |     01/2012 |  12/2023 |

@CASO-42
Esquema do Cenario: Usuário Analista tenta inserir Hrs Normais Trabalhadas acima do limite da CLT
  Dado que o usuário está na página inicial
  E clica no módulo de "Efetivos"
  E clica na seção "Movimentação Mensal"
  Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
  E clica no botão "Pesquisar"
  E clica no contrato "<CONTRATO>"
  E clica no botão "SALVAR E VERIFICAR" do modal
  E o sistema executa a ação e exibe a mensagem de "Sucesso"
  E clica no botão "Fechar"
  E ele insere o valor "<HORAS TRABALHADAS>" no campo "Hrs Normais Trabalhadas"
  Entao o sistema exibe a mensagem "Hora trabalhada não pode ser maior que 660."


  Exemplos: 
    | CONTRATO   | HORAS TRABALHADAS |
    | 001110     |     800,00        | 

@CASO43
  Esquema do Cenario: Usuário Analista realiza movimentação em um contrato da competencia atual
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
    Quando ele insere o valor "<DATA INÍCIO>" no campo "Competência (Início)" e insere o valor "<DATA FIM>" no campo "Competência (Fim)"
    E clica no botão "Pesquisar"
    E clica no contrato "<CONTRATO>" com competência "<COMPETENCIA>"
    E seleciona a opção "Com Mobilização"
    # E clica no botão "+ Adicionar Linha"
    # E ele clica no campo "Nacionalidade" e seleciona o "Brasileiro"
    # E ele insere o valor "<CPF>" no campo "CPF" do modal
    # E ele clica no campo "Gênero" e seleciona o "Masculino"
    # E ele insere o valor "<NOME>" no campo "Nome" do modal
    # E ele clica no campo "Status do colaborador" e seleciona o "<STATUS>"
    # E ele insere o valor "<DATA_ADMISSÃO>" no campo "Data Admissão" do modal
    # E ele clica no campo "Tipo Efetivo" e seleciona o "<TIPO_EFETIVO>"
    # E ele insere o valor "<FUNÇÃO>" no campo "Função" do modal
    # E ele clica no campo "Categoria" e seleciona o "<CATEGORIA>"
    # E clica no botão "Salvar" do modal
    Entao clica no botão "SALVAR E VERIFICAR"
    E clica no botão "Fechar"
    E ele insere o valor "<HORASTRABALHADAS>" no campo "Hrs Normais Trabalhadas"
    E ele insere o valor "<JUSTIFICATIVA>" no campo "Justificativa de Variação" 
    E ele insere o valor "<TOTALSALARIOBASE>" no campo "Total Salário Base"
    E ele insere o valor "<TOTALFOLHAPAGAMENTO>" no campo "Total Folha de Pagamento"
    #E ele insere o valor "<JUSTIFICATIVA2>" no campo "Justificativa de Variação das horas extras"
    #E ele insere o valor "<JUSTIFICATIVA2>" no campo "Justificativa de Variação do Salário Base"
    E clica no botão "Validar"
    Entao o sistema executa a ação e exibe a mensagem de "Sucesso"

    Exemplos: 
      | CONTRATO    | CPF            | NOME              | STATUS | DATA_ADMISSÃO | TIPO_EFETIVO | FUNÇÃO             | CATEGORIA     | COMPETENCIA | DATA INÍCIO | DATA FIM | HORASTRABALHADAS | JUSTIFICATIVA | TOTALSALARIOBASE | TOTALFOLHAPAGAMENTO |
      | FU0022024 | 421.549.310-22 | N. Fullkrug | Ativo  | 08/03/2024     | CLT          | Analista de Testes | Operacional          |  02/2024   |    02/2024   |  03/2024 | 220,00 | Testando a automação com mais de trinta caracteres e validando | 2.000,00 |               2.000,00         |
      #| FU0022024 | 147.921.740-90 | Patrick Schick | Ativo  | 08/03/2024    | CLT          | Analista de Testes | Operacional| 02/2024            |  02/2024     |  03/2024 |

@CASO43
  Esquema do Cenario: Usuário Analista realiza movimentação adicionando efetivos em um contrato da competencia atual
    Dado que o usuário está na página inicial
    E clica no módulo de "Efetivos"
    E clica na seção "Movimentação Mensal"
    Quando ele insere o valor "<CONTRATO>" no campo "Contrato"
    Quando ele insere o valor "<DATA INÍCIO>" no campo "Competência (Início)" e insere o valor "<DATA FIM>" no campo "Competência (Fim)"
    E clica no botão "Pesquisar"
    E clica no contrato "<CONTRATO>" com competência "<COMPETENCIA>"
    E seleciona a opção "Com Mobilização"
    E clica no botão "+ Adicionar Linha"
    E ele clica no campo "Nacionalidade" e seleciona o "Brasileiro"
    E ele insere o valor "<CPF>" no campo "CPF" do modal
    E ele clica no campo "Gênero" e seleciona o "Masculino"
    E ele insere o valor "<NOME>" no campo "Nome" do modal
    E ele clica no campo "Status do colaborador" e seleciona o "<STATUS>"
    E ele insere o valor "<DATA_ADMISSÃO>" no campo "Data Admissão" do modal
    E ele clica no campo "Tipo Efetivo" e seleciona o "<TIPO_EFETIVO>"
    E ele insere o valor "<FUNÇÃO>" no campo "Função" do modal
    E ele clica no campo "Categoria" e seleciona o "<CATEGORIA>"
    E clica no botão "Salvar" do modal
    Quando clica no botão "SALVAR E VERIFICAR"
    E clica no botão "Fechar"
    E ele insere o valor "<HORASTRABALHADAS>" no campo "Hrs Normais Trabalhadas"
    E ele insere o valor "<JUSTIFICATIVA>" no campo "Justificativa de Variação" 
    E ele insere o valor "<TOTALSALARIOBASE>" no campo "Total Salário Base"
    E ele insere o valor "<TOTALFOLHAPAGAMENTO>" no campo "Total Folha de Pagamento"
    #E ele insere o valor "<JUSTIFICATIVA2>" no campo "Justificativa de Variação das horas extras"
    #E ele insere o valor "<JUSTIFICATIVA2>" no campo "Justificativa de Variação do Salário Base"
    E clica no botão "Validar"
    Entao o sistema executa a ação e exibe a mensagem de "Sucesso"

    Exemplos: 
      | CONTRATO    | CPF            | NOME              | STATUS | DATA_ADMISSÃO | TIPO_EFETIVO | FUNÇÃO             | CATEGORIA     | COMPETENCIA | DATA INÍCIO | DATA FIM | HORASTRABALHADAS | JUSTIFICATIVA | TOTALSALARIOBASE | TOTALFOLHAPAGAMENTO |
      | FU0022024 | 817.010.200-68 | Goku | Ativo  | 08/03/2024     | CLT          | Analista de Testes | Operacional |  02/2024      |   02/2024   |  03/2024 | 220,00 | Testando a automação com mais de trinta caracteres e validando | 2.000,00 |               2.000,00         |
      | FU0022024 | 898.499.940-70 | Patrick Schick | Ativo  | 08/03/2024    | CLT | Analista de Testes | Operacional | 02/2024       |  02/2024     |  03/2024 | 650,00 |Testando a automação com mais de trinta caracteres e validando | 2.000,00 | 4.000,00 |




 