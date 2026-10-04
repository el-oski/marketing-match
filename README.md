# 💡 MarketingMatch

Una app web para entrenar conceptos de **fundamentos de marketing** deslizando cartas,
al estilo de las apps de citas: cada carta plantea un caso y tú decides de qué lado cae.

🔗 **[Abrir la app](https://marketing-match.vercel.app)**

![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-sin_dependencias-f7df1e)
![Sin build](https://img.shields.io/badge/build-no_requerido-success)

---

## Qué incluye

| | |
|---|---|
| **16 barajas** | 9 salen directo de la *Guía de estudio · Fundamentos de marketing*; 7 son contenido complementario |
| **139 cartas** | Cada una con su explicación del porqué y, en muchos casos, un truco para recordarlo |
| **94 términos** | Glosario con buscador, ligado a la baraja donde se practica cada concepto |

### Las barajas

**De la guía de estudio**
Entrada vs. Salida · Enfoques de la empresa · Las 4P · Canales e intermediarios ·
CRM, ERP y MRP · Marketing de relación · Portafolio, línea y categoría ·
Investigación de mercados · Tipos de marketing

**Complementarias**
Segmentación y STP · Embudo y métricas (CAC, LTV, ROI, ROAS) · Marca y posicionamiento ·
Ciclo de vida y matriz BCG · Estrategias de precio · Marketing digital ·
Comportamiento del consumidor

## Cómo se juega

Cada carta propone dos opciones, una a cada lado. Arrástrala hacia la que creas correcta,
usa los botones o las flechas `←` `→` del teclado. Si no sabes, desliza hacia arriba
(o pulsa `?`) y te explico sin penalizarte el acierto.

Después de cada respuesta aparece la explicación: por qué esa es la correcta y qué
significaba la otra opción, porque las opciones incorrectas también son conceptos de examen.

### Modos

- **Barajas** — practica un tema concreto, con un repaso previo de la teoría.
- **Repaso inteligente** — junta de todas las barajas las cartas que has fallado o que aún no dominas.
- **Modo examen** — 12 cartas al azar de todo el temario, con calificación final y detalle de errores.
- **Glosario** — los 94 términos con buscador, para consultar sin jugar.

### Progreso

Se guarda en tu navegador (`localStorage`), así que no hay cuentas ni servidor:

- **XP y niveles** — 10 XP por acierto, con bonus creciente por racha.
- **Racha** — aciertos consecutivos; se rompe al fallar.
- **Dominio por carta** — una carta se considera dominada tras dos aciertos seguidos.
  Si la fallas, vuelve a cero y reaparece en el repaso.
- **Barras por baraja** — el porcentaje de cartas dominadas, con 👑 al llegar al 100 %.

## Correr en local

No hay build ni dependencias. Cualquier servidor estático sirve:

```bash
python3 -m http.server 4455
```

Y abre `http://localhost:4455`.

## Estructura

```
index.html        Las cinco pantallas de la app
css/styles.css    Estilos, tema claro y oscuro
js/data.js        Las 139 cartas y el glosario — aquí se edita el contenido
js/app.js         Swipe, puntaje, persistencia y navegación
```

### Agregar contenido

Cada carta es un objeto en `js/data.js`:

```js
{
  q: 'El enunciado o el caso que se muestra en la carta',
  left: 'Opción izquierda', right: 'Opción derecha',
  a: 'right',                       // el lado correcto
  why: 'La explicación que aparece después de responder',
  tip: 'Truco opcional para recordarlo'
}
```

## Accesibilidad y compatibilidad

Funciona con teclado, respeta `prefers-reduced-motion`, se adapta de 320 px hacia arriba
y tiene tema claro y oscuro. Usa Pointer Events, así que el arrastre funciona igual con
dedo, mouse o lápiz.
