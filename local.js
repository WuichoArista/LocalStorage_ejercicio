function inicio() {
    document.getElementById('guardar').addEventListener('click', () => {
        guardar()
    })
    document.getElementById('eliminar').addEventListener('click', () => {
        eliminar()
    })
    document.getElementById('limpiar').addEventListener('click', () => {
        limpiar()
    })
    document.getElementById('editar').addEventListener('click', () => {
        editar()
    })
    
}

function guardar() {
    const llave = document.getElementById('llave').value
    const valor = document.getElementById('valor').value
    const valor2 = document.getElementById('valor2').value
    let arr=[ valor , valor2 ]
    if(llave && arr !== ""){
        localStorage.setItem(llave,arr)
        document.getElementById('llave').value = ""
        document.getElementById('valor').value = ""
        document.getElementById('valor2').value = ""
    }


}

function eliminar() {
    const llave = document.getElementById('llave').value
    if(localStorage.getItem(llave)) {
        localStorage.removeItem(llave)
        alert('se elimino el item')
    }
}

function limpiar(){
    localStorage.clear();
    alert('se borro los datos completos')
}

function editar() {
    const llave = document.getElementById('llave').value
    const valor = document.getElementById('valor').value
    const valor2 = document.getElementById('valor2').value
    let arr=[ valor , valor2 ]
    if(localStorage.getItem(llave)) {
        localStorage.setItem(llave,arr)
            alert('se modifica')
        }
    
}

window.onload = inicio