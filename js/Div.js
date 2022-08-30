function Div(sName = null, sId = null, sClass = null){
    this.name  = sName;
    this.id    = sId;
    this.class = sClass;
};

Div.prototype.getElemento = function(){
    if(this.elemento == undefined){
        this.criaElemento();
    }
    return this.elemento;
}

Div.prototype.criaElemento = function (){
    let oElemento = document.createElement('div');

    oElemento.setAttribute('id', this.id);
    oElemento.setAttribute('name', this.name);
    oElemento.setAttribute('className', this.class);
    this.elemento = oElemento;
};