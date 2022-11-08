function cargarForm(){
    let op = document.getElementById('selectFigura').value;
    if(op == 0){
        document.getElementById('areaForm').innerHTML = 
        '<label class="form-label text-center text-danger">Seleccione la firgura primero</label>';
    }
    else if(op == 1){
        document.getElementById('areaForm').innerHTML = 
        '<label for="txtLado" class="form-label">Ingrese el lado:</label>'+
        '<input type="number" name="txtLado" id="txtLado" class="form-control">';
    }
    else if (op == 2){
        document.getElementById('areaForm').innerHTML = 
        '<label for="txtradio" class="form-label">Ingrese el radio:</label>'+
        '<input type="number" name="txtradio" id="txtradio" class="form-control">';
    }
    else if(op == 3 || op == 4 ){
        document.getElementById('areaForm').innerHTML =
        '<label for="txtbase" class="form-label">Ingrese el base:</label>'+
        '<input type="number" name="txtbase" id="txtbase" class="form-control">'+
        '<label for="txtaltura" class="form-label">Ingrese el altura:</label>'+
        '<input type="number" name="txtaltura" id="txtaltura" class="form-control">';
        
    }
}

function calcularArea() {
    let op = document.getElementById('selectFigura').value;
    let area = 0;
    if(op == 1){
        let lado = parseInt(document.getElementById('txtLado').value);
        area = lado * 4;
    }
    else if(op == 2){
        let radio = parseInt(document.getElementById('txtradio').value);
        area = Math.PI * Math.pow(radio,2);
    }
    else if(op == 3){
        let base = parseInt(document.getElementById('txtbase').value);
        let altura = parseInt(document.getElementById('txtaltura').value);
       area = base * altura ;
    }
    else if(op == 4){
        let base = parseInt(document.getElementById('txtbase').value);
        let altura = parseInt(document.getElementById('txtaltura').value);
       area = base * altura / 2;
    }
    document.getElementById('txtResult').innerHTML = "Area: " + area;
}