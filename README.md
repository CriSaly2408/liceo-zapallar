# Sitio Web Institucional Liceo Bicentenario Zapallar Curicó

## Descripción

Este repositorio contiene el sitio web institucional del Liceo Bicentenario Zapallar Curicó.

La página incluye:

* Información institucional.
* Noticias y comunicados.
* Información de docentes, directivos y asistentes de la educación.
* Acceso a cursos, listas y horarios.
* Enlaces a plataformas externas utilizadas por el establecimiento.
* Calendario anual de actividades.
* Información de contacto y ubicación.
* Documentación institucional histórica.

La mayor parte del contenido del sitio permanece estable en el tiempo. La actualización más frecuente corresponde a la incorporación de nuevos documentos institucionales cada año.

---

# Actualización anual de documentos

Cada año puede ser necesario agregar:

* Proyecto Educativo Institucional (PEI)
* Reglamento Interno
* Reglamento de Evaluación y Promoción (EYP)
* Cuenta Pública

La actualización se realiza modificando únicamente dos archivos:

```text
js/menu.js
docs.html
```

---

# Paso 1: Subir los documentos a Google Drive

Antes de modificar la página web es necesario subir los documentos del nuevo año a Google Drive.

Ejemplos:

* PEI 2027
* Reglamento Interno 2027
* Reglamento de Evaluación y Promoción (EYP) 2027
* Cuenta Pública 2026 o 2027

---

## Subir el archivo

1. Ingresar a Google Drive.
2. Crear una carpeta para el año correspondiente (opcional).
3. Presionar **Nuevo → Subir archivo**.
4. Seleccionar el documento.

---

## Compartir el documento

Una vez subido:

1. Hacer clic derecho sobre el archivo.
2. Seleccionar **Compartir**.
3. En "Acceso general" seleccionar:

```text
Cualquier persona con el enlace
```

4. Permiso:

```text
Lector
```

5. Presionar **Copiar enlace**.

---

## Obtener el enlace para la página web

Normalmente Google Drive entrega enlaces similares a este:

```text
https://drive.google.com/file/d/1ABCDEF123456789/view?usp=sharing
```

Para utilizar el documento dentro de la página web debe convertirse a formato **preview**.

Ejemplo:

Enlace original:

```text
https://drive.google.com/file/d/1ABCDEF123456789/view?usp=sharing
```

Debe transformarse en:

```text
https://drive.google.com/file/d/1ABCDEF123456789/preview
```

### Cómo hacerlo

1. Buscar la parte:

```text
/view?usp=sharing
```

2. Reemplazarla por:

```text
/preview
```

Resultado:

```text
https://drive.google.com/file/d/1ABCDEF123456789/preview
```

Este es el enlace que debe copiarse en el código.

---

# Caso especial: Cuenta Pública

Las Cuentas Públicas históricas de este sitio utilizan dos formatos distintos.

## Formato PDF (Drive Preview)

Algunos años utilizan:

```javascript
"2022": "https://drive.google.com/file/d/XXXXXXXX/preview"
```

En este caso el procedimiento es exactamente igual al descrito anteriormente.

---

## Formato Presentación de Google Slides

Algunos años utilizan presentaciones incrustadas.

Ejemplo:

```javascript
"2024": "https://docs.google.com/presentation/d/XXXXXXXX/embed?start=false&loop=false&delayms=3000"
```

o

```javascript
"2025": "https://docs.google.com/presentation/d/YYYYYYYY/embed?start=false&loop=false&delayms=3000"
```

---

### Cómo crear una Cuenta Pública tipo Presentación

1. Abrir PowerPoint.
2. Crear la presentación.
3. Guardarla.

Luego:

1. Abrir Google Drive.
2. Subir el archivo PowerPoint (.pptx).
3. Abrir el archivo desde Google Drive.
4. Seleccionar:

```text
Abrir con → Presentaciones de Google
```

Google convertirá automáticamente el PowerPoint.

---

### Obtener el enlace Embed

Con la presentación abierta:

1. Archivo.
2. Compartir.
3. Publicar en la Web.
4. Seleccionar "Insertar".
5. Publicar.

Google generará un código similar a:

```html
<iframe src="https://docs.google.com/presentation/d/XXXXXXXX/embed?start=false&loop=false&delayms=3000"></iframe>
```

Copiar únicamente la URL que aparece dentro de `src=`:

