let indentificadorActual = 1;

let arregloInicial = new Array(1);
for (let index = 0; index < arregloInicial.length; index++) {
  arregloInicial[index] = new Array(6);
}

arregloInicial[0][0] = '1'
arregloInicial[0][1] = 'Dr. Gregorio Casa';
arregloInicial[0][2] = 'Ninguna';
arregloInicial[0][3] = 'Lunes';
arregloInicial[0][4] = '9:00 am';
arregloInicial[0][5] = 'Pendiente';

const eliminarTarea = (indentificador) => {
  const nuevoArreglo = new Array();
  for (let index = 0; index < arregloInicial.length; index++) {
    const tarea = arregloInicial[index];
    if (tarea[0] != indentificador) {
      nuevoArreglo.push(tarea);
    }
  }
  arregloInicial = nuevoArreglo;
  dibujarTabla();
}

const estadoAsistencia = (indentificador) => {
  for (let index = 0; index < arregloInicial.length; index++) {
    const tarea = arregloInicial[index];
    if (tarea[0] == indentificador) {
      if (tarea[5] == 'Pendiente') {
        tarea[5] = 'Asistido';
      } else {
        tarea[5] = 'Pendiente';
      }
    }
  }
  dibujarTabla();
}

const dibujarTabla = () => {
  let html = '';
  for (let index = 0; index < arregloInicial.length; index++) {
    const tarea = arregloInicial[index];
    let trClass = '';
    if (tarea[4] == 'Asistido') {
      trClass = 'tarea-asistida';
    } 
    const trHtml = `<tr class="${trClass}">
    <td>${tarea[0]}</td>
    <td>${tarea[1]}</td>
    <td>${tarea[2]}</td>
    <td>${tarea[3]}</td>
    <td>${tarea[4]}</td>
    <td>${tarea[5]}</td>
    <td>
    <button onclick="estadoAsistencia(${tarea[5]})" type="button" class="btn btn-outline-success">x</button>
    </td>
    <td>
    <button onclick="eliminarTarea(${tarea[0]})" type="button" class="btn btn-outline-success">Cancelar turno</button>
    </td>
    </tr>`;
    html += trHtml;
  }
  document.getElementById('tbody').innerHTML = html;
}


const agregarTareaDinamica = () => {
  const tareaDinamica = new Array(6);

  const selectDoctor = document.getElementById('select-doctor');
  const selectObra = document.getElementById('select-obra');
  const selectDia = document.getElementById('select-dia');
  const selectHorario = document.getElementById('select-horario');

  identificadorActual += 1;
  tareaDinamica[0] = identificadorActual;
  tareaDinamica[1] = selectDoctor.value;
  tareaDinamica[2] = selectObra.value;
  tareaDinamica[3] = selectDia.value;
  tareaDinamica[4] = selectHorario.value;
  arregloInicial.push(tarea);
  dibujarTabla();
}


const inicializarJs = () => {
  dibujarTabla();

  const boton = document.getElementById("agregarTarea");
  boton.addEventListener('click', function (e) {
    agregarTareaDinamica();
  });
}

window.addEventListener('load', inicializarJs);