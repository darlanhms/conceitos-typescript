import { Negociacao } from './Negociacao';

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    toArray(): Array<Negociacao> {
        return ([] as Array<Negociacao>).concat(this.negociacoes);
    }

    toString(): string {
        return JSON.stringify(this.negociacoes);
    }
}