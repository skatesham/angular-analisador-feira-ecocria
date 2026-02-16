import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-feira',
  imports: [ButtonModule, CardModule, AnimateOnScrollModule, RouterLink, TranslateModule],
  templateUrl: './landing-feira.component.html',
  styleUrl: './landing-feira.component.css'
})
export class LandingFeiraComponent {
  constructor(private router: Router) {}

  irParaAnalisador(): void {
    this.router.navigate(['/analisar']);
  }
}
