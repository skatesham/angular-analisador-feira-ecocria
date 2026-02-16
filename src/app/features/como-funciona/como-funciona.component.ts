import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { TabsModule } from 'primeng/tabs';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { PRODUCT_TYPES, PRODUCT_CATEGORIES } from '../../core/models/categorization.model';

@Component({
  selector: 'app-como-funciona',
  imports: [CardModule, ButtonModule, AnimateOnScrollModule, TabsModule, TableModule, DialogModule, TranslateModule],
  templateUrl: './como-funciona.component.html',
  styleUrl: './como-funciona.component.css'
})
export class ComoFuncionaComponent {
  constructor(private router: Router) {}

  dialogVisible = false;

  // Dados reais do modelo de categorização
  abreviaturas = Object.entries(PRODUCT_TYPES).map(([key, value]) => ({
    abrev: key,
    tipo: value
  }));

  categorias = (() => {
    const tiposUnicos = new Map<string, Set<string>>();
    
    // Agrupar categorias por tipo
    Object.entries(PRODUCT_CATEGORIES).forEach(([key, categoria]) => {
      const tipo = PRODUCT_TYPES[key];
      if (tipo) {
        if (!tiposUnicos.has(tipo)) {
          tiposUnicos.set(tipo, new Set());
        }
        tiposUnicos.get(tipo)!.add(categoria);
      }
    });

    // Converter para array
    return Array.from(tiposUnicos.entries()).map(([tipo, categorias]) => ({
      tipo,
      categorias: Array.from(categorias).join(', ')
    }));
  })();

  mostrarDialog(): void {
    this.dialogVisible = true;
  }

  irParaAnalisador(): void {
    this.router.navigate(['/analisar']);
  }

  exemploTxt = `Feira 30.08.25

200 caixa ret jag resina
80 brinco folha
90 porta chaves baleia

Feira 23/08/25

90 porta chaves baleia
90 escult gato md
40 palito cabelo`;

  exemploCsv = `Data	Dia	Local	Produto	Qnt	Valor Uni.	Total	Tipo	Categoria
30/08/2025	sábado	FEIRA	caixa ret jag resina	1	200.0	200.0	Caixa	
30/08/2025	sábado	FEIRA	brinco folha	1	80.0	80.0	Acessório	Brinco
23/08/2025	sábado	FEIRA	porta chaves baleia	1	90.0	90.0	Acessório	Porta Toalha
23/08/2025	sábado	FEIRA	escult gato md	1	90.0	90.0	Escultura	
23/08/2025	sábado	FEIRA	palito cabelo	1	40.0	40.0	Palito Cabelo	`;
}
