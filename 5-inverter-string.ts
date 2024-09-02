function inverterString(str: string): string {
    let stringInvertida = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
    }
  
    return stringInvertida;
  }
  
  const stringOriginal = "Distribuidora";
  console.log(`String original: ${stringOriginal}`);
  console.log(`String invertida: ${inverterString(stringOriginal)}`);
  