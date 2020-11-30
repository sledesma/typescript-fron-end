// Types
type ListItem = string;
type Lista = ListItem[];

// Objects / Arrays
let lista: Lista = [];
const elem: HTMLInputElement = document.querySelector("#txtPendiente");

// Functions

function render(): void {
  const elemento: HTMLElement = document.querySelector("#lista");
  elemento.innerHTML = "";

  const domTemporal: DocumentFragment = document.createDocumentFragment();

  lista.forEach((item, id) => {
    domTemporal.appendChild(crearElemento(item, id));
  });

  elemento.appendChild(domTemporal);
}

function actualizarLista(nuevaLista: Lista): void {
  lista = nuevaLista;
  render();
}

function crearElemento(valor: string, id: number): HTMLElement {
  const li: HTMLLIElement = document.createElement("li");

  const divTexto: HTMLDivElement = document.createElement("div");
  divTexto.classList.add("texto");
  divTexto.innerHTML = valor;

  li.appendChild(divTexto);

  const divControles: HTMLDivElement = document.createElement("div");
  divControles.classList.add("controles");

  const aBorrar: HTMLAnchorElement = document.createElement("a");
  aBorrar.href = "#";
  aBorrar.innerHTML = "Borrar";
  aBorrar.classList.add("borrar");
  aBorrar.onclick = function (ev: MouseEvent): void {
    actualizarLista(lista.filter((val, pos) => pos !== id));
  };

  return li;
}

// Events
elem.onkeypress = function (e:KeyboardEvent):void {
  if (e.key == "Enter") {
      
    const nuevaLista:Lista = lista;

    nuevaLista.push(elem.value);

    actualizarLista(nuevaLista);

    elem.value = "";
    elem.focus();
  }
};
