import fs from 'fs';

interface DiaFaturamento {
  dia: number;
  valor: number;
}

function carregarFaturamento(caminhoArquivo: string): DiaFaturamento[] {
  const data = fs.readFileSync(caminhoArquivo, 'utf-8');
  return JSON.parse(data);
}

function analisarFaturamento(faturamentoMensal: DiaFaturamento[]): void {
  let menorFaturamento = Number.MAX_VALUE;
  let maiorFaturamento = Number.MIN_VALUE;
  let somaFaturamento = 0;
  let diasComFaturamento = 0;

  for (const dia of faturamentoMensal) {
    if (dia.valor > 0) {
      if (dia.valor < menorFaturamento) menorFaturamento = dia.valor;
      if (dia.valor > maiorFaturamento) maiorFaturamento = dia.valor;
      somaFaturamento += dia.valor;
      diasComFaturamento++;
    }
  }

  const mediaMensal = somaFaturamento / diasComFaturamento;

  const diasAcimaDaMedia = faturamentoMensal.filter(dia => dia.valor > mediaMensal).length;

  console.log(`Menor faturamento: ${menorFaturamento.toFixed(2)}`);
  console.log(`Maior faturamento: ${maiorFaturamento.toFixed(2)}`);
  console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

const faturamentoMensal = carregarFaturamento('faturamento.json');
analisarFaturamento(faturamentoMensal);
