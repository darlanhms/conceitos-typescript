import { NegociacoesView, MensagemView } from '../views/index'
import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index'
import { DomInjection, Throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/NegociacaoService';

export class NegociacaoController {
    @DomInjection("#data")
    private inputData: HTMLInputElement;

    @DomInjection("#quantidade")
    private inputQuantidade: HTMLInputElement;

    @DomInjection("#valor")
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView("#mensagemView");
    private negociacaoService = new NegociacaoService();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(event: Event) {
        event.preventDefault();

        const data =  new Date(this.inputData.value)

        if (!this.isDiaUtil(data)) {
            this.mensagemView.update("Somente negociações em dias úteis")
            return;
        }

        const negociacaoNova = new Negociacao(
            data, 
            Number(this.inputQuantidade.value), 
            Number(this.inputValor.value)
        );

        this.negociacoes.adiciona(negociacaoNova);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso")
    }

    private isDiaUtil(date: Date): boolean {
        const day = date.getDay();
        return day !== DiaDaSemana.SABADO && day !== DiaDaSemana.DOMINGO
    }

    @Throttle()
    importaDados() {
       this.negociacaoService.obterNegociacoes()
        .then(negociacoes => {
            negociacoes.forEach(negociacao => {
                this.negociacoes.adiciona(negociacao)
            });

            this.negociacoesView.update(this.negociacoes)
        })
        
    }
}

enum DiaDaSemana {
    DOMINGO,
    SEGUNDA,
    TERCA,
    QUARTA,
    QUINTA,
    SEXTA,
    SABADO
}