<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora PHP + JS</title>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col">
                <form action="<?php echo $_SERVER["PHP_SELF"]?>" method="post">
                    <div class="col calscreen">
                        <input type="text" name="pantalladatos" id="pantalladatos">
                        <input type="text" name="pantallarespuesta" id="pantallarespuesta">
                    </div>
                    <div class="Botobes">
                        <div class="Numeros">
                            <?php for($i = 0; $i<10;$i++):?>
                            <input type="button" value="<?php echo $i?>">
                            <?php endfor?>
                            <input type="button" value=".">
                        </div>
                        <div class="Operaciones">
                            <input type="button" value="+">
                            <input type="button" value="-">
                            <input type="button" value="*">
                            <input type="button" value="/">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>