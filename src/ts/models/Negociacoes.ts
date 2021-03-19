import { EnforceEquality } from './EnforceEquality';
import { Negociacao } from './Negociacao';

export class Negociacoes implements EnforceEquality<Negociacoes> {
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

    isEqual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes)
    }
}