```text
https://docs.google.com/presentation/d/XXXXXXXX/embed?start=false&loop=false&delayms=3000
```

Ese será el enlace que debe agregarse en `docs.html`.

---

# Resumen rápido

## Documentos PDF

Utilizar:

```text
https://drive.google.com/file/d/ID_DEL_ARCHIVO/preview
```

---

## Presentaciones Cuenta Pública

Utilizar:

```text
https://docs.google.com/presentation/d/ID_DE_PRESENTACION/embed?start=false&loop=false&delayms=3000
```

---

# Recomendación

Antes de modificar el código:

1. Abrir cada enlace en una pestaña nueva.
2. Verificar que el documento se visualice correctamente.
3. Recién después copiar el enlace a la página web.

Esto evita errores y enlaces rotos en el sitio institucional.

# Paso 2: Modificar menu.js

Archivo:

```text
js/menu.js
```

Dentro de este archivo buscar el siguiente bloque:

```javascript
// CONFIGURACIÓN DE AÑOS

//proyecto educ...
const aniosPEI = [
  2014, 2016, 2017, 2018, 2019,
  2020, 2021, 2022, 2023, 2024, 2025, 2026
];

//reglamento
const aniosReglamento = [
  2014, 2015, 2016, 2017, 2018,
  2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026
];

//CuentaPueblica
const disponibilidadDocs = {

  cuenta: {
    "2014": true,
    "2015": true,
    "2016": true,
    "2017": true,
    "2018": true,
    "2019": true,
    "2020": true,
    "2021": false,
    "2022": true,
    "2023": false,
    "2024": true,
    "2025": true
  },

  pei: {
    "2014": true,
    "2016": true,
    "2017": true,
    "2018": true,
    "2019": true,
    "2020": true,
    "2021": true,
    "2022": true,
    "2023": true,
    "2025": true,
    "2026": true
  }

};
```

---

## Agregar un nuevo PEI

Buscar esta sección:

```javascript
const aniosPEI = [
  2014, 2016, 2017, 2018, 2019,
  2020, 2021, 2022, 2023, 2024, 2025, 2026
];
```

Agregar el nuevo año al final:

```javascript
const aniosPEI = [
  2014, 2016, 2017, 2018, 2019,
  2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027
];
```

Esto hará que el año aparezca en el menú de Proyecto Educativo Institucional.

---

## Agregar un nuevo Reglamento

Buscar:

```javascript
const aniosReglamento = [
  2014, 2015, 2016, 2017, 2018,
  2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026
];
```

Agregar el nuevo año:

```javascript
const aniosReglamento = [
  2014, 2015, 2016, 2017, 2018,
  2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027
];
```

Esto hará que el año aparezca en el menú de Reglamentos.

---

## Habilitar una nueva Cuenta Pública

Buscar:

```javascript
cuenta: {
  "2014": true,
  "2015": true,
  "2016": true,
  "2017": true,
  "2018": true,
  "2019": true,
  "2020": true,
  "2021": false,
  "2022": true,
  "2023": false,
  "2024": true,
  "2025": true
},
```

Si existe una nueva Cuenta Pública, agregar una línea nueva:

```javascript
cuenta: {
  "2014": true,
  "2015": true,
  "2016": true,
  "2017": true,
  "2018": true,
  "2019": true,
  "2020": true,
  "2021": false,
  "2022": true,
  "2023": false,
  "2024": true,
  "2025": true,
  "2026": true
},
```

El valor `true` significa que existe un documento para ese año.

El valor `false` significa que el documento no existe o no debe mostrarse.

---

## Habilitar un nuevo PEI

Buscar:

```javascript
pei: {
  "2014": true,
  "2016": true,
  "2017": true,
  "2018": true,
  "2019": true,
  "2020": true,
  "2021": true,
  "2022": true,
  "2023": true,
  "2025": true,
  "2026": true
}
```

Agregar:

```javascript
pei: {
  "2014": true,
  "2016": true,
  "2017": true,
  "2018": true,
  "2019": true,
  "2020": true,
  "2021": true,
  "2022": true,
  "2023": true,
  "2025": true,
  "2026": true,
  "2027": true
}
```

---

# Resumen

Cada vez que se agregue un nuevo año se deben realizar dos tareas:

### En menu.js

Agregar el nuevo año para que aparezca en los menús.

### En docs.html

Agregar los enlaces de los documentos correspondientes.

Si se realiza solamente una de estas dos tareas, la sección no funcionará correctamente.


