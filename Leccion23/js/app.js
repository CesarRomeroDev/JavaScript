const personas = [
    new Persona('Jan', 'Perez'),
    new Persona('Karla', 'Lara'),
    new Persona('Pepe', 'Perez')
];

function mostrarPersonas(){
    console.log('mostrar personas');
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona._nombre} ${persona._apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma']; //recuperamos el formulario con el id: forma
    const nombre = forma['nombre'];      //dentro del formulario, obtenemos los input con el id: nombre
    const apellido = forma['apellido'];     //dentro del formulario, obtenemos los input con el id: apellido
    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value); //creamos un objeto llamado persona y llamamos nuestras const
        console.log(persona);
        personas.push(persona);     //llamamos nuestro arreglo personas y agregamos push(mas personas )
        mostrarPersonas();  //llamamos nuestra funcion mostrarPersonas para ir mostrando nuestros objetos.
    }else{
        console.log('No hay enformación que agregar');
    }
}