Display en CSS
Los más utilizados: Block, Inline, Inline-Bloc

Block: muestra los elementos en bloque hacía abajo. Sí permite modificar el width y el height del elemnto
Inline: muestra los elementos en linea hacía la derecha. No permite modificar el with y el height
Inline-Block: Muestra los elementos en linea hacía la derecha y además permite modificar el width y el height del elemnto



FlexBox LayOut
Es la forma moderna de construir layouts

En flexbox podemos colocar o distribuir los elementos en una dirección: Ya sea
fila (row) o columna (column).

Row es aplicado por default al definir 'display: flex'; y mostrará los elementos
ya sea de izquierda a derecha (row) o derecha a izquierda (row reverse).

Existen diferentes propiedades como: justify-content y align-item y sus diferentes valores
que permiten alinear el contenido a nuestro gusto. 

► justigy-content
  -Si tu flex-direction es row, justify-content será utilizado para alinear el contenido
   horizontalmente, ya sea al centro, a la izquierda o dercha.
  -Si tu flex-direction es column, justify-content será utilizado para alinear el contenido
   verticalmente, ya sea al inicio, al centro o al final.

► Align Items 
  - Si tu flex-direction es row, align-items será utilizado para alinear el contenido
   verticalmente, ya sea al inicio, al centro o al final.

  - Si tu flex-direction es column, align-items será utilizado para alinear el contenido
   Horizontalmente, ya sea al centro, izquierda o derecha.


Grid Layout
Permite definir la ubicación y el tamaño de los elementos en el sitio web.

Flexbox es unidimensional (row o column, pero CSS Grid permite distribuir 
los elementos en ambas direcciones.

Se habiliya colocando display: grid;