# Paso 3: Modificar docs.html

Archivo:

```text
docs.html
```

Dentro de este archivo existe un bloque llamado:

```javascript
const documentos = {
```

Más abajo encontrarás tres secciones:

```javascript
// 📘 PROYECTO EDUCATIVO
pei: {
```

```javascript
// REGLAMENTOS
reglamento: {
```

```javascript
// CUENTA PUBLICA
cuenta: {
```

---

## Agregar un nuevo PEI

Buscar un bloque similar a este:

```javascript
// 📘 PROYECTO EDUCATIVO
pei: {
  "2023": "https://...",
  "2025": "https://...",
  "2026": "https://drive.google.com/file/d/XXXXXXXX/preview"
},
```

Para agregar el año 2027, copiar la última línea:

```javascript
"2026": "https://drive.google.com/file/d/XXXXXXXX/preview"
```

y agregar debajo:

```javascript
"2026": "https://drive.google.com/file/d/XXXXXXXX/preview",
"2027": "https://drive.google.com/file/d/NUEVO_DOCUMENTO/preview"
```

Reemplazar el enlace por el documento correspondiente.

---

## Agregar nuevos Reglamentos

Buscar un bloque similar a este:

```javascript
// REGLAMENTOS
reglamento: {

  ...

  "2025": {
    interno: "https://...",
    eyp: "https://..."
  },

  "2026": {
    interno: "https://drive.google.com/file/d/XXXXXXXX/preview",
    eyp: "https://drive.google.com/file/d/YYYYYYYY/preview"
  }

},
```

Copiar completamente el bloque de 2026:

```javascript
"2026": {
  interno: "https://drive.google.com/file/d/XXXXXXXX/preview",
  eyp: "https://drive.google.com/file/d/YYYYYYYY/preview"
}
```

y pegar debajo:

```javascript
"2027": {
  interno: "NUEVO_LINK_INTERNO",
  eyp: "NUEVO_LINK_EYP"
}
```

Luego reemplazar los enlaces.

---

### Si existe Anexo

Algunos años tienen un documento adicional llamado "anexo".

Ejemplo:

```javascript
"2020": {
  interno: "...",
  eyp: "...",
  anexo: "..."
}
```

Si el nuevo año también tiene anexo:

```javascript
"2027": {
  interno: "NUEVO_LINK_INTERNO",
  eyp: "NUEVO_LINK_EYP",
  anexo: "NUEVO_LINK_ANEXO"
}
```

---

## Agregar una nueva Cuenta Pública

Buscar un bloque similar a este:

```javascript
// CUENTA PUBLICA
cuenta: {

  ...

  "2024": "https://...",
  "2025": "https://docs.google.com/presentation/d/XXXXXXXX/embed?start=false&loop=false&delayms=3000"

}
```

Copiar la última línea:

```javascript
"2025": "https://docs.google.com/presentation/d/XXXXXXXX/embed?start=false&loop=false&delayms=3000"
```

y agregar:

```javascript
"2025": "https://docs.google.com/presentation/d/XXXXXXXX/embed?start=false&loop=false&delayms=3000",
"2026": "https://docs.google.com/presentation/d/NUEVA_PRESENTACION/embed?start=false&loop=false&delayms=3000"
```

o el año correspondiente.

---

## Regla General

Para agregar un nuevo año:

1. Buscar el año más reciente disponible.
2. Copiar exactamente su estructura.
3. Cambiar el número del año.
4. Reemplazar los enlaces de Google Drive.
5. Guardar y realizar Commit.

En la mayoría de los casos no será necesario modificar ninguna otra parte del código.


# Guardar cambios

1. Abrir el archivo desde GitHub.
2. Pulsar el ícono ✏️ Edit.
3. Realizar las modificaciones.
4. Presionar "Commit changes".
5. Confirmar el commit.

No es necesario instalar programas adicionales para realizar estas actualizaciones.

---

# Verificación

Después del commit:

1. Esperar entre 1 y 5 minutos.
2. Abrir el sitio web.
3. Verificar que el nuevo año aparezca en los menús.
4. Verificar que todos los documentos se abran correctamente.

---

# Importante

La forma más sencilla de agregar un nuevo año es:

1. Copiar la configuración del año anterior.
2. Cambiar el número del año.
3. Reemplazar los enlaces de Google Drive.

En la mayoría de los casos no será necesario modificar ninguna otra parte del código.

