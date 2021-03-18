class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    adiciona(event: Event) {
        event.preventDefault();

        const negociacao = new Negociacao(new Date(this.inputData.value), Number(this.inputQuantidade.value), Number(this.inputValor.value))

        console.log(negociacao);
        
    }
}