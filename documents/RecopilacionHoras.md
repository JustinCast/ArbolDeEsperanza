# Recopilación de horas
1. Creación del proyecto y configuración (instalación de dependencias, creación de archivos1.principales del servidor e instalación de Frameworks CSS necesarios)
2. Modelado de los datos (schema de Mongoose) y controladores respectivos (enrutadores)
3. Seteo final de los archivos del servidor y testeo
4. Creación de la BD
5. Creación de los componentes y las rutas necesarias
5. Traer todos los objetos personas desde el backend y modelar los objetos en el frontend
6. Mostrar adecuadamente las personas en el componente
7. Maquetado de la parte de agregar una persona
8. Guardar adecuadamente una persona en la BD
9. Mostrar los datos de la persona que se quiere editar en el componente
10. Configuración y preparación para deploy en Heroku
11. Creación de login (sin verificación) e inclusión de gráficos para reunión con cliente
12.Rediseño de la página y de las sección de visualizar una persona (para reunión con cliente)
13. Creación de los endpoints de los usuarios de la página.
14. Proceso de encriptación de contraseña en el backend. 15. LogguedInGuard: guardia para proteger las rutas en el Frontend.
16. Verificación de credenciales de los usuarios (interacción mediante servicios).
17. Maquetado de la parte de agregar usuarios a la página con sus respectivos roles.
18. Reestructuración del Schema de mongoose para soportar los nuevos cambios sugeridos en la reunión del día 20/02/2018.
19. Remodelado de los datos en el FrontEnd.
20. Creación del Schema para los tipos de usuario de la página.
21. Configuración y testo final para ingresar usuarios de la página a la BD.
22. Visualizar y editar usuarios de la página.
23. Acciones permitidas de acuerdo al tipo de rol del usuario.
24. Pipes de buscar usuario y persona.
25. Visualizador de las resoluciones
26. Creación de nuevos esquemas:
    - EducationSchema
    - EmploynmentSchema
    - ExpectativesSchema
    - HealthSchema
    - PersonSchema (modificado)
    - SocioEconomicSchema
27. Nuevas rutas o endpoints:
    - EducationRouter
    - EmploymentRouter
    - ExpectativeRouter
    - HealthRouter
    - PersonRouter
    - SocioEconomicRouter
28. Modularización en el FrontEnd: fue necesario utilizar la funcionalidad de módulos de Angular, ya que el proyecto se volvió muy grande y además, muchos componentes estaban relacionados, así como otros que también no compartían ninguna clase de semántica.
28. Modelado de datos en el FrontEnd (en proceso)
Para soportar y modelar los datos que provienen del webservice, es necesario crear nuevas clases e interfaces que sirvan de estructura y den sentido a los datos. Algunos de los modelos creados hasta el momento:
    - EmergencyContact
    - TimeFormat
    - Person (modificado)
29. Maquetado y estilizado
Una de las secciones que más ha sufrido cambios ha sido el formulario de agregar una persona.
El formulario en su nueva versión se dividirá de la siguiente manera:
    - TAB Primer Ingreso / INTAKE (este tab contendrá dentro un stepper):
        - Ficha de Identificación
        - Expectativas sobre la asociación / Expectatives (lo ordené de esta manera para mayor facilidad)
        - Educación / Education
    - TAB aspectos Socioeconómicos:
        - Aspectos Socioeconómicos / Socioeconomic Situation
    - TAB Empleo:
        - Empleo / Employnment
    - TAB Salud:
        - Salud / Health
30. Reacomodo de los formularios: la ubicación de los formularios era incorrecta según el patrón a seguir, por lo cual se debieron acomodar en módulos distintos a los actuales.
31. Rediseño de la parte de visualización de datos: el maquetado existente no soportaba la nueva forma de los datos (schemas de mongoose).
32. Rediseño del maquetado de la parte de soluciones.
33. Sobreescritura de los datos (en caso de que se quiera ediitar los datos de las secciones distintas al primer ingreso).
34. Solución de bugs menores (en proceso).
35. Solución del problema al desplegar (en proceso).

_Nota: Fue necesario simular un tipo de relación con los esquemas para darle un poco más de sentido y manejabilidad a los datos, ya que el formulario es enorme._

Nota: Un módulo en Angular es un conjunto de Componentes que comparten una relación entre sí, por ejemplo, los componentes que gestionan los datos de un usuario.
