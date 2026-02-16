import { Injectable } from '@angular/core';
import { Venda, Item } from '../models/venda.model';
import { categorizeProduct } from '../models/categorization.model';
import { v4 as uuidv4 } from 'uuid';

interface ParsedLine {
  total: number;
  qnt: number;
  unitValue: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeiraParserService {
  private readonly WEEKDAYS_PT: Record<number, string> = {
    0: 'segunda',
    1: 'terça',
    2: 'quarta',
    3: 'quinta',
    4: 'sexta',
    5: 'sábado',
    6: 'domingo'
  };

  parseFeiraFile(content: string, fileName: string): Venda[] {
    const lines = content.split(/\r?\n/).map(l => l.trim());
    const vendas: Venda[] = [];
    let currentDate: Date | null = null;

    for (const line of lines) {
      if (!line) continue;

      const dateMatch = this.extractDate(line);
      if (dateMatch) {
        currentDate = dateMatch;
        continue;
      }

      if (this.isTotalLine(line) || this.isNonProductLine(line)) {
        continue;
      }

      const parsedLine = this.parseFeiraLine(line);
      if (parsedLine.total > 0 && parsedLine.description) {
        if (!currentDate) {
          currentDate = new Date();
        }

        const categorization = categorizeProduct(parsedLine.description);
        
        const item: Item = {
          id: uuidv4(),
          nome: parsedLine.description,
          tipo: categorization.tipo,
          categoria: categorization.categoria,
          quantidade: parsedLine.qnt,
          precoUnitario: parsedLine.unitValue,
          valorTotal: parsedLine.total
        };

        const existingVenda = vendas.find(v => 
          v.data.getTime() === currentDate!.getTime()
        );

        if (existingVenda) {
          existingVenda.itens.push(item);
          existingVenda.valorTotal += item.valorTotal;
        } else {
          const venda: Venda = {
            id: uuidv4(),
            data: currentDate,
            dia: this.getWeekdayPt(currentDate),
            local: 'FEIRA',
            semana: this.getWeekNumber(currentDate),
            ano: currentDate.getFullYear(),
            itens: [item],
            valorTotal: item.valorTotal,
            incompleto: !categorization.encontrado,
            origem: 'txt',
            arquivoOrigem: fileName
          };
          vendas.push(venda);
        }
      }
    }

    return vendas;
  }

  private extractDate(line: string): Date | null {
    const patterns = [
      /Feira\s+(\d{1,2})[./](\d{1,2})[./](\d{2,4})/i,
      /feira\s+(\d{1,2})[./](\d{1,2})[./](\d{2,4})/i
    ];

    for (const pattern of patterns) {
      const match = line.match(pattern);
      if (match) {
        const day = parseInt(match[1], 10);
        const month = parseInt(match[2], 10);
        let year = parseInt(match[3], 10);

        if (year < 100) {
          year = 2000 + year;
        }

        try {
          return new Date(year, month - 1, day);
        } catch {
          continue;
        }
      }
    }

    return null;
  }

  private isTotalLine(line: string): boolean {
    return /^\d+$/.test(line.trim());
  }

  private isNonProductLine(line: string): boolean {
    const skipPatterns = [
      /^Alianças/i,
      /^Pedaço/i,
      /^Chav pet/i,
      /^\d+\s+chav\s*(et)?\s*$/i,
      /^Encomend/i,
      /^-\s*\d+/,
      /^Total/i,
      /^N\d+/i,
      /^\d+\s+(rodr|heloisio|riba|javier|nico)/i
    ];

    return skipPatterns.some(pattern => pattern.test(line));
  }

  private parseFeiraLine(line: string): ParsedLine {
    const parts = line.split(/\s+/);

    try {
      const total = parseFloat(parts[0]);
      
      if (isNaN(total)) {
        return {
          total: 0,
          qnt: 0,
          unitValue: 0,
          description: line
        };
      }

      if (parts.length > 1 && /^\d+$/.test(parts[1])) {
        const qnt = parseInt(parts[1], 10);
        const description = parts.slice(2).join(' ');
        const unitValue = total / qnt;

        return {
          total,
          qnt,
          unitValue,
          description
        };
      } else {
        const qnt = 1;
        const description = parts.slice(1).join(' ');
        const unitValue = total;

        return {
          total,
          qnt,
          unitValue,
          description
        };
      }
    } catch {
      return {
        total: 0,
        qnt: 0,
        unitValue: 0,
        description: line
      };
    }
  }

  private getWeekdayPt(date: Date): string {
    return this.WEEKDAYS_PT[date.getDay()] || '';
  }

  private getWeekNumber(date: Date): number {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  }
}
