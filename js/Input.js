function Input(sTitulo, sTipo, sName = '', sId = '', sClass = ''){
    this.title = sTitulo;
    this.type  = sTipo;
    this.name  = sName;
    this.id    = sId;
    this.class = sClass;
    this.lista = null;
};

Input.prototype.getElemento = function(){
    if(this.elemento == undefined){
        this.criaElemento();
    }
    return this.elemento;
}

Input.prototype.criaElemento = function (){
    if(this.type === 'radio'){
        this.criaInputRadio();
    } else {
        let oElemento = document.createElement('input'),
            oTitulo   = document.createTextNode(this.title); 

        oElemento.type = this.type;
        oElemento.required = 'true';
        oElemento.appendChild(oTitulo);
        oElemento.setAttribute('id', this.id);
        oElemento.setAttribute('name', this.name);
        oElemento.setAttribute('className', this.class);
        this.elemento = oElemento;
    }
    
};

Input.prototype.criaInputRadio = function() {
    this.elemento = [];
    this.lista.forEach(element => {
        let oElemento = document.createElement('input'),
            oTitulo   = document.createTextNode(element.title),
            oLabel    = new Label(element.title); 

        oLabel.getElemento().setAttribute('for', element.id);
        oElemento.type = 'radio';
        oElemento.required = 'true';
        oElemento.value = element.value;

        oElemento.appendChild(oTitulo);
        oElemento.setAttribute('id', element.id);
        oElemento.setAttribute('name', this.name);
        oElemento.setAttribute('class', this.class);
        this.elemento.push(oElemento);
        this.elemento.push(oLabel.getElemento());
    });
    
};

Input.prototype.width = function (iValor){
    this.getElemento().style.width = iValor;
}

Input.prototype.length = function (iValor){
    this.getElemento().maxLength = iValor;
}

