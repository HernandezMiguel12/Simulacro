# 🚀 PROYECTO CEDENORTE: PLATAFORMA DE PERSONAJES Y ESTUDIANTES

> **¡ATENCIÓN EQUIPO!** 
> Tenemos trabajo en paralelo: el **Equipo 1** se encargará de solucionar los errores críticos de la sección de personajes, mientras el **Equipo 2** aplicará nuevos estilos y agregará las tarjetas del grupo.

---

## 📌 Guía de Trabajo en Git

1. No subir cambios directamente a `main`.
2. Ubícate en la rama de tu equipo:
   * **Equipo 1 (Solución de Problemas):** `hotfix/solucion-errores`
   * **Equipo 2 (Cambios y Estilos):** `feature/cambios-y-tarjetas`
3. Crea tu rama individual desde la rama de tu equipo:
   * Ejemplo: `git checkout -b feature/2A-estilos-botones`
4. Realiza tu tarea, haz `commit`, `push` y abre un **Pull Request (PR)** hacia la rama de tu **equipo**.

---

## 🔥 EQUIPO 1: Solución de Problemas (Hotfix)

* [ ] **Tarea 1A (HTML - IDs):** Corregir los `id="..."` faltantes en `index.html` en la sección `.seccion-personajes`.
* [ ] **Tarea 1B (Rutas de Imágenes):** Ajustar las rutas de las imágenes que dicen `img/` para que apunten a `assets/img/` dentro de `index.html`.
* [ ] **Tarea 1C (JS - Variables):** Unificar los nombres de variables y corrección de `getElementById` en `script.js`.
* [ ] **Tarea 1D (CSS - Clases & Layout):** Corregir la clase `.grid_personajes` a `.grid-personajes` y arreglar el `border-radius: 8rem` excesivo en `styles.css`.
* [ ] **Tarea 1E (JS - Eventos):** Verificar que la función `seleccionarPersonaje()` en `script.js` ejecute el cambio de imagen y texto correctamente sin lanzar errores en consola.

---

## ✨ EQUIPO 2: Cambios de Diseño y Plantilla (Features)

* [ ] **Tarea 2A (CSS Global & Botones):** Modificar la paleta de colores global y cambiar los estilos visuales de los botones (color de fondo, hover, bordes) en `styles.css`.
* [ ] **Tarea 2B (Tarjeta Estudiante 1):** Basado en el bloque `.tarjeta-estudiante` de `index.html`, agregar tu tarjeta personal con foto, nombre y rol.
* [ ] **Tarea 2C (Tarjeta Estudiante 2):** Agregar tu tarjeta personal personalizada incluyendo una lista con 3 hobbies en HTML.
* [ ] **Tarea 2D (Tarjeta Estudiante 3):** Agregar tu tarjeta personal personalizada con un botón de "Like/Contacto" estilizado.
* [ ] **Tarea 2E (JS - Interacción de Tarjetas):** Crear/corregir en `script.js` la función para desplegar información al presionar los botones de las tarjetas personales.

---

## 🛠️ Comandos de Apoyo

```bash
# 1. Clonar el proyecto
git clone <URL_REPOSITORIO>

# 2. Ir a la rama del equipo
git checkout feature/cambios-y-tarjetas  # (O la de tu equipo)

# 3. Crear tu rama de trabajo
git checkout -b feature/2A-estilos-botones

# 4. Subir tus cambios
git add .
git commit -m "style: cambia colores principales y estilo de botones"
git push origin feature/2A-estilos-botones