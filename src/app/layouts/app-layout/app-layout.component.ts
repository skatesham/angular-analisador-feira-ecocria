import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { ThemeSwitcherComponent } from '../../shared/ui/theme-switcher/theme-switcher.component';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-app-layout',
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive, TranslateModule,
    ButtonModule, DrawerModule,
    ThemeSwitcherComponent
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLayoutComponent {
  private readonly auth = inject(AuthService);

  readonly user = this.auth.currentUser;
  readonly sidebarVisible = signal(false);

  toggleSidebar(): void {
    this.sidebarVisible.update((v) => !v);
  }

  logout(): void {
    this.auth.logout();
  }
}
