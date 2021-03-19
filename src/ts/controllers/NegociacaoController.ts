import { NegociacoesView, MensagemView } from '../views/index'
import { Negociacoes, Negociacao } from '../models/index'

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView("#mensagemView")

    constructor() {
        this.inputData = document.querySelector("#data") as HTMLInputElement;
        this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
        this.inputValor = document.querySelector("#valor") as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(event: Event) {
        event.preventDefault();

        const negociacaoNova = new Negociacao(
            new Date(this.inputData.value), 
            Number(this.inputQuantidade.value), 
            Number(this.inputValor.value)
        );

        this.negociacoes.adiciona(negociacaoNova);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso")
    }
}