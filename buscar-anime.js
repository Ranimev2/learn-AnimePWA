    <!-- REQUIRED META TAGS -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- LINK TO Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- LINK TO STYLES -->    
    <link rel="stylesheet" type="text/css" href="styles/estilos.css">

    <!-- LINK TO FAVICON ICON -->
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">

    <title>PT SHANACHAN - SHANA PWA</title>

  </head>

  <body>
    
    <!-- HEADER -->
    
    <header>
    
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        
        <a class="navbar-brand" href="index.html"><h1 class="h4">Takamiya</h1></a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="buscar-anime.html">Anime</a>
            </li>
          </ul>
        </div>

      </nav>

    </header>
    
    <!-- FIN HEADER -->

    <!-- MAIN -->
    <main>

	    <section class="container mx-auto">
	      <form id="search_form" class="form-inline justify-content-center">
	        <input class="form-control mr-sm-2" type="text" id="search" placeholder="Escribí acá el anime" aria-label="Search" name="search">
	        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
	      </form>
	    </section>

		  <div class="container mx-auto mt-5">    
		    <div class="row mx-auto" id="search-results"></div>
      </div>

    </main>

    <!-- FIN MAIN -->

    <!-- FOOTER -->

    <footer class="footer">
      
      <div class="container">
        <ul>
          <li><span class="text-muted">SHANACHAN</span></li>
          <li><span class="text-muted">Comisión: DWN3A</span></li>
          <li><span class="text-muted">Materia: Aplicaciones Web Progresivas</span></li>
          <li><span class="text-muted">Docente: Gonzalo Rubino</span></li>
          <li><span class="text-muted">Año: 2021</span></li>
        </ul>
      </div>

    </footer>

    <!-- FIN FOOTER -->
    
    <!-- Registrar Service Worker -->
    <script src="js/register-sw.js"></script>
    
    <!-- Optional JavaScript -->
    <script src="js/anime.js"></script>
    
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

  </body>

</html>
