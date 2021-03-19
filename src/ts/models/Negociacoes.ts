import { ExecutionTime } from '../helpers/decorators/ExecutionTime';
import { Negociacao } from './Negociacao';

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    @ExecutionTime()
    toArray(): Array<Negociacao> {
        return ([] as Array<Negociacao>).concat(this.negociacoes);
    }
}