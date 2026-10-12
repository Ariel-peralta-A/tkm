const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Configurar tamaño del canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const text = "TE AMO";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / (fontSize * 4)); // Menos columnas porque "TE AMO" es más ancho
    const drops = new Array(columns).fill(1);

    ctx.font = fontSize + "px monospace";

    function draw() {
      // Fondo translúcido para efecto de desvanecimiento
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#ff69b4"; // Rosado amoroso
      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize * 4;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    setInterval(draw, 100);

    // Redimensionar canvas si cambia el tamaño
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  