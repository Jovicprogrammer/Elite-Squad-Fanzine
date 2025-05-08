
import '../styles/header.css'

export default function Header(){

        return (

        <header className="App-header">
      <nav class="container-grid navbar">

    <div class="logo">
    <h1 id="textlogo">Logo</h1>
    </div>

<div class="nav-list">

      <li>A Tropa</li>
      <li>Sobre</li>
      <li>Quiz</li>
      <li>Galeria</li>

</div>

<a class="nav-menu" href="#modal">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
    </svg>
</a>
</nav>
      </header>

        )

    }