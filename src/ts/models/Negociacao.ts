import { EnforceEquality } from "./EnforceEquality";

export class Negociacao implements EnforceEquality<Negociacao> {
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

    get volume() {
        return this.quantidade * this.valor;
    }

    public toString(): string {
        return `
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor},
        Volume: ${this.volume}
        `
    }

    public isEqual(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate() 
                && this.data.getMonth() === this.data.getMonth() 
                && this.data.getFullYear() === this.data.getFullYear();
    }
}