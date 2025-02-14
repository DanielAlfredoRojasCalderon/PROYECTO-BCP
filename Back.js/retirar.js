function retiroDinero(e) {
    retiro()
    const button20 = document.querySelector("#id_button_20");
    const button50 = document.querySelector("#id_button_50");
    const button100 = document.querySelector("#id_button_100");
    const button150 = document.querySelector("#id_button_150");
    button20.addEventListener('click', seleccionMonto)
    button50.addEventListener('click', seleccionMonto)
    button100.addEventListener('click', seleccionMonto)
    button150.addEventListener('click', seleccionMonto)
}

function retiro(){
    borrar = cuerpo.children[0];
    cuerpo.removeChild(borrar);
    cuerpo.innerHTML = "";
    cuerpo.innerHTML = `
        <div class=" text-white  w-50 h-75  justify-content-center border border-white border-5 align-items-center " style="background-color: #0037a4;">
<!--LOGGIN  -->

        <div class="w-100 h-100 mt-8 pe-10 ps-8  " >
            <div class="div1 d-flex align-items-center  h-25 w-100  ">
                <div class="flex-grow-1">
                    <h2>Retira tu Dinero</h2>
                    <p>Ingresa o selecciona el monto a retirar </p>
                </div>
                <button type="button" class="btn active d-flex align-items-center me-4" data-bs-toggle="button" aria-pressed="true" onclick="location.href='http://127.0.0.7:5500/log.html'"  > 
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                    Salir
                </button>

            </div>
            <div class=" h-50 w-100 d-flex flex-col align-items-center justify-center" id="idAddTexto">
                <div class="w-100 d-flex flex-row h-75 mix-$cian-600 ">
                    <div class="w-50 h-100  d-flex align-items-center  justify-center ">
                        <form class="d-flex flex-col  h-75 pt-1">
                            
                            <h2 class="mb-4">Ingresa el monto</h2>
                            <input type="number" id="idImput_text" class=" rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Saldo"/>

                            <button type="submit"  class="btn btn-outline-light mt-4" id="idRetiroButton">Retirar</button>

                        </form>

                    </div>
                    <div class="w-50 h-100 d-flex flex-col align-items-center justify-center ">
                        <h2>Selecciona el monto</h2>
                        <div class=" d-flex flex-wrap w-[180px] justify-content-between">
                            <!-- El &nbsp es una espaciado en HTML -->
                            <button type="button" class="btn btn-outline-light mt-4" id="id_button_20" value="20" >S/ 20 &nbsp</button>
                            <button type="button" class="btn btn-outline-light mt-4" id="id_button_50" value="50" >S/ 50 &nbsp</button>
                            <button type="button" class="btn btn-outline-light mt-4" id="id_button_100" value="100" >S/ 100</button>
                            <button type="button" class="btn btn-outline-light mt-4" id="id_button_150" value="150" >S/ 150</button>
                        </div>
                    </div>
                </div>
                
                   

            </div>
            <footer class=" h-25 w-100 mt-8 " >
                <button type="button" class="btn active d-flex align-items-center me-4" data-bs-toggle="button" aria-pressed="true" id="idRegresar" > 
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ffffff"><path d="m480-336 51-51-57-57h150v-72H474l57-57-51-51-144 144 144 144Zm0 240q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/></svg>
                    Regresar
                </button>
            </footer>



        </div>

    </div>
    
    `
    const idRegresar = document.querySelector("#idRegresar");
    idRegresar.addEventListener('click',validarFrom);
    const btnRetiroSaldo = document.querySelector("#idRetiroButton");
    
    btnRetiroSaldo.addEventListener('click', RetirarDinero )
    
}




function RetirarDinero(e) {
    const iptRetirar = document.querySelector("#idImput_text");
    const addTextoRetiro = document.querySelector("#idAddTexto")
    cuentas[validador()].saldo -=parseFloat(iptRetirar.value)
    
    

    try {
        
        const divAgredo = document.querySelector("#IddivAgredos");
        addTextoRetiro.removeChild(divAgredo)

        const text_retiro = document.createElement("div")
        text_retiro.classList.add("h-25","w-100","mt-6", "d-flex", "flex-col","align-items-center")
        text_retiro.setAttribute("id","IddivAgredos")
        text_retiro.innerHTML = `
            <h3>Retiro exitoso</h3> 
                    <p>El monto retirado fue de lala S/${iptRetirar.value}</p>
                    <p>Tu nuevo saldo es de S/${cuentas[validador()].saldo}</p>
        `
        addTextoRetiro.appendChild(text_retiro)
        

    } catch (error) {
        const text_retiro = document.createElement("div")
        text_retiro.classList.add("h-25","w-100","mt-6", "d-flex", "flex-col","align-items-center")
        text_retiro.setAttribute("id","IddivAgredos")
        text_retiro.innerHTML = `
            <h3>Retiro exitoso</h3> 
                    <p>El monto retirado fue de lolo S/${iptRetirar.value}</p>
                    <p>Tu nuevo saldo es de S/${cuentas[validador()].saldo}</p>
        `
        addTextoRetiro.appendChild(text_retiro)
    }
    
    iptRetirar.value = ""


}

function seleccionMonto(e){

    const iptRetirar = document.querySelector("#idImput_text");
    iptRetirar.value = "";
    
    iptRetirar.value = e.target.value;
    const btnRetiroSaldo = document.querySelector("#idRetiroButton");
    btnRetiroSaldo.addEventListener('click', RetirarDinero)
    
    



}


