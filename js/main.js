// Definimos un objeto para representar el stock
const stock = [];

// Función para agregar un producto al stock
let empresa = prompt("Ingresa el nombre de tu empresa");

function agregarProducto() {
  const nombre = prompt("Ingrese el nombre del producto:");
  const cantidad = parseInt(prompt("Ingrese la cantidad en stock:"));
  const precio = parseFloat(prompt("Ingrese el precio del producto:"));

  // Verificar si el producto ya existe en el stock
  const productoExistente = stock.find((producto) => producto.nombre === nombre);

  if (productoExistente) {
    // Si el producto ya existe, actualizamos la cantidad y el precio
    productoExistente.cantidad += cantidad;
    productoExistente.precio = precio;
  } else {
    // Si el producto no existe, lo agregamos al stock
    stock.push({ nombre, cantidad, precio });
  }

  alert(`${nombre} se ha agregado al stock.`);
}

// Función para mostrar el listado del stock
function mostrarStock() {
  if (stock.length === 0) {
    alert("El stock está vacío.");
  } else {
    let listaStock = "Listado de Stock:\n";
    stock.forEach((producto) => {
      listaStock += `${producto.nombre}: ${producto.cantidad} unidades, Precio por unidad: $ ${producto.precio} \n`;
    });
    alert(listaStock);
  }
}

// Función para modificar la cantidad de un producto
function modificarStock() {
  const nombre = prompt("Ingrese el nombre del producto que desea modificar:");
  const productoExistente = stock.find((producto) => producto.nombre === nombre);

  if (productoExistente) {
    const operacion = prompt("Ingrese '+' para agregar stock o '-' para quitar stock:");
    const cantidad = parseInt(prompt("Ingrese la cantidad a modificar:"));

    if (operacion === "+") {
      productoExistente.cantidad += cantidad;
    } else if (operacion === "-") {
      if (cantidad <= productoExistente.cantidad) {
        productoExistente.cantidad -= cantidad;
      } else {
        alert("No hay suficiente stock para quitar esa cantidad.");
      }
    } else {
      alert("Operación no válida. Use '+' o '-'.");
    }
  } else {
    alert("El producto no existe en el stock.");
  }
}
// Función para buscar un producto por nombre
function buscarPorNombre() {
  const nombre = prompt("Ingrese el nombre del producto que desea buscar:");
  const productoEncontrado = stock.find((producto) => producto.nombre === nombre);

  if (productoEncontrado) {
    alert(`Producto encontrado:\n${productoEncontrado.nombre}: ${productoEncontrado.cantidad} unidades, Precio por unidad: $ ${productoEncontrado.precio}`);
  } else {
    alert("Producto no encontrado en el stock.");
  }
}

// Función para el menú principal
function menuPrincipal() {
  while (true) {
    const opcion = prompt(
      "Bienvenido a control de stock de tu empresa " +
      empresa +
      ".\nMenú Principal:\n1. Agregar Producto\n2. Mostrar Stock\n3. Modificar Stock\n4. Buscar Producto por Nombre\n0. Salir"
    );

    switch (opcion) {
      case "1":
        agregarProducto();
        break;
      case "2":
        mostrarStock();
        break;
      case "3":
        modificarStock();
        break;
      case "4":
        buscarPorNombre();
        break;
      case "0":
        return;
      default:
        alert("Opción no válida. Por favor, seleccione una opción válida.");
    }
  }
}

// Llamamos a la función del menú principal para comenzar el programa
menuPrincipal();