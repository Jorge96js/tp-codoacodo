let estudiante = document.getElementById('estudiante')
let trainee = document.getElementById('trainee')
let junior = document.getElementById('junior')

let form = document.getElementById('form')

let nombre = document.getElementById('nombre')
let email = document.getElementById('email')
let cantidad = document.getElementById('cantidad')
let select = document.getElementById('select')
let error = document.getElementById('error')
let resumen = document.getElementById('resumen')

form.addEventListener('submit', validacion)
resumen.addEventListener('click', descuento)


function alerta(){
error.innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
<div>
  Complete los campos correctamente!
</div>
</div>`
}

function validacion(event){
    event.preventDefault()
    
    if (nombre.value === '' || email.value === '' || cantidad.value === '' || select.value === '') {
        alerta();

        
      }else{
        error.innerHTML = `
        <div class="alert alert-success  d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
          La compra se completo correctamente!
        </div>
      </div>
        `
      }

      setTimeout(()=> {
        
        error.innerHTML = ""
      },5000)

}


function descuento(){
  const precio = 200;
  const totalElement = document.getElementById('total');
  const cantidadTickets = parseInt(cantidad.value);
  const categoria = select.value;
  const compra = precio * cantidadTickets

  let descuento

  
  if(categoria == "Estudiante"){
    descuento =  0.8
  } else if(categoria == "Trainee"){
    descuento =  0.5
  }
  else if( categoria == "Junior"){
    descuento =  0.15
  }
  console.log(categoria)
  const total = compra - compra * descuento;
  if(!total){
    console.error('Campos incompletos')
  }else{
    totalElement.innerHTML = `
    <div class="alert alert-success  d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
    <div>
      El total a pagar es: ${total} con un descuento del ${descuento}% para ${categoria}
    </div>
  </div>
    `
  }

  return [precio, descuento,total];
}

