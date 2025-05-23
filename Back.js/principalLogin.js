function activarButton() {
    const botonSaldo = document.querySelector("#idConsulSaldo");
    botonSaldo.addEventListener('click',consultaSaldo)
}

function consultaSaldo(e){
    borrar = cuerpo.children[0];
    cuerpo.removeChild(borrar);
    cuerpo.innerHTML = "";
    cuerpo.innerHTML = `
    <div class=" text-white  w-50 h-75  justify-content-center border border-white border-5 align-items-center " style="background-color: #0037a4;">

        <div class="w-100 h-100 mt-8 pe-10 ps-8  " >
            <div class="div1 d-flex align-items-center  h-25 w-100  ">
                <div class="flex-grow-1">
                    <h2>Consultar tu saldo</h2>
                    <p>Revisa tu saldo disponible</p>
                </div>
                <button type="button" class="btn active d-flex align-items-center me-4" data-bs-toggle="button" aria-pressed="true" onclick="location.href='http://127.0.0.7:5500/log.html'" > 
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                    Salir
                </button>

            </div>
            <div class=" h-50 w-100 d-flex align-items-center justify-center ">
                <h3>Tu saldo es de S/. ${cuentas[validador()].saldo}</h3>    
            </div>
            <footer class=" h-25 w-100 mt-8 " >
                <button type="button" class="btn active d-flex align-items-center me-4" data-bs-toggle="button" aria-pressed="true"  id="btnAtras" > 
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ffffff"><path d="m480-336 51-51-57-57h150v-72H474l57-57-51-51-144 144 144 144Zm0 240q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/></svg>
                    Regresar
                </button>
            </footer>



        </div>

    </div>`
    const btnAtras = document.querySelector("#btnAtras");
    btnAtras.addEventListener('click',validarFrom)
    




}