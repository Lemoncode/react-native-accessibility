# react-native-accessibility

## Autores:

- [Víctor Borrego](https://github.com/v-borrego).
- [Juanjo Montiel](https://github.com/kastwey).

## Descripción

Este proyecto muestra cómo mejorar la accesibilidad para lectores de pantalla en una aplicación móvil hecha con React Native, tomando como ejemplo una aplicación que muestra detalles de una organización y sus repositorios en github. Inicialmente, la aplicación no estaba optimizada para usuarios con discapacidades (de hecho se añadieron componentes personalizados y se usaron técnicas no accesibles para empeorar la experiencia), pero se realizaron pequeños ajustes para hacerla más accesible.

## Estructura de carpetas

- 01-boilerplate: La carpeta con la aplicación inicial. Si la ejecutáis, veréis que la experiencia con lectores de pantalla es penosa (está hecho a propósito, ¡no somos tan malos!).
- 02-accessibility-improvements: Se han añadido las mejoras que desglosamos en el siguiente apartado.

## Mejoras realizadas

### 1. Botones Accesibles

- `common/components/icon-button.component.tsx`

#### Cambios

Se añadió la propiedad `accessibilityLabel` al componente (como obligatoria, además ;) ), y se incluyó la propiedad `accessibilityRole="button"` al componente `Pressable` subyacente.

#### ¿Por qué?

Los botones deben tener una etiqueta descriptiva y ser identificados como tales para los lectores de pantalla. Un componente `Pressable` no ofrece un rol por defecto, por lo que los lectores de pantalla no sabrán transmitir a los usuarios que ese componente se puede pulsar para ejecutar una acción.

### 2. Mejora en Encabezados

- `pods/contributors/contributors.component.tsx`
- `pods/organization/components/info-dialog.component.tsx`
- `pods/organization/components/organization.component.tsx`
- `pods/repository-detail/repository-detail.component.tsx`

#### Cambios

Se añadieron propiedades `accessibilityRole="header"` en los títulos principales dentro de los componentes `Text`.

#### ¿Por qué?

El uso de encabezados permite a los usuarios de lectores de pantalla comprender mejor la estructura del componente. Al añadir encabezados, separamos claramente cada sección, permitiendo a los usuarios saltar entre ellas fácilmente con gestos del lector de pantalla.

### 3. Descripción de Imágenes

- `pods/contributors/contributors.component.tsx`
- `pods/organization/organization.component.tsx`

#### Cambios

Se han añadido descripciones a las imágenes del logo de la organización y de cada uno de los usuarios que contribuyeron a un repositorio.

**¡Importante!** Por alguna razón, en *React Native 0.76.3*, la propiedad `accessibilityLabel` no funciona aplicada directamente a las imágenes. La única solución que hemos encontrado ha sido envolver dicha imagen en un `View`, añadir `accessibilityLabel` a ese `View`, ponerle `accessibilityRole="image"`, y añadir `accessible={true}` para que dicho `View` se considere como un componente atómico (en el árbol de accesibilidad los componentes hijos no aparecerán como tal, sino que se considerarán como parte del View). Nuestra idea es verificar esto con versiones anteriores, y abrir una issue en *react-native* si fuera necesario.

#### ¿Por qué?

Las imágenes deben ser descriptivas o marcadas como decorativas (si no tienen propósito funcional). En el caso de *react-native*, para marcar una imagen como decorativa y asegurarnos así de que no aparecerá en el árbol de accesibilidad, podemos añadir la propiedad `accessibilityElementsHidden={true}`.

### 4. Anuncios Dinámicos

- `pods/repository-list/repository-list.component.tsx`

#### Cambios

Uso de `AccessibilityInfo.announceForAccessibility` para informar al usuario sobre la cantidad de repositorios encontrados tras filtrar. Se ha utilizado un *timeout* de 500 milisegundos para mejorar la experiencia, ya que, si anunciamos directamente en cuanto se modifica el filtro, el lector de pantalla estaría leyendo constantemente el número de resultados mientras escribimos, lo que es realmente estresante. En su lugar, dejamos un tiempo prudencial antes de anunciar los resultados, para que solo se anuncie cuando el usuario haya dejado de escribir, o al menos haya hecho una pausa significativa.

#### ¿Por qué?

Si no anunciamos el número de resultados, los usuarios de lector de pantalla no tendrán esa información hasta que no se muevan a la lista, lo que degrada la experiencia de uso. Un usuario que ve la pantalla se percatará de que los resultados cambian, pero esto no es así para los lectores de pantalla, que necesitan que esta información se incluya de forma explícita. Por usabilidad incluso sería interesante añadir un texto visible con el número de resultados, pero con el fin de respetar el diseño, hemos optado por utilizar simplemente el anuncio a través de la API de accesibilidad.

### 5. Mejoras en Campos de Entrada

- `pods/repository-list/repository-list.component.tsx`

#### Cambios

- Se añadió `accessibilityLabel` al campo de búsqueda para describir su función.
- Se ocultó el icono de búsqueda en el árbol de accesibilidad (`accessibilityElementsHidden={true}`) para simplificar la navegación por los componentes. Así, el usuario de lector de pantalla solo tendrá que leer la etiqueta cuando se sitúe sobre el campo de entrada, en lugar de leerla dos veces, una antes del campo por el icono, y otra en el campo en sí.

#### ¿Por qué?

Los campos de entrada deben ser etiquetados claramente para los lectores de pantalla. De lo contrario, los usuarios no sabrán cuál es el propósito de los mismos. Además, se debería informar en la etiqueta de si el campo es obligatorio o no. Lamentablemente, en *react-native* no existe ninguna propiedad para añadir este valor semántico a los campos de entrada directamente.

### 6. Ajustes en Componentes de Lista

- `pods/repository-list/components/item.component.tsx`

#### Cambios

Se agregó `accessibilityRole="button"` a los elementos de la lista de repositorios (componente `FlatList`).

#### ¿Por qué?

Los elementos interactivos deben identificarse correctamente para los usuarios que navegan con lectores de pantalla. De lo contrario, no habrá ninguna indicación de que esos elementos son parte activa de la interfaz.

### 7. Elementos Ocultos para Accesibilidad

- `pods/repository-detail/components/stars.component.tsx`

#### Cambios

Uso de `accessibilityElementsHidden={true}` para ocultar elementos dentro del árbol de accesibilidad. En el componente que muestra las estrellas, hemos ocultado el texto que muestra la cuenta de estrellas, ya que hemos puesto esta información en el `accessibilityLabel` del propio icono.

#### ¿Por qué?

Al ocultar elementos redundantes, evitamos que el contenido duplicado o irrelevante confunda al usuario.

### 8. Descripciones en Iconos

- `pods/organization/components/info-dialog.component.tsx`
- `pods/repository-detail/components/language.component.tsx`

#### Cambios

Se añadieron `accessibilityLabel` a los iconos con funciones como "Enviar correo", "Visitar GitHub", o "Lenguaje principal: X".

#### ¿Por qué?

Los iconos deben ser descriptivos para los usuarios que no pueden verlos. La etiqueta del icono debe explicar el propósito del mismo, no la descripción del icono en sí. Por ejemplo, si en el icono de e-mail aparece un sobre, la descripción correcta sería: *Enviar e-mail a la organización*, no *Sobre cerrado*.

### 9. Orden Semántico

- `pods/organization/organization.component.tsx`

#### Cambios

Uso del paquete `react-native-a11y-order` para definir el orden de navegación de los elementos. Al usar un estilo `flexDirection: "row"`, por alguna razón, el orden en el que *VoiceOver* leía la descripción de la organización y el botón de más información se invertía, leyéndose antes el botón y luego la descripción.

#### ¿Por qué?

El orden visual siempre debe coincidir con el orden de navegación. En este caso, el texto está a la izquierda, y el botón a la derecha, por lo que el texto debe leerse antes, y el botón después. Hemos utilizado esta librería para marcar el orden de navegación en el árbol de accesibilidad de manera explícita.

### 10. Botón "Atrás"

- `pods/repository-detail/repository-detail.component.tsx`

#### Cambios

Añadido `accessibilityLabel="Repositories, back button"` al icono que hace de *botón atrás*.

#### ¿Por qué?

Los botones de navegación deben estar claramente etiquetados para que los usuarios sepan a dónde los llevará la acción.

**¡Importante!** La experiencia más accesible es dejar el botón *atrás* que `react-navigation/native` nos pone por defecto en la cabecera. Este botón es detectado por los lectores de pantalla como un botón *atrás*, sin necesidad de trucar la etiqueta para que el usuario sepa que es el botón para retroceder a la pantalla anterior. Si por alguna razón usar este botón tal y como se ofrece en `react-navigation/native` no es posible, aseguraos de que la etiqueta es apropiada.

## ¿Y yo, cómo me aseguro de que mi aplicación es accesible?

Lo primero, como siempre, es mirar [la documentación oficial de accesibilidad de *React Native](https://reactnative.dev/docs/accessibility).

También hay librerías de la comunidad la mar de interesantes como las que ya hemos visto en este proyecto:

- [react-native-a11y](https://github.com/ArturKalach/react-native-a11y): una librería que facilita la implementación de mejoras de accesibilidad de nuestra app: manejo del foco de accesibilidad, orden de lectura, ETC. Esta librería también incluye características para reordenar elementos, como hicimos con la librería [react-native-a11y-order](https://github.com/ArturKalach/react-native-a11y-order) del mismo autor.
- También del mismo autor, [Artur Kalach](https://github.com/ArturKalach/), tenemos  [react-native-a11y-container](https://github.com/ArturKalach/react-native-a11y-container), que nos permite añadir grupos semánticos a nuestra aplicación. Por ejemplo, si tenemos una lista de repositorios, podríamos envolverla en un `A11yContainerView`, para que al entrar ahí, el lector de pantalla lea el `accessibilityLabel` asociado a dicho grupo.

Y por último, y no menos importante, es hacer pruebas. Lamentablemente no hay herramientas fáciles de utilizar con *react-native* para evaluar la accesibilidad de nuestra aplicación, así que lo mejor es tirarse al barro y utilizar los lectores de pantalla directamente para probar que todo se lee como debería. Sabemos que usar un lector de pantalla no es fácil, pero con unos minutos de aprendizaje de las órdenes básicas, podréis navegar por vuestra aplicación, y aseguraros de que todo se escucha correctamente. Es muy fácil detectar errores de accesibilidad de esta manera.

## Beneficios de las Mejoras

- **Navegación más clara:** Usuarios con lectores de pantalla pueden navegar fácilmente por los encabezados y botones.
- **Retroalimentación en tiempo real:** Los usuarios son informados de cambios en la interfaz.
- **Descripción significativa:** Los elementos visuales ahora están descritos para usuarios ciegos.
- **Flujo lógico:** La navegación por teclado o lector de pantalla sigue un orden coherente.

## Cómo Contribuir

Si tienes sugerencias para mejorar aún más la accesibilidad de la aplicación, ¡no dudes en enviar un PR o abrir un issue!
