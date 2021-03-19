import { NegociacoesView } from '../views/NegociacoesView'
import { MensagemView } from '../views/MensagemView'
import { Negociacoes } from '../models/Negociacoes'
import { Negociacao } from '../models/Negociacao'

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView("#mensagemView")

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
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