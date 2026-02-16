import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { ThemeSwitcherComponent } from '../../shared/ui/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-landing-layout',
  imports: [RouterOutlet, RouterLink, TranslateModule, ButtonModule, ThemeSwitcherComponent],
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingLayoutComponent {
  readonly currentYear = new Date().getFullYear();
}
