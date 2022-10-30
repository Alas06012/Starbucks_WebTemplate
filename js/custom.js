
function verificar(){

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        background: '#C6DCD4',
        color: '#212529',
        timerProgressBar: true,
        timer: 5000,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var descripcion = document.getElementById("descripcion").value;
    let regexAux = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if(nombre == "" || telefono == "" || correo == "" || descripcion == ""){
        Toast.fire({
            title: 'No se pudo enviar',
            text: 'Todos los campos son obligatorios',
            icon: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#006341',


        });
        return false;
    }
    else{

        if(!regexAux.test(correo)){
            Toast.fire({
                title: 'No se pudo enviar',
                text: 'El correo no es valido',
                icon: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#006341',
                
        });
        return false;
        }
        else{
            Toast.fire({
                title: 'Enviado',
                text: 'Su solicitud ha sido enviada '+nombre+'\nGracias por contactarnos!',
                footer: 'Starbucks-Coffee',
                icon: 'success',
                confirmButtonText: 'Ok',
                background: '#474F51',
                color: '#ffffff',
    
    
            });
    
            document.getElementById("nombre").value = "";
            document.getElementById("telefono").value = "";
            document.getElementById("correo").value = "";
            document.getElementById("descripcion").value = "";
    
            return false;
        }
    

        
    }

    
}


/* calculadora en sweetalert */

function sumar(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        background: '#C6DCD4',
        color: '#212529',
        timerProgressBar: true,
        timer: 5000,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })


    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var resultado = parseInt(num1) + parseInt(num2);

    if(num1 == "" || num2 == ""){
        Toast.fire({
            title: 'No se pudo realizar la operación',
            text: 'Todos los campos son obligatorios',
            footer: '- Suma -',
            icon: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#006341',


        });
        return false;
    }
    else{

        Toast.fire({
            title: 'Operación: '+num1+' + '+num2+'',
            text: 'El resultado es: '+resultado+'',
            footer: '- Suma -',
            icon: 'success',
            confirmButtonText: 'Ok',
            background: '#474F51',
            color: '#ffffff',
    
        });
    
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
        return false;

    }
}


function restar(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        background: '#C6DCD4',
        color: '#212529',
        timerProgressBar: true,
        timer: 5000,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })


    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var resultado = parseInt(num1) - parseInt(num2);

    if(num1 == "" || num2 == ""){
        Toast.fire({
            title: 'No se pudo realizar la operación',
            text: 'Todos los campos son obligatorios',
            footer: '- Resta -',
            icon: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#006341',


        });
        return false;
    }
    else{

        Toast.fire({
            title: 'Operación: '+num1+' - '+num2+'',
            text: 'El resultado es: '+resultado+'',
            footer: '- Resta -',
            icon: 'success',
            confirmButtonText: 'Ok',
            background: '#474F51',
            color: '#ffffff',
    
        });
    
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
        return false;

    }
}



function multi(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        background: '#C6DCD4',
        color: '#212529',
        timerProgressBar: true,
        timer: 5000,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })


    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var resultado = parseInt(num1) * parseInt(num2);

    if(num1 == "" || num2 == ""){
        Toast.fire({
            title: 'No se pudo realizar la operación',
            text: 'Todos los campos son obligatorios',
            footer: '- Multiplicación -',
            icon: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#006341',


        });
        return false;
    }
    else{

        Toast.fire({
            title: 'Operación: '+num1+' x '+num2+'',
            text: 'El resultado es: '+resultado+'',
            footer: '- Multiplicación -',
            icon: 'success',
            confirmButtonText: 'Ok',
            background: '#474F51',
            color: '#ffffff',
    
        });
    
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
        return false;

    }
}


function dividir(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        background: '#C6DCD4',
        color: '#212529',
        timerProgressBar: true,
        timer: 5000,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })


    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var resultado = parseInt(num1) / parseInt(num2);

    if(num1 == "" || num2 == ""){
        Toast.fire({
            title: 'No se pudo realizar la operación',
            text: 'Todos los campos son obligatorios',
            footer: '- División -',
            icon: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#006341',


        });
        return false;
    }
    else{

        Toast.fire({
            title: 'Operación: '+num1+' / '+num2+'',
            text: 'El resultado es: '+resultado+'',
            footer: '- División -',
            icon: 'success',
            confirmButtonText: 'Ok',
            background: '#474F51',
            color: '#ffffff',
    
        });
    
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
        return false;

    }
}









