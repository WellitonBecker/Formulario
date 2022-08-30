function Table(sName = null, sId = null, sClass = null){
    this.name  = sName;
    this.id    = sId;
    this.class = sClass;
};

Table.prototype.getElemento = function(){
    if(this.elemento == undefined){
        this.criaElemento();
    }
    return this.elemento;
}

Table.prototype.criaElemento = function (){
    let oElemento = document.createElement('table'); 

    this.elemento = oElemento;
};

Table.prototype.criaLinha = function (sName = null, sId = null, sClass = null){
    let oLinha = new Tr(sName, sId, sClass);

    this.getElemento().appendChild(oLinha.getElemento());
    return oLinha;
}