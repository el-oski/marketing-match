/* =========================================================================
   MarketingMatch — Banco de contenido
   -------------------------------------------------------------------------
   Cada carta es una decisión binaria: se desliza a la izquierda o a la
   derecha. El campo `a` indica el lado correcto.

     q     : el enunciado o caso que se muestra en la carta
     left  : etiqueta de la opción izquierda
     right : etiqueta de la opción derecha
     a     : 'left' | 'right'  → la respuesta correcta
     why   : explicación que se muestra después de responder
     tip   : (opcional) truco para recordarlo

   `src: 'guia'`  → el tema sale directo de la Guía de estudio.
   `src: 'extra'` → contenido complementario para ampliar el temario.
   ========================================================================= */

const DECKS = [

/* ---------------------------------------------------------------- 1 ---- */
{
  id: 'inbound-outbound',
  name: 'Entrada vs. Salida',
  emoji: '🧲',
  src: 'guia',
  blurb: 'Outbound empuja el producto; inbound atrae al cliente.',
  brief: 'El marketing de salida (outbound) parte del producto y lo empuja hacia el mercado con publicidad masiva: su meta es mover volumen, vender la mayor cantidad de unidades. El marketing de entrada (inbound) parte del cliente y lo atrae con contenido útil, sin interrumpirlo. Regla práctica: si el enunciado habla de atraer o de conocer al cliente, no es outbound.',
  cards: [
    { q: 'La meta principal de la estrategia de marketing de salida es vender la mayor cantidad de unidades.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Correcto. El outbound es un marketing de empuje: parte del producto y lo lanza al mercado buscando mover volumen. Primero existe el producto y después se busca a quién vendérselo.',
      tip: 'Salida = empujar para vender mucho.' },

    { q: 'Un espectacular en el periférico y una campaña de telemarketing.',
      left: 'Entrada', right: 'Salida', a: 'right',
      why: 'Los dos interrumpen a la persona con un mensaje que no pidió, y van de uno a muchos con el mismo contenido para todos. Eso es outbound puro.' },

    { q: 'Una marca de maquillaje publica tutoriales gratuitos en YouTube para que la gente la encuentre por su cuenta.',
      left: 'Entrada', right: 'Salida', a: 'left',
      why: 'Es inbound: la marca crea contenido útil e interesante y deja que el cliente llegue solo. No hay interrupción, hay atracción.',
      tip: 'Si el cliente llega por su propia voluntad, es entrada.' },

    { q: '"Conocer lo mejor que se pueda a los clientes" es el punto central del marketing de salida.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'Es la opción trampa clásica. Conocer al cliente a fondo pertenece al enfoque de marketing, al inbound y al marketing de relación. El outbound clásico se centra en el producto, no en el cliente.' },

    { q: 'Generar conocimiento de marca (awareness) significa lograr que la gente sepa que el producto existe y lo reconozca.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Esa es la definición. Ojo: en el outbound el awareness es un medio para llegar a la venta, no la meta final. La meta es el volumen.' },

    { q: 'La comunicación es personalizada y de ida y vuelta, distinta para cada persona.',
      left: 'Entrada', right: 'Salida', a: 'left',
      why: 'El inbound conversa: responde comentarios, segmenta el contenido y adapta el mensaje. El outbound manda el mismo mensaje a todos, de uno a muchos.' },

    { q: 'Blogs, guías gratuitas descargables y tutoriales en video.',
      left: 'Entrada', right: 'Salida', a: 'left',
      why: 'Son los formatos típicos del inbound: contenido que resuelve algo para el usuario y lo acerca a la marca sin venderle directamente.' },

    { q: 'El inbound y el outbound son excluyentes: una empresa tiene que elegir uno de los dos.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'En la práctica casi todas las marcas combinan ambos. El outbound da alcance rápido a mucha gente; el inbound construye relación y confianza a largo plazo. Se complementan.' },

    { q: 'El outbound se apoya en interrumpir a la persona en medio de otra actividad.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Así es: el anuncio corta tu programa, tu video o tu llamada. Ese es justo el mecanismo del empuje, y la razón por la que el inbound surgió como alternativa.' }
  ]
},

/* ---------------------------------------------------------------- 2 ---- */
{
  id: 'enfoques',
  name: 'Enfoques de la empresa',
  emoji: '🏭',
  src: 'guia',
  blurb: 'Producción, ventas y marketing: ¿hacia dónde mira la empresa?',
  brief: 'Tres formas de pararse frente al mercado. Producción da por hecho que lo barato y disponible se vende solo. Ventas fabrica primero y después busca convencer con promoción intensa. Marketing investiga qué quiere el cliente y luego crea el producto. Producción y ventas miran hacia adentro; marketing mira hacia afuera.',
  cards: [
    { q: '"Se centra en la actividad interna: primero fabrica el producto y después se preocupa de cómo venderlo."',
      left: 'Producción', right: 'Ventas', a: 'right',
      why: 'La clave es "posteriormente se preocupa de cómo venderlo". Eso distingue a ventas de producción: ventas sí se ocupa de convencer al cliente, con promoción intensa y venta agresiva.',
      tip: 'Ventas: "Ya lo hice; ahora tengo que convencerte."' },

    { q: 'Una fábrica de muebles produce grandes volúmenes al menor costo posible, convencida de que la gente siempre elige lo más barato y disponible.',
      left: 'Producción', right: 'Ventas', a: 'left',
      why: 'Enfoque de producción: el punto de partida es la fábrica. Ni se plantea cómo vender, porque asume que el producto se coloca solo si es accesible y económico.',
      tip: 'Producción: "Si es barato y está disponible, se vende solo."' },

    { q: 'El enfoque de marketing busca obtener ganancias a través de la satisfacción del cliente.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Exacto, y por eso mira hacia afuera: primero investiga qué necesita y desea el cliente, y después crea el producto para satisfacer esa necesidad.',
      tip: 'Marketing: "Primero averiguo qué quieres y luego lo hago."' },

    { q: 'La administración es un enfoque para vender, igual que producción, ventas y marketing.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'La administración es el proceso de planear, organizar, dirigir y controlar los recursos de una organización (personas, dinero, materiales, tiempo). Es una disciplina general, no un enfoque comercial.' },

    { q: 'Atiende las necesidades del vendedor más que las del cliente.',
      left: 'Marketing', right: 'Ventas', a: 'right',
      why: 'El enfoque de ventas prioriza colocar lo que ya se produjo. El inventario manda sobre el deseo del cliente, al contrario del enfoque de marketing.' },

    { q: 'El punto de partida es el cliente y sus necesidades.',
      left: 'Marketing', right: 'Producción', a: 'left',
      why: 'Esa es la inversión que define al enfoque de marketing: la investigación va antes del producto, no después.' },

    { q: 'Producción y ventas son fáciles de confundir porque los dos miran hacia adentro de la empresa.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Correcto, y es el error más común en los exámenes. La diferencia: producción no se ocupa de vender (asume que se vende solo); ventas sí se ocupa, con promoción agresiva.' },

    { q: 'Un enfoque de producción llevado al extremo puede dejar a la empresa con un producto eficiente que nadie quiere.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Es el riesgo conocido como miopía de marketing: optimizas tanto el costo y la escala que pierdes de vista si el mercado todavía quiere eso que fabricas tan bien.' }
  ]
},

/* ---------------------------------------------------------------- 3 ---- */
{
  id: 'cuatro-p',
  name: 'Las 4P',
  emoji: '🎯',
  src: 'guia',
  blurb: 'Producto, Precio, Plaza y Promoción.',
  brief: 'La mezcla de marketing son las cuatro palancas que controla la empresa. Producto: ¿qué vendo? Precio: ¿cuánto cuesta? Plaza: ¿dónde y cómo lo vendo? Promoción: ¿cómo lo doy a conocer? Si el ejemplo habla de dónde se vende o de cómo llega el producto al cliente, es plaza.',
  cards: [
    { q: 'Nike vende a través de sus tiendas propias, su e-commerce y tiendas departamentales.',
      left: 'Promoción', right: 'Plaza', a: 'right',
      why: 'La plaza (o distribución) define dónde y cómo llega el producto al cliente: canales de venta, puntos de venta, logística y cobertura. El ejemplo es una lista de canales.',
      tip: '¿Dónde se vende? → Plaza.' },

    { q: 'Una cafetería decide cobrar más que su competencia para transmitir que su café es de mejor calidad.',
      left: 'Precio', right: 'Producto', a: 'left',
      why: 'Es una decisión de precio. Un precio alto no solo cubre costos: comunica posicionamiento. Es la misma lógica de los tenis que cuestan más por el prestigio de la marca.' },

    { q: 'La tecnología de amortiguación de unos tenis y el diseño de su empaque.',
      left: 'Producto', right: 'Promoción', a: 'left',
      why: 'Producto es todo lo que se ofrece para satisfacer una necesidad: diseño, calidad, características, marca, empaque y garantía.' },

    { q: 'Un comercial protagonizado por un atleta famoso más una campaña en redes sociales.',
      left: 'Plaza', right: 'Promoción', a: 'right',
      why: 'Promoción es cómo la empresa comunica y da a conocer su producto: publicidad, redes, promociones de venta, relaciones públicas y patrocinios.' },

    { q: 'Ofrecer meses sin intereses y precios terminados en 99.',
      left: 'Precio', right: 'Promoción', a: 'left',
      why: 'Son tácticas de precio. El "99" es precio psicológico: 199 se percibe mucho más cerca de 100 que de 200. Los meses sin intereses cambian la forma de pago, no el mensaje.' },

    { q: 'Decidir en qué ciudades abrir sucursales y con qué paqueterías enviar los pedidos.',
      left: 'Plaza', right: 'Producto', a: 'left',
      why: 'Cobertura y logística son plaza. La P de plaza no es solo el punto de venta físico: incluye toda la cadena que acerca el producto al cliente.' },

    { q: 'Ampliar la garantía de 6 meses a 2 años.',
      left: 'Producto', right: 'Precio', a: 'left',
      why: 'La garantía forma parte del producto, entendido como oferta completa. Cambia lo que el cliente recibe, no cuánto paga ni cómo se lo comunicas.' },

    { q: 'A las 4P tradicionales se les suele agregar Personas, Procesos y Evidencia física cuando se trata de servicios.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Es la extensión conocida como las 7P del marketing de servicios. Como lo intangible se produce y se consume al mismo tiempo, el personal, el procedimiento y las señales físicas del lugar se vuelven parte de la oferta.',
      tip: '4P para productos; 7P para servicios.' },

    { q: 'Las 4P describen el negocio desde el punto de vista del cliente.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'Las 4P son la vista de la empresa: son las palancas que ella controla. La traducción al lado del cliente son las 4C (Cliente, Costo, Conveniencia, Comunicación).' }
  ]
},

/* ---------------------------------------------------------------- 4 ---- */
{
  id: 'intermediarios',
  name: 'Canales e intermediarios',
  emoji: '🚚',
  src: 'guia',
  blurb: 'Quién fabrica, quién distribuye y quién vende.',
  brief: 'Los intermediarios de marketing acercan el producto al cliente final. El mayorista compra en grandes cantidades y revende a otros negocios; el minorista (retailer) vende directo al consumidor en cantidades pequeñas. El fabricante hace el producto; el distribuidor lo lleva hasta donde está el cliente.',
  cards: [
    { q: 'Walmart, visto desde un fabricante de refrescos que vende en sus tiendas, es un ejemplo de:',
      left: 'Competencia', right: 'Distribuidor', a: 'right',
      why: 'Walmart es un intermediario de marketing, concretamente un minorista. No fabrica la mayoría de lo que vende: compra a fabricantes y lo pone al alcance del consumidor final.',
      tip: 'El fabricante hace; el distribuidor acerca.' },

    { q: 'Compra grandes cantidades al fabricante y revende a otros negocios.',
      left: 'Mayorista', right: 'Minorista', a: 'left',
      why: 'Ese es el mayorista. El minorista es el que vende directamente al consumidor final, en cantidades pequeñas. Walmart es minorista.' },

    { q: 'Un agente de seguros que te asesora y cierra tu póliza.',
      left: 'Vendedor', right: 'Distribuidor', a: 'left',
      why: 'El vendedor es la persona o el equipo (fuerza de ventas) que trata directamente con el cliente para asesorarlo y cerrar la venta. Es una persona, no un canal.' },

    { q: 'Comunicados de prensa, patrocinios, manejo de crisis y acciones de responsabilidad social.',
      left: 'Relaciones públicas', right: 'Distribución', a: 'left',
      why: 'Las relaciones públicas construyen y cuidan la imagen de la empresa ante la sociedad y los medios. No mueven producto; mueven reputación.' },

    { q: 'Walmart y Soriana, vistos entre sí, son competencia.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Correcto, y aquí está el matiz importante: un mismo actor puede ser competencia de una empresa y distribuidor de otra. Todo depende de quién hace la pregunta.' },

    { q: 'Son las empresas que ofrecen productos iguales, similares o sustitutos al mismo mercado.',
      left: 'Competencia', right: 'Intermediarios', a: 'left',
      why: 'Esa es la definición de competencia. Ojo con los sustitutos: el cine compite con el streaming aunque no vendan lo mismo, porque resuelven la misma necesidad.' },

    { q: 'Una marca que vende solo en su propio sitio web, sin tiendas ni distribuidores, usa un canal directo.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Es un canal directo (D2C, direct to consumer): cero intermediarios. Gana margen y datos del cliente, pero carga con toda la logística y la captación de tráfico.' },

    { q: 'Mientras más intermediarios tenga el canal, mayor control tiene el fabricante sobre el precio final.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'Es al revés. Cada eslabón agrega su margen y sus propias reglas, así que el fabricante pierde control sobre el precio, la exhibición y la experiencia de compra.' }
  ]
},

/* ---------------------------------------------------------------- 5 ---- */
{
  id: 'crm-erp-mrp',
  name: 'CRM, ERP y MRP',
  emoji: '🗂️',
  src: 'guia',
  blurb: 'Tres siglas que se confunden en todos los exámenes.',
  brief: 'CRM (Customer Relationship Management) registra y da seguimiento a todo lo de cada cliente. ERP (Enterprise Resource Planning) integra las áreas internas: finanzas, compras, inventarios, ventas. MRP (Material Requirements Planning) calcula qué materiales necesita la producción, cuántos y cuándo. El CRM mira al cliente; los otros dos miran la operación.',
  cards: [
    { q: '"Llevar el registro de todas las interacciones con los clientes."',
      left: 'ERP', right: 'CRM', a: 'right',
      why: 'Es la función central del CRM: reunir en un solo lugar datos de contacto, llamadas, correos, compras, quejas y seguimientos de cada cliente.',
      tip: 'CRM mira al cliente; ERP y MRP miran la operación.' },

    { q: 'Una tienda en línea guarda cada llamada, correo y compra de sus clientes para darles mejor seguimiento.',
      left: 'CRM', right: 'MRP', a: 'left',
      why: 'CRM. Al tener el historial completo, la empresa conoce mejor a cada cliente, lo atiende a tiempo y puede venderle más. HubSpot y Salesforce son ejemplos típicos.' },

    { q: 'Calcular qué materias primas necesita la línea de producción, en qué cantidad y en qué fecha.',
      left: 'MRP', right: 'CRM', a: 'left',
      why: 'Eso es MRP: planeación de requerimientos de materiales. Es una herramienta de producción, no de marketing.' },

    { q: 'Integrar en un solo sistema finanzas, compras, inventarios y ventas de toda la empresa.',
      left: 'ERP', right: 'CRM', a: 'left',
      why: 'ERP: planificación de recursos empresariales. Es el sistema paraguas que conecta las áreas internas. Muchos ERP incluyen un módulo de CRM, pero no son lo mismo.' },

    { q: 'Registrar qué productos faltan en el almacén y detectar qué hay que reabastecer es una función del CRM.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'Eso es gestión de inventarios, parte del ERP. Es una de las opciones distractoras más usadas: suena a "registrar", pero mira hacia el almacén, no hacia el cliente.' },

    { q: 'Conseguir materias primas, cotizar y negociar con proveedores.',
      left: 'Área de compras', right: 'CRM', a: 'left',
      why: 'Es la función de compras o abastecimiento. Mira hacia el proveedor, es decir, hacia atrás en la cadena; el CRM mira hacia adelante, al cliente.' },

    { q: 'El CRM es únicamente un software que se compra e instala.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'El CRM es primero una estrategia de gestión de la relación con el cliente, apoyada en un sistema. Si nadie registra ni usa los datos, el software no sirve de nada.' },

    { q: 'Un buen CRM permite segmentar a los clientes y lanzarles campañas distintas según su historial.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Correcto: es la base de la comunicación personalizada. Con el historial puedes separar a quien compra cada mes de quien no compra desde hace un año, y hablarle distinto a cada uno.' }
  ]
},

/* ---------------------------------------------------------------- 6 ---- */
{
  id: 'relacion',
  name: 'Marketing de relación',
  emoji: '💞',
  src: 'guia',
  blurb: 'Cuidar al cliente que ya tienes. Ojo con cross-selling y up-selling.',
  brief: 'El marketing de relación (o relacional) busca vínculos de largo plazo con los clientes actuales, para que regresen, compren más y se vuelvan leales. Su actividad central es el seguimiento del comportamiento del consumidor. Si el enunciado menciona datos, movimientos o historial del cliente, piensa en seguimiento del comportamiento.',
  cards: [
    { q: 'Una empresa toma los datos de lo que hacen sus clientes dentro de su sitio y les recomienda productos que podrían interesarles.',
      left: 'Venta cruzada', right: 'Seguimiento del comportamiento', a: 'right',
      why: 'La clave es que recoge y analiza datos de navegación: qué buscan, qué ven, dónde hacen clic. Analizar eso para personalizar lo que se muestra es seguimiento del comportamiento del consumidor.',
      tip: '¿Datos, movimientos o historial? → seguimiento del comportamiento.' },

    { q: 'Al pedir una hamburguesa, el cajero te ofrece agregar papas y refresco.',
      left: 'Venta cruzada', right: 'Venta adicional', a: 'left',
      why: 'Es cross-selling: un producto complementario a lo que ya estás comprando. No hay análisis de tu historial, se basa en la compra del momento.' },

    { q: 'Te ofrecen el mismo celular que estabas viendo, pero con el doble de memoria y más caro.',
      left: 'Venta cruzada', right: 'Venta adicional', a: 'right',
      why: 'Up-selling: una versión mejor o más cara del mismo producto. El cross-selling agrega algo distinto (la funda); el up-selling mejora lo mismo.',
      tip: 'Cruzada = otro producto. Adicional = mejor versión del mismo.' },

    { q: 'La actividad central del marketing de relación es invertir más en publicidad.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'La publicidad sirve sobre todo para dar a conocer la marca y atraer clientes nuevos, y se asocia más al outbound. Gastar más en anuncios no mejora la relación con quien ya te compra.' },

    { q: 'La investigación de mercados y el marketing de relación estudian lo mismo.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'La investigación de mercados mira el mercado completo: tendencias, competencia, consumidores potenciales. El marketing de relación se enfoca en cada cliente que ya tienes.' },

    { q: 'Comunicarse con clientes seleccionados por correo, catálogo o mensaje buscando una respuesta inmediata.',
      left: 'Marketing directo', right: 'Marketing de relación', a: 'left',
      why: 'Es marketing directo: una herramienta de promoción que busca respuesta inmediata. Puede apoyar la relación, pero no es la actividad central del marketing relacional.' },

    { q: 'Retener a un cliente actual suele costar menos que conseguir uno nuevo.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Es el argumento económico del marketing de relación. Ya te conoce, ya confía y ya sabe usar tu producto; no hay que pagar de nuevo por su atención.' },

    { q: 'Programas de puntos, membresías y buen servicio posventa.',
      left: 'Herramientas de relación', right: 'Herramientas de outbound', a: 'left',
      why: 'Son las herramientas típicas del marketing de relación, junto con la comunicación personalizada, la atención a quejas y un CRM que conserve el historial de cada cliente.' },

    { q: 'Las recomendaciones de una plataforma de streaming ("porque viste...") son un ejemplo de seguimiento del comportamiento.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Es el ejemplo canónico, junto con el "te podría interesar" de las tiendas en línea. El sistema observa tu conducta y personaliza lo que te muestra.' }
  ]
},

/* ---------------------------------------------------------------- 7 ---- */
{
  id: 'portafolio',
  name: 'Portafolio, línea y categoría',
  emoji: '📦',
  src: 'guia',
  blurb: 'El todo, el grupo y el tipo.',
  brief: 'Portafolio (o mezcla de productos) es el conjunto completo de todo lo que vende una empresa. Línea es un grupo de productos relacionados dentro de ese portafolio. Categoría es una clasificación del mercado por tipo o uso, sin importar la marca. Se mide por amplitud (cuántas líneas), longitud (cuántos productos) y profundidad (cuántas versiones de cada uno).',
  cards: [
    { q: '"Es el conjunto de productos que una empresa vende en el mercado."',
      left: 'Línea de productos', right: 'Portafolio de productos', a: 'right',
      why: 'Portafolio, también llamado mezcla de productos: el total. El portafolio de Grupo Bimbo incluye panes, pastelitos, galletas, botanas y todo lo demás que comercializa.',
      tip: 'Portafolio = todo. Línea = una parte de ese todo.' },

    { q: 'Una empresa de lácteos vende yogur natural, de fresa, bebible y griego. Ese grupo de yogures, dentro de todo lo que vende, es una…',
      left: 'Línea de productos', right: 'Categoría de productos', a: 'left',
      why: 'Línea de productos: un grupo relacionado dentro del portafolio de esa empresa, porque cumplen función similar y se venden al mismo tipo de cliente.' },

    { q: '"Botanas", "bebidas" o "artículos de limpieza", tal como se organizan los pasillos de un supermercado.',
      left: 'Línea', right: 'Categoría', a: 'right',
      why: 'Categoría: clasifica por tipo o uso en el mercado, sin importar la marca ni el fabricante. La línea pertenece a una empresa; la categoría pertenece al mercado.' },

    { q: 'La cantidad de un producto que los consumidores quieren y pueden comprar a cierto precio en un periodo.',
      left: 'Demanda', right: 'Portafolio', a: 'left',
      why: 'Es la demanda: una medida del mercado, no un conjunto de productos. Aparece como distractor porque suena a "productos", pero es una cantidad.' },

    { q: 'La amplitud de un portafolio es cuántas líneas de productos tiene la empresa.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Correcto. Amplitud = número de líneas. Longitud = cuántos productos en total. Profundidad = cuántas versiones tiene cada producto (tamaños, sabores, presentaciones).' },

    { q: 'Que un shampoo exista en 200 ml, 400 ml y 750 ml aumenta la amplitud del portafolio.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'Aumenta la profundidad, no la amplitud. Son versiones del mismo producto; la amplitud solo crece si se agrega una línea nueva.' },

    { q: 'Una línea de productos puede abarcar varias categorías del mercado.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Sí, porque son criterios distintos. La empresa agrupa su línea por su propia lógica (mismo cliente, mismo canal), y esa línea puede caer en más de una categoría del mercado.' },

    { q: 'Eliminar productos que ya no son rentables se llama poda del portafolio.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Es una decisión normal de gestión de portafolio. Cada producto consume inventario, atención comercial y espacio en el anaquel: mantener uno que no rinde cuesta dinero.' }
  ]
},

/* ---------------------------------------------------------------- 8 ---- */
{
  id: 'investigacion',
  name: 'Investigación de mercados',
  emoji: '🔍',
  src: 'guia',
  blurb: 'Encuesta, entrevista, focus group y observación.',
  brief: 'Muchas personas + preguntas cerradas = encuesta (cuantitativa, sirve para medir y contar). Pocas personas + preguntas abiertas = entrevista (una a la vez) o grupo de enfoque (6 a 10 en conversación guiada), ambas cualitativas. Sin preguntas, solo mirando = observación.',
  cards: [
    { q: '"Un cuestionario compuesto de preguntas cerradas que se aplica a un gran número de personas."',
      left: 'Entrevista', right: 'Encuesta', a: 'right',
      why: 'Encuesta: técnica cuantitativa. Como todas las respuestas tienen el mismo formato, es fácil contarlas y sacar estadísticas del tipo "el 70% prefiere el sabor A".',
      tip: 'Muchas personas + cerradas = encuesta.' },

    { q: 'Una refresquera reúne a 8 personas con un moderador para que opinen sobre el diseño de una botella nueva.',
      left: 'Grupo de enfoque', right: 'Encuesta', a: 'left',
      why: 'Focus group: normalmente de 6 a 10 personas conversando guiadas por un moderador. Técnica cualitativa, sirve para conocer percepciones y reacciones.' },

    { q: 'Mirar y registrar en un supermercado qué productos toma primero la gente, sin preguntarle nada.',
      left: 'Observación', right: 'Entrevista', a: 'left',
      why: 'Observación: no hay preguntas, solo se registra el comportamiento real. Su gran ventaja es que evita la brecha entre lo que la gente dice que hace y lo que hace.' },

    { q: 'Una conversación cara a cara, con una persona a la vez y preguntas abiertas para entender sus motivos.',
      left: 'Entrevista', right: 'Grupo de enfoque', a: 'left',
      why: 'Entrevista a profundidad: cualitativa, pocas personas, busca entender el "por qué". El focus group también es abierto, pero en grupo y con dinámica de conversación.' },

    { q: 'La encuesta sirve para entender a profundidad por qué una persona eligió una marca.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'La encuesta mide y cuenta; es buena para el "cuánto" y el "qué". Para el "por qué" necesitas técnicas cualitativas: entrevista u observación.' },

    { q: 'Datos que la empresa recolecta ella misma para responder su pregunta específica.',
      left: 'Fuente primaria', right: 'Fuente secundaria', a: 'left',
      why: 'Investigación primaria: la empresa levanta el dato (su encuesta, su focus group). La secundaria usa información que ya existe: INEGI, reportes de industria, estudios publicados.',
      tip: 'Primaria = la levanto yo. Secundaria = ya existía.' },

    { q: 'En una muestra, lo único que importa es que sea grande.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'Importa más que sea representativa. Una muestra enorme pero sesgada (solo tus seguidores más fieles) da resultados peores que una muestra chica bien construida.' },

    { q: 'Un focus group puede dar resultados distorsionados porque algunos participantes se dejan llevar por la opinión del grupo.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Es su limitación más conocida: el efecto de deseabilidad social y el participante dominante. Por eso el moderador es clave y por eso se suele complementar con otras técnicas.' },

    { q: 'La observación puede ser cuantitativa.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Puede ser las dos cosas. Si solo describes conductas es cualitativa; si cuentas cuántas personas pasan por un pasillo o cuántos segundos miran un anaquel, es cuantitativa.' }
  ]
},

/* ---------------------------------------------------------------- 9 ---- */
{
  id: 'tipos',
  name: 'Tipos de marketing',
  emoji: '🌱',
  src: 'guia',
  blurb: 'Verde, de servicios, directo, de relación, de entrada y de salida.',
  brief: 'Cada tipo se reconoce por una señal. Verde: medio ambiente, ingredientes naturales, reciclaje. De servicios: lo que se vende es intangible. Directo: contacto con clientes seleccionados buscando respuesta inmediata. De relación: fidelizar a los actuales. De entrada: el cliente llega atraído. De salida: la empresa lo busca interrumpiéndolo.',
  cards: [
    { q: 'The Body Shop usa ingredientes naturales y amigables con el medio ambiente, y lo hace parte de su identidad de marca.',
      left: 'Marketing de servicios', right: 'Marketing verde', a: 'right',
      why: 'Marketing verde (ecológico o sustentable): crear, promover y vender productos que cuidan el ambiente, y hacer de ese compromiso parte de la marca.',
      tip: '¿Ambiente, natural, reciclable? → verde.' },

    { q: 'Un banco diseña su estrategia considerando que lo que vende no se puede tocar ni almacenar.',
      left: 'Marketing de servicios', right: 'Marketing verde', a: 'left',
      why: 'Marketing de servicios: ofertas intangibles como bancos, hoteles, escuelas, aerolíneas o servicios de salud. Lo que se vende es una experiencia o una actividad, no un objeto.' },

    { q: 'The Body Shop hace marketing de servicios porque vende una experiencia de tienda.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'Vende productos tangibles: cremas y jabones. La experiencia de tienda acompaña, pero el núcleo de la oferta es un objeto físico.' },

    { q: 'Catálogos y mensajes con ofertas enviados a una lista de clientes seleccionados.',
      left: 'Marketing directo', right: 'Marketing de entrada', a: 'left',
      why: 'Marketing directo: contacto directo con clientes elegidos, buscando una respuesta inmediata y medible, normalmente una compra.' },

    { q: 'Presumir que un producto es ecológico sin que lo sea realmente tiene un nombre propio: greenwashing.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Greenwashing o lavado verde: usar el discurso ambiental como fachada. Es el riesgo reputacional del marketing verde, porque cuando se descubre destruye la confianza que construyó.' },

    { q: 'Los servicios son inseparables: se producen y se consumen al mismo tiempo.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Es una de las cuatro características clásicas del servicio, junto con intangibilidad, variabilidad (no hay dos cortes de pelo idénticos) y caducidad (un asiento de avión vacío no se guarda).' },

    { q: 'Una campaña del sector salud para que la gente deje de fumar.',
      left: 'Marketing social', right: 'Marketing verde', a: 'left',
      why: 'Marketing social: usa las herramientas del marketing para cambiar un comportamiento en beneficio de la sociedad, no para vender un producto.' },

    { q: 'Una marca paga a una creadora de contenido para que muestre su producto a su audiencia.',
      left: 'Marketing de influencers', right: 'Relaciones públicas', a: 'left',
      why: 'Marketing de influencers: se apoya en la credibilidad que esa persona ya construyó con su comunidad. Las relaciones públicas buscan cobertura y reputación, no una recomendación pagada.' },

    { q: 'El marketing de relación se centra en conseguir clientes nuevos.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'Se centra en cuidar y fidelizar a los clientes actuales. Conseguir nuevos es adquisición, y se apoya más en publicidad, inbound y marketing directo.' }
  ]
},

/* ================= CONTENIDO COMPLEMENTARIO ============================= */

/* --------------------------------------------------------------- 10 ---- */
{
  id: 'stp',
  name: 'Segmentación y STP',
  emoji: '🎚️',
  src: 'extra',
  blurb: 'Segmentar, elegir el objetivo y posicionarse.',
  brief: 'STP es el proceso base de toda estrategia: Segmentación (partir el mercado en grupos con necesidades parecidas), Targeting (elegir a cuál o cuáles atender) y Posicionamiento (definir qué lugar quieres ocupar en la mente de esa gente). Los criterios de segmentación son geográficos, demográficos, psicográficos y conductuales.',
  cards: [
    { q: 'Dividir el mercado por edad, género, ingreso y escolaridad.',
      left: 'Demográfica', right: 'Psicográfica', a: 'left',
      why: 'Segmentación demográfica: datos duros y medibles de la persona. Es la más usada porque es fácil de obtener, pero también la más superficial.' },

    { q: 'Dividir el mercado por estilo de vida, valores y personalidad.',
      left: 'Demográfica', right: 'Psicográfica', a: 'right',
      why: 'Psicográfica: el "cómo piensa y cómo vive". Explica mucho mejor las decisiones de compra que la edad, pero es más difícil de medir.' },

    { q: 'Separar a los clientes según con qué frecuencia compran y qué tanto usan el producto.',
      left: 'Conductual', right: 'Geográfica', a: 'left',
      why: 'Segmentación conductual: se basa en el comportamiento real (frecuencia, lealtad, ocasión de uso, beneficio buscado). Suele ser la más rentable porque usa hechos, no supuestos.' },

    { q: 'Un segmento bien definido debe ser medible, accesible, suficientemente grande y rentable.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Son los criterios clásicos de un segmento viable. Si no puedes medirlo, alcanzarlo con tus canales ni ganar dinero con él, es una curiosidad, no un segmento.' },

    { q: 'El mercado meta (target) es el grupo que la empresa elige atender.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Correcto: el targeting es la decisión. Segmentas para ver el mapa completo y luego eliges en qué parte del mapa vas a jugar.' },

    { q: 'El posicionamiento ocurre en el producto.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'El posicionamiento ocurre en la mente del consumidor. Tú propones con tu mezcla de marketing, pero el lugar que ocupas lo decide él, siempre en comparación con las alternativas.' },

    { q: 'Atender a un solo segmento muy específico con una oferta especializada.',
      left: 'Marketing de nicho', right: 'Marketing masivo', a: 'left',
      why: 'Marketing de nicho: menos volumen, pero menos competencia, mayor margen y clientes más leales. El masivo ofrece lo mismo a todos buscando escala.' },

    { q: 'El buyer persona es un perfil ficticio y detallado que representa a tu cliente ideal.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Correcto: se construye con datos reales de investigación y le pone nombre, contexto, motivaciones y frustraciones. Sirve para que todo el equipo decida pensando en la misma persona.' },

    { q: 'Querer ser todo para todos suele dar un posicionamiento más fuerte.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'Lo debilita. Un posicionamiento fuerte exige renunciar a algo: si tu promesa es la más barata y también la más premium y también la más rápida, no eres nada en particular.' }
  ]
},

/* --------------------------------------------------------------- 11 ---- */
{
  id: 'metricas',
  name: 'Embudo y métricas',
  emoji: '📊',
  src: 'extra',
  blurb: 'CAC, LTV, ROI, ROAS y tasa de conversión.',
  brief: 'El embudo describe el recorrido: conocimiento, interés, consideración, compra y lealtad. Las métricas lo vuelven medible. CAC: cuánto cuesta conseguir un cliente. LTV: cuánto deja ese cliente en toda su vida. La relación LTV/CAC dice si el negocio es sano (se busca 3 a 1 o más).',
  cards: [
    { q: 'Gastaste $50,000 en captación y conseguiste 100 clientes nuevos. Tu CAC es $500.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'CAC = inversión total de captación ÷ clientes nuevos. 50,000 ÷ 100 = $500. Incluye medios, herramientas y sueldos del equipo de adquisición, no solo el gasto en anuncios.' },

    { q: 'Mide el valor total que un cliente deja a la empresa durante toda su relación con ella.',
      left: 'LTV', right: 'CAC', a: 'left',
      why: 'LTV (Lifetime Value) o valor de vida del cliente. Es el argumento duro del marketing de relación: si el LTV sube, puedes permitirte pagar más por cada cliente nuevo.' },

    { q: 'Si tu CAC es mayor que tu LTV, el negocio pierde dinero con cada cliente que suma.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Exacto, y es un error fatal porque crecer lo empeora. Se busca una relación LTV/CAC de al menos 3 a 1 para cubrir operación y dejar utilidad.' },

    { q: 'Ingresos generados por la publicidad ÷ gasto en publicidad.',
      left: 'ROAS', right: 'ROI', a: 'left',
      why: 'ROAS (Return On Ad Spend) mide solo el retorno del gasto publicitario, en ingresos. El ROI es más amplio: considera la utilidad y todos los costos, no solo los ingresos y el gasto en medios.',
      tip: 'ROAS = ingresos / gasto en ads. ROI = ganancia neta / inversión total.' },

    { q: 'De 2,000 visitas a tu tienda en línea, 60 compraron. La tasa de conversión es 3%.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: '60 ÷ 2,000 = 0.03 = 3%. La conversión siempre se define contra una acción concreta: puede ser comprar, registrarse o descargar algo.' },

    { q: 'El porcentaje de clientes que dejan de comprarte en un periodo.',
      left: 'Churn', right: 'Conversión', a: 'left',
      why: 'Churn o tasa de cancelación. Es el enemigo del LTV: bajar el churn un poco alarga mucho la vida del cliente y mejora el negocio más rápido que traer gente nueva.' },

    { q: 'Un ROAS de 1.0 significa que la campaña fue rentable.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'ROAS 1.0 significa que recuperaste exactamente lo que gastaste en ingresos, sin contar el costo del producto ni la operación. En la práctica es una pérdida.' },

    { q: 'Las métricas de la parte alta del embudo (alcance, impresiones) se llaman métricas de vanidad cuando no se conectan con un resultado de negocio.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Se les llama así porque suben fácil y se ven bien en un reporte, pero por sí solas no prueban nada. Sirven si las puedes ligar a conversión e ingreso.' },

    { q: 'El ticket promedio es el monto medio que gasta un cliente por compra.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Correcto, y es la palanca donde trabajan el cross-selling y el up-selling: sin traer un solo cliente nuevo, puedes aumentar el ingreso subiendo el ticket.' }
  ]
},

/* --------------------------------------------------------------- 12 ---- */
{
  id: 'marca',
  name: 'Marca y posicionamiento',
  emoji: '✨',
  src: 'extra',
  blurb: 'Branding, identidad, propuesta de valor y diferenciación.',
  brief: 'La marca no es el logo: es el conjunto de asociaciones que una persona tiene en la cabeza al escuchar tu nombre. El branding es el trabajo deliberado de construir esas asociaciones. La propuesta de valor responde por qué alguien debería elegirte a ti y no a la alternativa.',
  cards: [
    { q: 'La marca es básicamente el logotipo y los colores de la empresa.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'Eso es la identidad visual, que es solo la superficie. La marca es el conjunto de percepciones, expectativas y asociaciones que vive en la mente del consumidor.' },

    { q: 'El valor adicional que la gente paga solo por el nombre de la marca.',
      left: 'Brand equity', right: 'Posicionamiento', a: 'left',
      why: 'Brand equity o capital de marca: dos productos idénticos en función pueden tener precios muy distintos por lo que la marca significa. Es un activo real del negocio.' },

    { q: 'La propuesta de valor debe explicar qué te hace distinto y por qué eso le importa al cliente.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Las dos partes son necesarias. Ser distinto en algo que al cliente le da igual no es diferenciación, es solo ser raro.' },

    { q: 'Una característica única que la competencia no puede ofrecer y que motiva la compra.',
      left: 'Ventaja competitiva', right: 'Mezcla de marketing', a: 'left',
      why: 'Ventaja competitiva. Para sostenerse tiene que ser difícil de imitar: una patente, una red de distribución, una marca querida o una estructura de costos que nadie alcanza.' },

    { q: 'Las extensiones de marca siempre fortalecen a la marca madre.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'Pueden diluirla. Si la extensión no encaja con lo que la marca significa, confunde al consumidor y debilita la asociación central que tanto costó construir.' },

    { q: 'El conjunto de rasgos humanos que se le atribuyen a una marca (cercana, rebelde, sofisticada).',
      left: 'Personalidad de marca', right: 'Brand equity', a: 'left',
      why: 'Personalidad de marca. Es lo que hace que dos marcas con el mismo producto y precio se sientan completamente distintas, y guía el tono de toda su comunicación.' },

    { q: 'Un mapa de posicionamiento ubica a las marcas de una categoría según dos atributos que le importan al consumidor.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Correcto, por ejemplo precio contra calidad percibida. Su utilidad real es mostrar los huecos: zonas del mapa donde hay demanda y nadie está parado.' },

    { q: 'Lo que una marca promete cumplir de forma consistente cada vez que el cliente la usa.',
      left: 'Promesa de marca', right: 'Segmentación', a: 'left',
      why: 'Promesa de marca. La consistencia es lo que la vuelve creíble: una promesa que se cumple a veces genera más desconfianza que no prometer nada.' }
  ]
},

/* --------------------------------------------------------------- 13 ---- */
{
  id: 'ciclo-vida',
  name: 'Ciclo de vida y BCG',
  emoji: '📈',
  src: 'extra',
  blurb: 'Introducción, crecimiento, madurez y declive. Más la matriz BCG.',
  brief: 'Todo producto recorre cuatro etapas: introducción (pocas ventas, mucha inversión), crecimiento (ventas aceleradas, entra competencia), madurez (ventas estables, guerra de precios) y declive (caen las ventas). La matriz BCG clasifica el portafolio en estrella, vaca lechera, interrogante y perro, según participación de mercado y crecimiento.',
  cards: [
    { q: 'Etapa con ventas bajas, costos altos por unidad y fuerte inversión en dar a conocer el producto.',
      left: 'Introducción', right: 'Madurez', a: 'left',
      why: 'Introducción: casi nadie conoce el producto, así que la prioridad es generar awareness y prueba. Normalmente todavía no hay utilidades.' },

    { q: 'Las ventas se estabilizan, el mercado está saturado y la competencia pelea por precio.',
      left: 'Crecimiento', right: 'Madurez', a: 'right',
      why: 'Madurez: la etapa más larga y donde está la mayoría de los productos que usas a diario. Como ya no hay clientes nuevos que ganar, se compite robándole participación al rival.' },

    { q: 'En la etapa de crecimiento las ventas se aceleran y empiezan a entrar competidores.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Correcto: el mercado valida la categoría y otros quieren su parte. La prioridad pasa de educar al mercado a construir preferencia y asegurar distribución.' },

    { q: 'Alta participación de mercado en una categoría que crece rápido.',
      left: 'Estrella', right: 'Vaca lechera', a: 'left',
      why: 'Estrella en la matriz BCG: va ganando y el mercado crece. Exige mucha inversión para defender la posición, y si lo logra se convierte en vaca lechera.' },

    { q: 'Alta participación de mercado en una categoría que ya casi no crece.',
      left: 'Vaca lechera', right: 'Interrogante', a: 'left',
      why: 'Vaca lechera: genera mucho efectivo con poca inversión. Su papel estratégico es financiar a las estrellas y a los interrogantes del portafolio.',
      tip: 'Mercado estancado + lideras = vaca lechera: ordeñarla.' },

    { q: 'Baja participación en un mercado que crece rápido: hay que decidir si invertir fuerte o salir.',
      left: 'Interrogante', right: 'Perro', a: 'left',
      why: 'Interrogante (o niño problema): la oportunidad existe pero no la estás capturando. Es la casilla que exige una decisión, porque quedarse a medias es lo peor.' },

    { q: 'Baja participación en un mercado que tampoco crece.',
      left: 'Perro', right: 'Estrella', a: 'left',
      why: 'Perro: ni lideras ni el mercado te va a ayudar. Normalmente se desinvierte o se elimina, salvo que sostenga a otro producto del portafolio.' },

    { q: 'En declive la mejor decisión siempre es eliminar el producto de inmediato.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'Hay alternativas: cosechar (reducir costos y ordeñar lo que queda), reposicionar hacia otro uso o segmento, o venderle la línea a alguien más.' },

    { q: 'El ciclo de vida del producto y el ciclo de vida del cliente son el mismo concepto.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'El del producto describe las ventas de una oferta en el mercado. El del cliente describe la relación de una persona con la marca: adquisición, activación, retención y recomendación.' }
  ]
},

/* --------------------------------------------------------------- 14 ---- */
{
  id: 'precio',
  name: 'Estrategias de precio',
  emoji: '🏷️',
  src: 'extra',
  blurb: 'Descremado, penetración, psicológico y por valor.',
  brief: 'El precio es la única P que entra dinero de forma directa, y la más rápida de cambiar. Puedes fijarlo por costos (costo más margen), por competencia (mirando al rival) o por valor percibido (lo que el cliente cree que vale). Esta última suele ser la más rentable y la más difícil.',
  cards: [
    { q: 'Lanzar con precio alto para aprovechar a los primeros entusiastas y bajarlo con el tiempo.',
      left: 'Descremado', right: 'Penetración', a: 'left',
      why: 'Precio de descremado (skimming): recupera la inversión rápido con quienes pagan por ser los primeros. Típico en electrónica y lanzamientos tecnológicos.' },

    { q: 'Entrar con precio deliberadamente bajo para ganar participación de mercado rápido.',
      left: 'Descremado', right: 'Penetración', a: 'right',
      why: 'Precio de penetración: sacrifica margen al inicio para construir base de clientes y volumen. Funciona si luego puedes subir el precio o bajar costos por escala.',
      tip: 'Descremado entra caro; penetración entra barato.' },

    { q: 'Poner $199 en lugar de $200.',
      left: 'Precio psicológico', right: 'Precio por valor', a: 'left',
      why: 'Precio psicológico o de referencia: el cerebro ancla en el primer dígito y percibe 199 mucho más cerca de 100 que de 200. Es una diferencia real de un peso.' },

    { q: 'Fijar el precio a partir de lo que el cliente percibe que el producto vale para él.',
      left: 'Por valor', right: 'Por costos', a: 'left',
      why: 'Pricing por valor percibido: el costo solo marca el piso. Es la estrategia más rentable, pero exige entender muy bien al cliente y tener una diferenciación real.' },

    { q: 'Sumar un margen fijo sobre el costo de producción.',
      left: 'Costo más margen', right: 'Por valor', a: 'left',
      why: 'Cost-plus: simple y seguro, pero ignora por completo al cliente y a la competencia. Puedes estar dejando dinero en la mesa o estar fuera de mercado sin saberlo.' },

    { q: 'Vender varios productos juntos a un precio menor que la suma de sus precios individuales.',
      left: 'Bundling', right: 'Descremado', a: 'left',
      why: 'Bundling o venta por paquete: sube el ticket promedio, mueve inventario de baja rotación y hace más difícil que el cliente compare precios contra la competencia.' },

    { q: 'Bajar el precio es siempre la forma más rápida de aumentar las utilidades.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'Al contrario: el descuento sale completo de la utilidad. Si tu margen es 30% y descuentas 10%, necesitas vender bastante más solo para quedar igual que antes.' },

    { q: 'La elasticidad de la demanda mide cuánto cambian las ventas cuando cambia el precio.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Correcto. Demanda elástica: un cambio de precio mueve mucho las ventas (refrescos de marca libre). Inelástica: casi no las mueve (medicamentos, gasolina).' },

    { q: 'Un precio muy bajo siempre mejora la percepción del producto.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'Puede dañarla. En categorías donde el cliente no puede juzgar la calidad por sí mismo, el precio funciona como señal: demasiado barato se lee como sospechoso.' }
  ]
},

/* --------------------------------------------------------------- 15 ---- */
{
  id: 'digital',
  name: 'Marketing digital',
  emoji: '💻',
  src: 'extra',
  blurb: 'SEO, SEM, redes, email y medios propios, pagados y ganados.',
  brief: 'Tres tipos de medios: propios (tu sitio, tu base de correos, tus perfiles), pagados (anuncios) y ganados (lo que otros dicen de ti sin pagarles). El SEO atrae tráfico orgánico trabajando el contenido; el SEM lo compra con anuncios. El email sigue siendo el canal con mejor retorno porque el medio es tuyo.',
  cards: [
    { q: 'Optimizar tu sitio y su contenido para aparecer en los resultados no pagados de Google.',
      left: 'SEO', right: 'SEM', a: 'left',
      why: 'SEO (Search Engine Optimization): tráfico orgánico. Tarda meses en dar resultados, pero una vez posicionado no pagas por cada visita.' },

    { q: 'Pagar para aparecer arriba en los resultados de búsqueda.',
      left: 'SEO', right: 'SEM', a: 'right',
      why: 'SEM (Search Engine Marketing) o anuncios de búsqueda. Resultados inmediatos y control total del gasto, pero el tráfico se detiene en cuanto apagas la campaña.',
      tip: 'SEO se gana con contenido; SEM se compra con dinero.' },

    { q: 'Tu sitio web, tu blog y tu base de suscriptores de correo.',
      left: 'Medios propios', right: 'Medios ganados', a: 'left',
      why: 'Medios propios (owned): los controlas tú y no dependes del algoritmo de nadie. Por eso construir base de correos es tan valioso.' },

    { q: 'Una reseña espontánea de un usuario y una mención en prensa que no pagaste.',
      left: 'Medios ganados', right: 'Medios pagados', a: 'left',
      why: 'Medios ganados (earned): los más creíbles porque no vienen de la marca, y los que menos controlas. El boca en boca entra aquí.' },

    { q: 'La búsqueda por palabras clave de intención de compra ("comprar tenis para correr") está en la parte baja del embudo.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Correcto: quien busca así ya decidió qué quiere y está eligiendo dónde comprarlo. Convierte mucho mejor que una búsqueda informativa como "cómo empezar a correr".' },

    { q: 'Mandar el mismo correo a toda tu base sin importar el comportamiento de cada persona.',
      left: 'Mala práctica', right: 'Buena práctica', a: 'left',
      why: 'Sube las bajas y las marcas de spam, y con eso cae la entregabilidad para todos tus correos. La segmentación y la automatización por comportamiento existen justo para evitarlo.' },

    { q: 'El alcance orgánico en redes sociales es un medio propio totalmente confiable.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'El perfil es tuyo, pero la distribución la decide el algoritmo de la plataforma. Un cambio de reglas puede borrar tu alcance de un día para otro: es medio prestado.' },

    { q: 'Una prueba A/B compara dos versiones de un anuncio o una página para ver cuál funciona mejor.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Correcto, y la regla de oro es cambiar una sola variable a la vez. Si mueves el titular, la imagen y el botón juntos, no sabrás a qué atribuir la diferencia.' },

    { q: 'El remarketing muestra anuncios a personas que ya interactuaron con tu marca.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'También llamado retargeting: le habla a quien ya te conoce (visitó tu sitio, abandonó el carrito). Convierte mucho mejor que la publicidad a audiencias frías.' }
  ]
},

/* --------------------------------------------------------------- 16 ---- */
{
  id: 'consumidor',
  name: 'Comportamiento del consumidor',
  emoji: '🧠',
  src: 'extra',
  blurb: 'Cómo y por qué la gente decide comprar.',
  brief: 'El proceso de decisión tiene cinco pasos: reconocimiento de la necesidad, búsqueda de información, evaluación de alternativas, decisión de compra y comportamiento posterior a la compra. Sobre él influyen factores culturales, sociales, personales y psicológicos.',
  cards: [
    { q: 'El proceso de decisión de compra termina en el momento en que el cliente paga.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'Falta la etapa posterior a la compra, que define si repite y si recomienda. Ahí viven la satisfacción, las reseñas y la disonancia cognitiva del arrepentimiento.' },

    { q: 'La incomodidad de dudar si tomaste la decisión correcta después de una compra grande.',
      left: 'Disonancia cognitiva', right: 'Elasticidad', a: 'left',
      why: 'Disonancia cognitiva poscompra. Las marcas la combaten con garantías, devoluciones fáciles y correos de refuerzo que te confirman que elegiste bien.' },

    { q: 'Familia, amigos y grupos de referencia son factores sociales en la decisión de compra.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Correcto, y suelen pesar más que la publicidad. Por eso funcionan tan bien las reseñas, las recomendaciones y el marketing de influencers.' },

    { q: 'Comprar pasta de dientes de la misma marca de siempre, sin pensarlo.',
      left: 'Compra habitual', right: 'Compra compleja', a: 'left',
      why: 'Comportamiento habitual: bajo involucramiento y poca diferencia percibida. Aquí la marca gana por disponibilidad, hábito y recordación, no por argumentos.' },

    { q: 'Comparar durante semanas modelos, precios y reseñas antes de comprar un refrigerador.',
      left: 'Compra compleja', right: 'Compra por impulso', a: 'left',
      why: 'Comportamiento complejo: alto involucramiento y diferencias claras entre marcas. El cliente busca información activamente, así que el contenido comparativo y la asesoría deciden la venta.' },

    { q: 'La necesidad de pertenencia y reconocimiento es un factor psicológico y social, no solo funcional.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Correcto: en la pirámide de Maslow esas necesidades están por encima de las básicas. Muchas categorías (ropa, autos, tecnología) se venden principalmente ahí.' },

    { q: 'El reconocimiento de la necesidad siempre surge dentro de la persona, sin estímulos externos.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'Puede ser interno (hambre) o externo: un anuncio, el producto de un amigo o un aparador despiertan una necesidad que no estaba activa.' },

    { q: 'La prueba social hace que la gente tienda a elegir lo que otros ya eligieron.',
      left: 'Falso', right: 'Verdadero', a: 'right',
      why: 'Correcto, y es la razón de ser de las reseñas, los contadores de "ya lo compraron X personas" y los testimonios. Reduce el riesgo percibido.' },

    { q: 'En la evaluación de alternativas el consumidor compara todas las opciones del mercado.',
      left: 'Falso', right: 'Verdadero', a: 'left',
      why: 'Compara solo su conjunto de consideración: las pocas marcas que ya tiene en la cabeza. Entrar a ese conjunto es justo el trabajo del awareness y del posicionamiento.' }
  ]
}

];


/* =========================================================================
   GLOSARIO — términos de consulta rápida
   ========================================================================= */
const GLOSSARY = [
  ['Marketing de salida (outbound)', 'Marketing de empuje: parte del producto y lo lanza al mercado con publicidad masiva, llamadas o volantes. Su meta es vender el mayor volumen de unidades.', 'inbound-outbound'],
  ['Marketing de entrada (inbound)', 'Atrae al cliente con contenido útil e interesante para que llegue por su cuenta, sin interrumpirlo con anuncios.', 'inbound-outbound'],
  ['Awareness', 'Conocimiento de marca: que la gente sepa que tu producto existe y lo reconozca.', 'inbound-outbound'],
  ['Enfoque de producción', 'Asume que el cliente prefiere lo disponible y barato, así que se concentra en fabricar mucho y a bajo costo.', 'enfoques'],
  ['Enfoque de ventas', 'Primero fabrica y después busca cómo convencer al cliente con promoción intensa. Mira hacia adentro de la empresa.', 'enfoques'],
  ['Enfoque de marketing', 'Primero investiga qué necesita el cliente y después crea el producto. Busca ganancias a través de su satisfacción.', 'enfoques'],
  ['Miopía de marketing', 'Enfocarse tanto en el producto y su eficiencia que se pierde de vista si el mercado todavía lo quiere.', 'enfoques'],
  ['Mezcla de marketing (4P)', 'Las cuatro palancas que controla la empresa: Producto, Precio, Plaza y Promoción.', 'cuatro-p'],
  ['Producto', 'Todo lo que se ofrece para satisfacer una necesidad: diseño, calidad, características, marca, empaque y garantía.', 'cuatro-p'],
  ['Precio', 'Lo que paga el cliente y la estrategia detrás de esa cifra. Es la única P que ingresa dinero directamente.', 'cuatro-p'],
  ['Plaza', 'Dónde y cómo llega el producto al cliente: canales, puntos de venta, logística y cobertura.', 'cuatro-p'],
  ['Promoción', 'Cómo se comunica y da a conocer el producto: publicidad, redes, promociones, relaciones públicas y patrocinios.', 'cuatro-p'],
  ['Las 7P', 'Extensión de las 4P para servicios: agrega Personas, Procesos y Evidencia física.', 'cuatro-p'],
  ['Las 4C', 'Traducción de las 4P al lado del cliente: Cliente, Costo, Conveniencia y Comunicación.', 'cuatro-p'],
  ['Intermediario de marketing', 'Actor que acerca el producto del fabricante al cliente final.', 'intermediarios'],
  ['Mayorista', 'Compra grandes cantidades al fabricante y revende a otros negocios.', 'intermediarios'],
  ['Minorista (retailer)', 'Vende directamente al consumidor final en cantidades pequeñas. Walmart es el ejemplo típico.', 'intermediarios'],
  ['Canal directo (D2C)', 'La marca vende al consumidor sin intermediarios. Más margen y más datos, pero toda la logística es suya.', 'intermediarios'],
  ['Relaciones públicas', 'Actividades para construir y cuidar la imagen de la empresa ante la sociedad y los medios.', 'intermediarios'],
  ['Competencia', 'Empresas que ofrecen productos iguales, similares o sustitutos al mismo mercado.', 'intermediarios'],
  ['CRM', 'Customer Relationship Management: estrategia y sistema que reúne todo el historial de cada cliente para darle seguimiento.', 'crm-erp-mrp'],
  ['ERP', 'Enterprise Resource Planning: integra en un sistema las áreas internas (finanzas, compras, inventarios, ventas).', 'crm-erp-mrp'],
  ['MRP', 'Material Requirements Planning: calcula qué materiales necesita la producción, cuántos y cuándo.', 'crm-erp-mrp'],
  ['Marketing de relación', 'Construir vínculos de largo plazo con los clientes actuales para que regresen y se vuelvan leales.', 'relacion'],
  ['Seguimiento del comportamiento', 'Analizar lo que hace el cliente (búsquedas, clics, historial) para personalizar lo que se le ofrece.', 'relacion'],
  ['Venta cruzada (cross-selling)', 'Ofrecer un producto complementario a lo que el cliente ya compra: la funda con el celular.', 'relacion'],
  ['Venta adicional (up-selling)', 'Ofrecer una versión mejor o más cara del mismo producto: el celular con más memoria.', 'relacion'],
  ['Marketing directo', 'Comunicación con clientes seleccionados (correo, catálogo, mensaje) buscando una respuesta inmediata.', 'relacion'],
  ['Portafolio de productos', 'El conjunto completo de todo lo que vende una empresa. También se le llama mezcla de productos.', 'portafolio'],
  ['Línea de productos', 'Grupo de productos relacionados dentro del portafolio de una empresa.', 'portafolio'],
  ['Categoría de productos', 'Clasificación del mercado por tipo o uso, sin importar la marca ni el fabricante.', 'portafolio'],
  ['Amplitud, longitud y profundidad', 'Medidas del portafolio: cuántas líneas, cuántos productos en total y cuántas versiones de cada uno.', 'portafolio'],
  ['Demanda', 'Cantidad de un producto que los consumidores quieren y pueden comprar a cierto precio en un periodo.', 'portafolio'],
  ['Encuesta', 'Técnica cuantitativa: mismo cuestionario con preguntas cerradas aplicado a muchas personas. Sirve para medir y contar.', 'investigacion'],
  ['Entrevista a profundidad', 'Técnica cualitativa: conversación con una persona a la vez y preguntas abiertas, para entender el por qué.', 'investigacion'],
  ['Grupo de enfoque (focus group)', 'Técnica cualitativa: 6 a 10 personas conversando guiadas por un moderador.', 'investigacion'],
  ['Observación', 'Mirar y registrar el comportamiento real sin hacer preguntas. Puede ser cualitativa o cuantitativa.', 'investigacion'],
  ['Investigación primaria', 'Datos que la propia empresa levanta para responder su pregunta específica.', 'investigacion'],
  ['Investigación secundaria', 'Datos que ya existen y se reutilizan: INEGI, reportes de industria, estudios publicados.', 'investigacion'],
  ['Marketing verde', 'También ecológico o sustentable: crear y vender productos que cuidan el ambiente, y hacerlo parte de la marca.', 'tipos'],
  ['Greenwashing', 'Presumir un compromiso ambiental que no es real. Es el riesgo reputacional del marketing verde.', 'tipos'],
  ['Marketing de servicios', 'Se aplica a ofertas intangibles: bancos, hoteles, escuelas, aerolíneas, salud.', 'tipos'],
  ['Características del servicio', 'Intangibilidad, inseparabilidad, variabilidad y caducidad.', 'tipos'],
  ['Marketing social', 'Usa herramientas de marketing para cambiar un comportamiento en beneficio de la sociedad.', 'tipos'],
  ['Marketing de influencers', 'Apoyarse en la credibilidad que una persona ya construyó con su audiencia.', 'tipos'],
  ['STP', 'Segmentación, Targeting y Posicionamiento: el proceso base de toda estrategia de marketing.', 'stp'],
  ['Segmentación demográfica', 'Dividir el mercado por edad, género, ingreso o escolaridad.', 'stp'],
  ['Segmentación psicográfica', 'Dividir el mercado por estilo de vida, valores y personalidad.', 'stp'],
  ['Segmentación conductual', 'Dividir el mercado por comportamiento real: frecuencia, lealtad, ocasión de uso.', 'stp'],
  ['Mercado meta (target)', 'El segmento o segmentos que la empresa decide atender.', 'stp'],
  ['Posicionamiento', 'El lugar que una marca ocupa en la mente del consumidor, siempre en relación con las alternativas.', 'stp'],
  ['Buyer persona', 'Perfil ficticio y detallado del cliente ideal, construido con datos reales de investigación.', 'stp'],
  ['Marketing de nicho', 'Atender un segmento muy específico con una oferta especializada.', 'stp'],
  ['Embudo de conversión', 'El recorrido del cliente: conocimiento, interés, consideración, compra y lealtad.', 'metricas'],
  ['CAC', 'Costo de adquisición de cliente: inversión total de captación dividida entre clientes nuevos.', 'metricas'],
  ['LTV', 'Lifetime Value o valor de vida: todo lo que un cliente deja a la empresa durante su relación con ella.', 'metricas'],
  ['Relación LTV/CAC', 'Indicador de salud del negocio. Se busca al menos 3 a 1 para cubrir operación y dejar utilidad.', 'metricas'],
  ['ROI', 'Retorno sobre la inversión: ganancia neta entre inversión total. Considera todos los costos.', 'metricas'],
  ['ROAS', 'Return On Ad Spend: ingresos generados entre gasto publicitario. Solo mide la publicidad.', 'metricas'],
  ['Tasa de conversión', 'Porcentaje de personas que realizan la acción deseada respecto al total que tuvo la oportunidad.', 'metricas'],
  ['Churn', 'Tasa de cancelación: porcentaje de clientes que dejan de comprar en un periodo.', 'metricas'],
  ['Ticket promedio', 'Monto medio que gasta un cliente por compra. Lo suben el cross-selling y el up-selling.', 'metricas'],
  ['Métrica de vanidad', 'Indicador que se ve bien pero no se conecta con un resultado de negocio.', 'metricas'],
  ['Brand equity', 'Capital de marca: el valor adicional que la gente paga solo por el nombre.', 'marca'],
  ['Propuesta de valor', 'Por qué alguien debería elegirte a ti y no a la alternativa, en términos que le importen.', 'marca'],
  ['Ventaja competitiva', 'Característica difícil de imitar que motiva la compra y que la competencia no puede ofrecer.', 'marca'],
  ['Personalidad de marca', 'Rasgos humanos que se le atribuyen a una marca: cercana, rebelde, sofisticada.', 'marca'],
  ['Mapa de posicionamiento', 'Gráfico que ubica a las marcas de una categoría según dos atributos relevantes para el consumidor.', 'marca'],
  ['Ciclo de vida del producto', 'Introducción, crecimiento, madurez y declive.', 'ciclo-vida'],
  ['Matriz BCG', 'Clasifica el portafolio en estrella, vaca lechera, interrogante y perro.', 'ciclo-vida'],
  ['Estrella (BCG)', 'Alta participación en un mercado que crece rápido. Exige inversión para defenderse.', 'ciclo-vida'],
  ['Vaca lechera (BCG)', 'Alta participación en un mercado que ya no crece. Genera efectivo con poca inversión.', 'ciclo-vida'],
  ['Interrogante (BCG)', 'Baja participación en un mercado que crece. Hay que decidir si invertir fuerte o salir.', 'ciclo-vida'],
  ['Perro (BCG)', 'Baja participación en un mercado que tampoco crece. Normalmente se desinvierte.', 'ciclo-vida'],
  ['Precio de descremado', 'Lanzar con precio alto para los primeros entusiastas y bajarlo con el tiempo.', 'precio'],
  ['Precio de penetración', 'Entrar con precio bajo para ganar participación de mercado rápido.', 'precio'],
  ['Precio psicológico', 'Usar cifras como $199 para que el precio se perciba más bajo de lo que es.', 'precio'],
  ['Pricing por valor', 'Fijar el precio según lo que el cliente percibe que el producto vale para él.', 'precio'],
  ['Costo más margen', 'Sumar un margen fijo sobre el costo. Simple, pero ignora al cliente y a la competencia.', 'precio'],
  ['Bundling', 'Vender productos juntos por menos que la suma de sus precios individuales.', 'precio'],
  ['Elasticidad de la demanda', 'Cuánto cambian las ventas cuando cambia el precio.', 'precio'],
  ['SEO', 'Optimizar sitio y contenido para aparecer en los resultados no pagados de los buscadores.', 'digital'],
  ['SEM', 'Pagar por aparecer en los resultados de búsqueda. Inmediato, pero se detiene al apagar la campaña.', 'digital'],
  ['Medios propios (owned)', 'Los que controlas: tu sitio, tu blog, tu base de correos.', 'digital'],
  ['Medios pagados (paid)', 'Espacios que compras: anuncios en buscadores, redes o medios.', 'digital'],
  ['Medios ganados (earned)', 'Lo que otros dicen de ti sin pagarles: reseñas, prensa, boca en boca. Los más creíbles.', 'digital'],
  ['Prueba A/B', 'Comparar dos versiones cambiando una sola variable para ver cuál funciona mejor.', 'digital'],
  ['Remarketing', 'Mostrar anuncios a personas que ya interactuaron con la marca. También retargeting.', 'digital'],
  ['Proceso de decisión de compra', 'Reconocimiento de la necesidad, búsqueda, evaluación, decisión y comportamiento poscompra.', 'consumidor'],
  ['Disonancia cognitiva', 'La duda incómoda de si elegiste bien, después de una compra importante.', 'consumidor'],
  ['Conjunto de consideración', 'Las pocas marcas que el consumidor realmente compara. Entrar ahí es el trabajo del posicionamiento.', 'consumidor'],
  ['Compra habitual', 'Bajo involucramiento y poca diferencia percibida: se gana por hábito y disponibilidad.', 'consumidor'],
  ['Compra compleja', 'Alto involucramiento y diferencias claras: el cliente investiga antes de decidir.', 'consumidor'],
  ['Prueba social', 'La tendencia a elegir lo que otros ya eligieron. Base de reseñas y testimonios.', 'consumidor']
];

/* Modo examen: preguntas tomadas del ejercicio "Ponte a prueba" de la guía. */
const EXAM_SIZE = 12;

if (typeof module !== 'undefined') { module.exports = { DECKS, GLOSSARY, EXAM_SIZE }; }
