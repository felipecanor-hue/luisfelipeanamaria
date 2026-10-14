# Invitación digital de boda

## Luis Felipe Cano y Ana María Cárdenas
**Fecha:** 5 de septiembre de 2026

Esta carpeta contiene una invitación web interactiva en español, diseñada como un pasaporte con páginas.

## Archivos
- `index.html`: contenido y estructura.
- `styles.css`: diseño, colores y adaptación para celular.
- `script.js`: navegación, cuenta regresiva y RSVP por WhatsApp.

## Cambios importantes antes de publicarla

### 1. Número de WhatsApp
Abra `script.js` y cambie:

```js
const NUMERO_WHATSAPP = "573000000000";
```

Use el número que recibirá las confirmaciones, en formato internacional sin `+`, espacios ni guiones.

### 2. Hora de la boda
En `script.js`, cambie:

```js
const weddingDate = new Date("2026-11-21T15:00:00-04:00");
```

La hora actual es solo un marcador de posición.

### 3. Lugar, mapa, hoteles e itinerario
Edite los textos marcados como “por agregar”, “por confirmar” o “por definir” dentro de `index.html`.

### 4. Historia de la pareja
Reemplace los textos de muestra en la página “Nuestra historia”.

## Cómo probarla
Abra `index.html` en Chrome, Safari o Edge.

## Cómo publicarla gratis
Puede subir la carpeta a:
- Netlify Drop
- GitHub Pages
- Cloudflare Pages

Para una versión final con dominio personalizado, por ejemplo `luisfelipeyanamaria.com`, primero debe comprar el dominio y conectarlo al servicio de publicación.

## Nota
La confirmación RSVP funciona mediante WhatsApp y no guarda respuestas en una base de datos. Para guardar respuestas automáticamente, se puede conectar a Google Forms, Formspree, Airtable o una base de datos.


## Actualización de revelación automática

La página ahora mantiene ocultos el lugar y la hora hasta:

**8 de agosto de 2026 a las 12:00 p. m. (hora del este)**

Para cambiar la fecha, el lugar, la hora y el enlace del mapa, abra `script.js` y edite:

```js
const LUGAR_BODA = "The Inn at Centre Park";
const HORA_BODA = "15:00";
const URL_MAPA = "https://maps.app.goo.gl/EWeJ5yyxjPReEs98A";
```

El RSVP está configurado para enviar las respuestas al número:

**+1 (267) 234-2685**

La vestimenta está configurada como **casual**. Se eliminaron las secciones de alojamiento y transporte.


## Destino general confirmado

La invitación ahora informa desde el inicio que la boda se realizará en:

**Pensilvania, Estados Unidos**

La dirección exacta y la hora permanecen ocultas hasta la fecha de revelación.
