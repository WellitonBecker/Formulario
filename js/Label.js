function Label(sTitulo, sName = '', sId = '', sClass = ''){
    this.title = sTitulo;
    this.name  = sName;
    this.id    = sId;
    this.class = sClass;
};

Label.prototype.getElemento = function(){
    if(this.elemento == undefined){
        this.criaElemento();
    }
    return this.elemento;
}

Label.prototype.criaElemento = function (){
    let oElemento = document.createElement('label'),
        oTitulo   = document.createTextNode(this.title); 

    oElemento.setAttribute('id', this.id);
    oElemento.setAttribute('name', this.name);
    oElemento.setAttribute('className', this.class);
    oElemento.appendChild(oTitulo);
    this.elemento = oElemento;
};