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

# Paso 1: Subir los documentos

Antes de modificar el sitio:

1. Subir los documentos correspondientes al nuevo año a Google Drive.
2. Verificar que tengan permisos de visualización.
3. Obtener los enlaces de vista previa (preview).

---

# Paso 2: Modificar menu.js

Archivo:

```text
js/menu.js
```

---

## Proyecto Educativo (PEI)

Buscar:

```javascript
const aniosPEI = [
  ...
  2025, 2026
];
```

Agregar el nuevo año:

```javascript
const aniosPEI = [
  ...
  2025, 2026, 2027
];
```

---

## Reglamentos

Buscar:

```javascript
const aniosReglamento = [
  ...
  2025, 2026
];
```

Agregar:

```javascript
..., 2026, 2027
```

---

## Disponibilidad de documentos

Buscar:

```javascript
pei: {
  ...
  "2026": true
}
```

Agregar:

```javascript
"2027": true
```

---

Si existe Cuenta Pública para el nuevo año:

```javascript
cuenta: {
  ...
  "2025": true
}
```

Agregar:

```javascript
"2026": true
```

(o el año correspondiente).

---

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

