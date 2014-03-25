<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Hexacolor</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="starter-template.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>
    <div class="container">

      <div class="starter-template">
        <h1 id="title">Hexacolor</h1>
        <p class="lead" id="description">Click the colors of the Hexagon in the order that is given.</p>
        <p class="btn btn-lg btn-default" id="start">Play Game</p>
      </div>
      <div class="game">
        <h1 id="timer">0.00 Seconds</h1>
        <p class="lead" id="colors">Blue, Purple, Green, Red, Yellow, Orange</p>
        <span id="hexagon"><svg xmlns="http://www.w3.org/2000/svg" width="300" height="325">
  <polygon fill="#0074D9" id="blue" 
            points="
            150,75 
            150,200 
            258,137.5" />
  <polygon fill="#B10DC9" id="violet"
            points="
            150,200
            258,137.5 
            258,262.5" />
  <polygon fill="#FF4136" id="red"
            points="
            150,200
            258,262.5
            150,325" /> 
  <polygon fill="#FFDC00" id="yellow"
            points="
            42,262.6
            150,200
            42,137.5" />
  <polygon fill="#2ECC40" id="green"
            points="
            42,137.5
            150,200
            150,75" />
  <polygon fill="#FF851B" id="orange"
            points="
            42,262.6
            150,200
            150,325" />
</svg></span>
<!-- End of Hexagon -->
      </div>
      <br>
      <center>
      <div id="footer">
        Created By Joshua Liu at HackBCA under the MIT License.
      </div>
    </center>

      <br>

    </div><!-- /.container -->




    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script type="text/javascript" src="https://raw.githubusercontent.com/DmitryBaranovskiy/raphael/master/raphael-min.js"></script>
    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="hexacolor.js"></script>

  </body>
</html>
