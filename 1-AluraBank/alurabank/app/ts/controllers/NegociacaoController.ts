class NegociacaoController{

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    
    private _negaciacoes = new Negociacoes();
    // ou
    // private _negaciacoes: Negociacoes = new Negociacoes();

    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negaciacoes);
    }

    adiciona(event: Event) {

        event.preventDefault();
        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())

        );

        this._negaciacoes.adiciona(negociacao);   
        this._negociacoesView.update(this._negaciacoes);    
        this._mensagemView.update('Negociação adicionada com sucesso!'); 
    }
}