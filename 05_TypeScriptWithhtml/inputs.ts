// <input>       → HTMLInputElement
// <textarea>    → HTMLTextAreaElement
// <button>      → HTMLButtonElement
// <select>      → HTMLSelectElement
// <option>      → HTMLOptionElement
// <form>        → HTMLFormElement

// <div>         → HTMLDivElement
// <span>        → HTMLSpanElement
// <p>           → HTMLParagraphElement

// <a>           → HTMLAnchorElement
// <img>         → HTMLImageElement
// <label>       → HTMLLabelElement

// <table>       → HTMLTableElement
// <tr>          → HTMLTableRowElement
// <td>          → HTMLTableCellElement

// <ul>          → HTMLUListElement
// <ol>          → HTMLOListElement
// <li>          → HTMLLIElement

// <h1>–<h6>     → HTMLHeadingElement

// <video>       → HTMLVideoElement
// <audio>       → HTMLAudioElement

// <canvas>      → HTMLCanvasElement
// <iframe>      → HTMLIFrameElement


function getInfo(){
    console.log("Get info Function Called");
    let name = document.getElementById("username") as HTMLInputElement;
    let age = document.getElementById("age") as HTMLInputElement;
    let email = document.getElementById("email") as HTMLInputElement;
    
    console.log(`Name: ${name.value}, Email: ${email.value}, Age: ${age.value}`);

}