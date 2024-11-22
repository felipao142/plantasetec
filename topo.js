function create_header () {
    header = document.querySelector('header');
    header.innerHTML=`
    <nav>
        <h1>
            Plantas Etec
        </h1>
        <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="#">Projeto</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
        </ul>
    </nav>
    `;
    header.append(header);
}
create_header();