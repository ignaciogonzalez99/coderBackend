const mostrarLetras = (str) => {
    let count = 0;
    const interval = setInterval(() => {
      console.log(str.charAt(count));
      if (count === str.length) {
        clearInterval(interval);
        fin();
      }
      count++;
    }, 1000);
  };
  
  const fin = () => console.log("terminé");
  
  setTimeout(mostrarLetras, 1, "hola");

  