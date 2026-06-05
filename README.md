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

---

## Proyecto Educativo Institucional

Buscar la última entrada existente:

```javascript
"2026": "LINK_DOCUMENTO"
```

Agregar:

```javascript
"2027": "LINK_DOCUMENTO_2027"
```

---

## Reglamentos

Buscar la última entrada existente:

```javascript
"2026": {
  interno: "LINK_INTERNO",
  eyp: "LINK_EYP"
}
```

Copiar y agregar:

```javascript
"2027": {
  interno: "LINK_INTERNO_2027",
  eyp: "LINK_EYP_2027"
}
```

Si existe anexo:

```javascript
"2027": {
  interno: "LINK_INTERNO_2027",
  eyp: "LINK_EYP_2027",
  anexo: "LINK_ANEXO_2027"
}
```

---

## Cuenta Pública

Buscar la última entrada:

```javascript
"2025": "LINK_CUENTA_PUBLICA"
```

Agregar:

```javascript
"2026": "LINK_CUENTA_PUBLICA_2026"
```

(o el año correspondiente).

---

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

