<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Hexacolor</title>
    <link rel="icon" 
      type="image/png" 
      href="graphics/hexagon.png">
    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>
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
        <h1 id="title"><strong>Hexacolor</strong></h1>
        <p class="lead" id="description">Test Your Reaction Time!</p>
        <p class="btn btn-lg btn-default" id="start">Play Game</p>
      </div>
      <div class="game">
        <h1 id="timer">0.00 Seconds</h1>
        <center><div class="well" id="colors">
        <strong><p class="lead" id="colors"></p></strong>
        </div></center>
        <span id="hexagon"><svg xmlns="http://www.w3.org/1250/svg" width="300" height="250">
  <polygon fill="#0074D9" id="blue" 
            points="
            150,0 
            150,125 
            258,62.5" />
  <polygon fill="#B10DC9" id="purple"
            points="
            150,125
            258,62.5 
            258,187.5" />
  <polygon fill="#FF4136" id="red"
            points="
            150,125
            258,187.5
            150,250" /> 
  <polygon fill="#FFDC00" id="yellow"
            points="
            42,187.6
            150,125
            42,62.5" />
  <polygon fill="#2ECC40" id="green"
            points="
            42,62.5
            150,125
            150,0" />
  <polygon fill="#FF851B" id="orange"
            points="
            42,187.6
            150,125
            150,250" />
</svg></span>
<!-- End of Hexagon -->
      </div>
      <br>
      <center>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">Just Clicked:</h3>
        </div>
        <div class="panel-body">
          <strong><span id="buttonpressed">Nothin' Yet</span></strong>
        </div>
      </div>
      <div id="endgame">
        <h1>You Lost! D:</h1>
      </div>
      <div id="footer">
        Made By Joshua Liu at HackBCA under the MIT License. <a href="https://twitter.com/joshjoshliuliu">@joshjoshliuliu</a>
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
