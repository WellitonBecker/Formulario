function Tr(sName = null, sId = null, sClass = null){
    this.name  = sName;
    this.id    = sId;
    this.class = sClass;
};

Tr.prototype.getElemento = function(){
    if(this.elemento == undefined){
        this.criaElemento();
    }
    return this.elemento;
}

Tr.prototype.criaElemento = function (){
    let oElemento = document.createElement('tr'); 

    this.elemento = oElemento;
};

Tr.prototype.criaColuna = function (oElemento = null, sName = null, sId = null, sClass = null){
    let oColuna = new Td(sName, sId, sClass);

    if(oElemento !== null && oElemento instanceof Input){
        if(oElemento.type === 'radio'){
            oElemento.getElemento().forEach(element => {
                oColuna.getElemento().appendChild(element);
            });
        } else {
            oColuna.getElemento().appendChild(oElemento.getElemento());
        }
    } else if(oElemento !== null && oElemento instanceof Label){
        oColuna.getElemento().appendChild(oElemento.getElemento());
    }
    this.getElemento().appendChild(oColuna.getElemento());
    return oColuna;
}