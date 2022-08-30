function Form(sName, sId = '', sClass = ''){
    this.name  = sName;
    this.id    = sId;
    this.class = sClass;
    this.table = null;
}

Form.prototype.getElemento = function(){
    if(this.elemento == undefined){
        this.criaElemento();
    }
    return this.elemento;
}

Form.prototype.getTable = function(){
    if(this.table == undefined){
        this.criaTable();
    }
    return this.table;
}

Form.prototype.criaElemento = function(){
    let oElemento = document.createElement('form');

    oElemento.setAttribute('id', this.id);
    oElemento.setAttribute('name', this.name);
    oElemento.setAttribute('className', this.class);
    this.elemento = oElemento;
};

Form.prototype.criaTable = function(sName = null, sId = null, sClass = null){
    let oTable = new Table(sName, sId, sClass);

    this.getElemento().appendChild(oTable.getElemento());
    this.table = oTable;
}

Form.prototype.criaComponentes = function(aComponentes){
    let oTable = this.getTable();
    
    aComponentes.forEach(element => {
        let oLinha = oTable.criaLinha(),
            oLabel = new Label(element.title, element.name, 'label_form', 'label'),
            oInput = new Input(element.title, element.type, element.name);

        if(element.type === 'radio'){
            oInput.lista = element.lista;
        }
        if(element.class !== undefined){
            oInput.class = element.class;
        }
        if(element.id !== undefined){
            oInput.id = element.id;
        }
        if(element.width !== undefined){
            oInput.width(element.width);
        }
        if(element.length !== undefined){
            oInput.length(element.length);
        }
        if(element.comportamento !== undefined){
            element.comportamento.forEach(comportamento => {
                oInput.getElemento().addEventListener(comportamento.tipo, comportamento.nome);
            });
        }
        
        oLinha.criaColuna(oLabel, 'td_label', 'td_label');
        oLinha.criaColuna(oInput);
    });
};



