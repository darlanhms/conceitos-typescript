import { NegociacoesView, MensagemView } from '../views/index'
import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index'
import { DomInjection, Throttle } from '../helpers/decorators/index';

export class NegociacaoController {
    @DomInjection("#data")
    private inputData: HTMLInputElement;

    @DomInjection("#quantidade")
    private inputQuantidade: HTMLInputElement;

    @DomInjection("#valor")
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView("#mensagemView")

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
        fetch("http://localhost:8080/dados")
            .then(res => res.json())
            .then((dados: Array<NegociacaoParcial>) => {
                dados
                    .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
                    .forEach(negociacao => {
                        this.negociacoes.adiciona(negociacao)
                    })

                this.negociacoesView.update(this.negociacoes)
                
            })
            .catch(err => {
                console.error(err)
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