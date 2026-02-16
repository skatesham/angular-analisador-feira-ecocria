import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { TabsModule } from 'primeng/tabs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-como-funciona',
  imports: [CardModule, ButtonModule, AnimateOnScrollModule, TabsModule, TranslateModule],
  templateUrl: './como-funciona.component.html',
  styleUrl: './como-funciona.component.css'
})
export class ComoFuncionaComponent {
  constructor(private router: Router) {}

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
