# ✨ Klimbler: Flujo E2E de Cotización de Seguros ✨

¡Bienvenido! Este repositorio contiene un flujo automatizado desarrollado con **Cypress** para garantizar que el proceso de cotización de seguros en la plataforma Klimbler funcione a la perfección. 🛡️

🚀 **¿Qué Hace Este Flujo?**

Este test automatizado realiza los siguientes pasos clave:

1️. Carga de la plataforma: Validación de acceso a la URL.

2️. Ingreso de datos del usuario: Captura del nombre y selección de ocupaciones.

3️. Selección de coberturas: Configuración de valores y días.

4️. Validación de estados disponibles: Comprobación de las opciones habilitadas.

5️. Confirmación de la suma asegurada: Validación del monto recibido del servidor en el formato correcto.

## Getting Started

Pasos generales para comenzar a trabajar con el repositorio:

1. **Clona este repositorio**:

   ```bash
   git clone {{REPO_URL}}
   ```

2. **Instala las dependencias con el CLI del package manager**:

   ```bash
   {{package}} install
   ```

3. **Ejecuta Cypress:**

   Modo GUI:

   ```bash
   npx cypress open
   ```

   **Modo Headless:**

   ```bash
   npx cypress open
   ```

## **🧪 Generar el Reporte Mocha**
Cómo Ejecutar el Test y Generar el Reporte:
Ejecuta el siguiente comando para correr el flujo de prueba y generar el reporte HTML:


Copiar código
```
npm run mocha-report
```
¿Dónde Encontrar el Reporte?

El reporte generado estará en la carpeta:

```
cypress/reports/index.html
```
Ábrelo en tu navegador para ver un resumen visual de los resultados.

##
## **🧪 Caso de Prueba Principal**

Nombre del Test:

🔹 "Flujo completo de cotización de seguro con validaciones"

Puntos Destacados del Código:
Validación de datos aleatorios: Uso de Cypress._.random() para seleccionar ocupaciones y otros valores.

Intercepción de API: Validación de que la API de cotización responde correctamente con el código 200.

Formateo de datos: Conversión de montos a formato local.

## **✨ Estructura del Proyecto**

```
cypress/
├── fixtures/           # Datos estáticos
│   └── occupations.json
├── e2e/        # Tests principales
│   └── klimber.cy.js
├── support/            # Configuración y páginas
│   ├── pages/
│   │   └── klimber.page.js
│   └── commands.js
 
```

¡Gracias por tomarte el tiempo de revisar este proyecto! Espero que encuentres útil este flujo de pruebas y su integración con reportes. Si tienes sugerencias, dudas o ideas para mejorar, ¡no dudes en compartirlas! 🚀🙌