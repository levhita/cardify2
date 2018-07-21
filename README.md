# Cardify2

#Descripción:
¿Cómo funciona?

Cardify2 es un plugin de jQuery que aplica un efecto de hover a tus imágenes envolviendolas en una etiqueta <figure></figure>, obteniendo el atributo alt e insertandolo en el texto de una etiqueta <figcaption></figcaption>. Tiene un uso rapido y practico.

Instalación

Global (navegador)
.html
<script src="lib/app.js"></script>
Uso
.js
var cardify = require('cardify');
Para que el plugin funcione primero debes inicializar tu proyecto en la terminal con el comando.

npm init

Descargar cardify2 desde tu terminal con el comando

npm install cardify2

Para que tu proyecto se vea en el navegador debes instalar Browserify de manera global en tu computadora con el siguiente comando en tu terminal

npm install -g browserify

Luego crea en la raíz de tu proyecto las carpetas src y dist con el archivo app.js dentro de cada una, luego ejecuta browserify de la siguiente manera para que tu js original que se encuentra en la carpeta src se guarde modificado en la carpeta dist

browserify src/app.js -o dist/app.js

Enlaza el archivo 'Browserificado' en tu .html

<script src="dist/app.js"></script>

En tu archivo .js principal pega el siguiente código

var cardify = require('cardify');

Finalmente, recuerda poner tus imagenes dentro de una etiqueta contenedora con clase cardify y asignarle el atributo alt como en el siguiente ejemplo.

<div class='cardify'>
   <img src='https://pbs.twimg.com/media/ClFixn2UoAA85OZ.jpg' alt='Osito'>
</div>

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

***

Implementar un plugin de jQuery que dado un _contenedor_ debe buscar todas las
imágenes que encuentre dentro del _contenedor_ y reemplazarlas por un nuevo
elemento `<figure>` que contenga la imagen (`<img>`) además de un `<figcaption>`
con el texto del atributo `alt` de la imagen.

## Flujo de trabajo

1. Debes realizar un [**fork**](https://gist.github.com/ivandevp/1de47ae69a5e139a6622d78c882e1f74)
   de este repositorio.

2. Luego deberás **clonar** tu fork en tu máquina. Recuerda que el comando a usar
   es `git clone` y su estructura normalmente se ve así:

   ```bash
   git clone https://github.com/<nombre-de-usuario>/cardify.git
   ```

3. Cuando hayas terminado tu producto, envía un Pull Request a la rama que tus
   instructorxs este repositorio
   (puedes solicitar apoyo de tus profes para este paso).

> Nota: No olvides que es una buena práctica describir tu proyecto en este
> archivo `README.md` :smiley:.

***

## Instalación

### Global (navegador)

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="path-to-cardify.js"></script>
```

## Uso

```js
// `container` es el selector del contenedor donde se buscarán todas las
// imágenes a ser procesadas.
$(container).cardify({});
```

## Ejemplos
