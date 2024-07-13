import { bst } from "./dependencies.js";
import Productos from "../models/Productos.js";

let btn = document.getElementById("btn-add");
btn.addEventListener("click", ()=> {
    let nombre = document.getElementById("nombre").value
    let Precio = document.getElementById("Precio").value
    let ID = document.getElementById('ID').value
    let productos = new Productos(nombre, Precio,ID)
    console.log(bst)
    if (bst.add(productos)){
        alert("Registro exitoso");
    }
    else
        alert("Ocurrio un problema");

        document.getElementById('nombre').value = '';
        document.getElementById('Precio').value = '';
        document.getElementById('ID').value = '';
    });


    let btn_buscar = document.getElementById('btn-search');

    btn_buscar.addEventListener("click",()=>{
    let nombre = document.getElementById('buscar').value;
    let identificadorBebida = bst.search(nombre);

    if(identificadorBebida == null){
        document.getElementById('resultado').innerHTML = 'La bebida no se encuentra en los productos.';
    } else {
        document.getElementById('resultado').innerHTML = `La bebida ${identificadorBebida.value.nombre} sí se encuentra, su precio es $${identificadorBebida.value.precio} y su ID es de ${identificadorBebida.value.ID}`;
    }
    document.getElementById('buscar').value = "";
}); 



    let btn_min = document.getElementById('min');
    btn_min.addEventListener('click' , function(){
        let node = bst.min();
        document.getElementById('resultado1').innerHTML = `La bebida con el menor ID es ${node.value.nombre} su precio es $${node.value.precio} y su ID es de ${node.value.ID}`;
    });

    let btn_max = document.getElementById('max');
    btn_max.addEventListener('click' , function(){
        let node = bst.max();
        document.getElementById('resultado2').innerHTML = `La bebida con el mayor ID es ${node.value.nombre} su precio es $${node.value.precio} y su ID es de ${node.value.ID}`;
    });


    let btn_preo = document.getElementById('btn-preo');

    btn_preo.addEventListener('click', function() {
        let result = [];
        bst.recorrido((value) => {
            result.push(`Nombre del producto: ${value.nombre}, Precio: ${value.precio}, ID del producto: ${value.ID}`);
        });

        document.getElementById('result4').innerHTML = result.join('<br>')
    })
    

