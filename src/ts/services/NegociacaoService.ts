import { Negociacao, NegociacaoParcial } from "../models/index"

export class NegociacaoService {

    obterNegociacoes(): Promise<Array<Negociacao>> {
        return fetch("http://localhost:8080/dados")
            .then(res => res.json())
            .then((dados: Array<NegociacaoParcial>) =>
                dados
                    .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch(err => {
                console.error(err)
                return [];
            })
    }
}