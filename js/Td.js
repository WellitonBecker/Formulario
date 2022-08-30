function Td(sName = '', sId = '', sClass = ''){
    this.name  = sName;
    this.id    = sId;
    this.class = sClass;
};

Td.prototype.getElemento = function(){
    if(this.elemento == undefined){
        this.criaElemento();
    }
    return this.elemento;
}

Td.prototype.criaElemento = function (){
    let oElemento = document.createElement('td'); 

    oElemento.setAttribute('id', this.id);
    oElemento.setAttribute('name', this.name);
    oElemento.setAttribute('className', this.class);
    this.elemento = oElemento;
};

