import { Negociacao } from './Negociacao';

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    toArray(): Array<Negociacao> {
        return [].concat(this.negociacoes);
    }
}