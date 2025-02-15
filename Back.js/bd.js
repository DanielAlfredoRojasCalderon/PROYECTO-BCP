let cuentas = [
    {
        "nombre": "Mali",
        "saldo" : 200,
        "password" : "1234",
        "dni" : 44788834
    },
    {
        "nombre": "Gera",
        "saldo": 150,
        "password": "5678",
        "dni": 10247439 
    },
    {
        "nombre": "Sabi",
        "saldo": 60,
        "password": "9102",
        "dni": 98005362 
    }

];

const buttonLoggin = document.querySelector('#LoginAccess');
const documento = document.querySelector('#DNI')
const contraseña = document.querySelector('#password');
const cuerpo = document.querySelector('#bodyform')
var paginaNueva ; 



buttonLoggin.addEventListener('click',validarFrom);

function validarFrom(e){
    
    
    if ( validador() != -1 ){
        var borrar = cuerpo.children[0]
        cuerpo.removeChild(borrar)
        cuerpo.innerHTML = `
    <div class=" text-white  w-75 h-75  justify-content-center border border-white border-5 align-items-center" style="background-color: #0037a4;">
<!--LOGGIN  -->

        <div class="parent w-100 h-75 mt-8 pe-10 ps-8">
            <div class="div1 d-flex align-items-center ms-6">
                <div class="flex-grow-1">
                    <h2>Bienvenido, ${cuentas[validador()].nombre}¡</h2>
                    <p>¿Qué operación quieres hacer hoy?</p>
                </div>
                <button type="button" class="btn active d-flex align-items-center me-4" data-bs-toggle="button" aria-pressed="true" onclick="location.href='http://127.0.0.7:5500/log.html'" > 
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                    Salir
                </button>

                
            </div>
            <div class="div2">
                <a class="card w-100 h-100 d-flex justify-content-center ps-4  bg-[#F57C00]! text-decoration-none" id="iddeposito" type="button" href="#">
                    <h2 class="text-white ">Ingresar Monto</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="1000 -1000 2000 960" width="105px" fill="white"><path d="M100-500v-80h1500v80H240Z"/></svg>
                    
                </a>

            </div>
            <div class="div3 ms-4">
                <a class="card w-100 h-100 d-flex justify-content-center ps-4 text-decoration-none " type="button"  id="idConsulSaldo" href="#" >
                    <svg class="ms-0" xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="40px" fill="#0000FF"><path d="M160-80q-33 0-56.5-23.5T80-160v-440q0-33 23.5-56.5T160-680h200v-120q0-33 23.5-56.5T440-880h80q33 0 56.5 23.5T600-800v120h200q33 0 56.5 23.5T880-600v440q0 33-23.5 56.5T800-80H160Zm0-80h640v-440H600q0 33-23.5 56.5T520-520h-80q-33 0-56.5-23.5T360-600H160v440Zm80-80h240v-18q0-17-9.5-31.5T444-312q-20-9-40.5-13.5T360-330q-23 0-43.5 4.5T276-312q-17 8-26.5 22.5T240-258v18Zm320-60h160v-60H560v60Zm-200-60q25 0 42.5-17.5T420-420q0-25-17.5-42.5T360-480q-25 0-42.5 17.5T300-420q0 25 17.5 42.5T360-360Zm200-60h160v-60H560v60ZM440-600h80v-200h-80v200Zm40 220Z"/></svg>
                    <h2 class="text-blue-600! ">Consultar Saldo</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="1000 -1000 2000 960" width="105px" fill="#0000FF"><path d="M100-500v-80h1500v80H240Z"/></svg>
                    
                    
                </a>
            </div>
            <div class="div5">
                <a class="card w-100 h-100 d-flex justify-content-center ps-4  bg-[#F57C00]! text-decoration-none  " type="button" href="#" id="id_Retiro_button" >
                    <h2 class="text-white ">Retirar Monto</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="1000 -1000 2000 960" width="105px" fill="white"><path d="M100-500v-80h1500v80H240Z"/></svg>
                    
                </a>
            </div>
            <div class="div6 d-flex flex-column mt-6 me-6 ps-4">
                <h3 class="" >Otras Operaciones</h3>
                <div class="d-flex flex-row gap-4 mt-6 ">
                    <div class=" w-50 h-100 d-flex flex-column justify-content-center ps-4 border border-white border-2 rounded pe-6 ps-4 pt-4 mb-6" >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg>
                        <h5 class="text-white ">Transferir efectivo</h5>
                        
                        
                    </div>
                    <div class=" w-50 h-100 d-flex flex-column justify-content-center pe-4  border border-white border-2 rounded me-4 ps-4 pe-6 pt-6  ">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M263.72-96Q234-96 213-117.15T192-168v-384q0-29.7 21.15-50.85Q234.3-624 264-624h24v-96q0-79.68 56.23-135.84 56.22-56.16 136-56.16Q560-912 616-855.84q56 56.16 56 135.84v96h24q29.7 0 50.85 21.15Q768-581.7 768-552v384q0 29.7-21.16 50.85Q725.68-96 695.96-96H263.72Zm.28-72h432v-384H264v384Zm216.21-120Q510-288 531-309.21t21-51Q552-390 530.79-411t-51-21Q450-432 429-410.79t-21 51Q408-330 429.21-309t51 21ZM360-624h240v-96q0-50-35-85t-85-35q-50 0-85 35t-35 85v96Zm-96 456v-384 384Z"/></svg>
                        <h5 class="text-white w-75 mb-6">Cambiar PIN</h5>
                        
                        
                        
                    </div>

                </div>
                


            </div>
        </div>
  
  

    </div>
    `;
    
    activarButton();
    consultaButton();
    const botonRetirar = document.querySelector("#id_Retiro_button");    
    botonRetirar.addEventListener('click',retiroDinero)
    
    

    }
    else{
        e.preventDefault()

    }

}

function validador(){
    const existe = cuentas.findIndex( ItemObject  =>
                ItemObject.dni == documento.value && ItemObject.password == contraseña.value
         
    )
    console.log(existe)
    i = existe
    return existe

}

