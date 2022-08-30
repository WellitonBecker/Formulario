
function Main(){
    this.divPrincipal = null;
};

Main.prototype.getDivPrincipal = function (){
    if(this.divPrincipal == undefined){
        this.criaDivPrincipal();
    }
    return this.divPrincipal;
};

Main.prototype.getDivSite = function(){
    if(this.divSite == undefined){
        this.divSite = new Div('div_site', 'div_site');
    }
    return this.divSite;
};

Main.prototype.criaDivPrincipal = function (){
    let oDivPrincipal  = new Div('div_principal', 'div_principal', 'div'),
        oFormPrincipal = new Form('fomulario_principal', 'fomulario_principal', 'fomulario');

    oFormPrincipal.criaComponentes(this.getCampos());
    oDivPrincipal.getElemento().appendChild(oFormPrincipal.getElemento());
    this.divPrincipal = oDivPrincipal;
}

Main.prototype.criaFormulario = function (){
    let oDivSite = this.getDivSite();

    oDivSite.getElemento().appendChild(this.getDivPrincipal().getElemento());
    document.body.appendChild(oDivSite.getElemento()); 
};

Main.prototype.getCampos = function(){
    return [
        {
            'type':'texto',
            'name':'Nome', 
            'title':'Nome',
            'width':'400px',
            'length': 100,
        },
        {
            'type':'text',
            'name':'rua',
            'title':'Rua',
            'width':'400px',
            'length': 100,
        },
        {
            'type':'tel',
            'name':'numero',
            'title':'Número',
            'length': 11,
            'width':'150px'
        },
        {
            'type':'texto',
            'name':'cep',
            'title':'CEP',
            'length': 8,
            'width':'150px'
        },
        {
            'type':'radio',
            'name':'nascionalidade',
            'title':'Nacionalidade', 
            'class':'nacionalidade',
            'lista':[
                {
                    'value':'1',
                    'title':'Brasileiro',
                    'id':'radio_brasileiro',
                    'defaultValue':false
                },
                {
                    'value':'2',
                    'title':'Estrangeiro',
                    'id':'radio_estrangeiro',
                    'defaultValue':false
                }
            ]
        },
        {
            'type':'date',
            'name':'dataNascimento',
            'title':'Data de Nascimento',   
            'width':'150px'
        },
        {
            'type':'submit',
            'name':'enviar',
            'title':'',   
            'id':'botao_enviar',
            'width':'174px',
            'comportamento':[
                {
                    'tipo':'click',
                    'nome':oMain.onClickBotaoEnviar
                }
            ]
        }
    ];
}

Main.prototype.onClickBotaoEnviar = function (){
    oMain.divSite = undefined;
    oMain.divPrincipal = undefined;
    setTimeout(() => {
        oMain.criaFormulario();
    }, 200);
}

var oMain = new Main();