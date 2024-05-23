import ElementosLogin from "../elements/login-elements";
import InputID from "./input_page";

const elementosLogin = new ElementosLogin();
const login_generico = new InputID();
const baseUrlHomolog = Cypress.env('hom').BASE_URL;
const baseUrlQA = Cypress.env('qa').BASE_URL;

class EventosLogin {

  // acessarPortal() {
  //   const baseUrl = Cypress.env("BASE_URL");
  //   const BASE = baseUrl;
  //   //this.ambientes = ambientes;
  // }

  modalPortalQA(){
    cy.get("h2").find('span').then(($span) => {
      if (Cypress.$($span).length) {
        if ($span.text().includes("Falha ao acessar.")) {
          cy.get("button").contains("OK").click();
        }
        else {
          this.modalPortalHomologacao("ENTRAR NO PORTAL NGT");
        }
      }
    });
  }

  modalPortalHomologacao(string) { //CRIAR UM MÉTODO NOVO PARA O PORTAL QA. 
    cy.get(elementosLogin.botao()).contains(string).click();
    cy.contains("button", "OK").then(($modal) => {
      if ($modal.length > 0) {
        this.clickBotao("OK");
      }
    });
  }

  validarFormulario(email, senha) {
    cy.get(elementosLogin.email()).type(email);
    cy.get(elementosLogin.senha()).type(senha);
  }

  clickBotao(string) {
    cy.get(elementosLogin.botao()).contains(string).click();
  }

  loginGenerico() {
    //this.acessarPortal();
    //const ambiente = this.ambientes.homologacao;
    cy.visit(baseUrlHomolog);
    this.modalPortalHomologacao("ENTRAR NO PORTAL NGT");
    this.validandoLogin();
  }

  loginQA() {
    //const ambienteQA = this.ambientes.qa;
    this.acessarPortal();
    cy.visit(baseUrl);
    this.modalPortalQA();
    this.validandoLogin();
  }

  loginQAFornecedor() {
    this.acessarPortal();
    //const ambienteQA = this.ambientes.qa;
    cy.visit("https://portal-ngt-qa.mgr.services/#/");
    //this.modalPortalQA();
  }

  validandoLogin() {
    //Validando o botão de falha.
    login_generico.inputLabel("Matrícula").type("T475301");
    login_generico.inputLabel("Senha").type("@Jv74158565");
    this.clickBotao("entrar");
    cy.wait(3000);
  }
}
export default EventosLogin;
