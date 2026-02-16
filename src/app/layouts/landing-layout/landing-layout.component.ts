import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, signal } from '@angular/core';
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
export class LandingLayoutComponent implements OnInit, OnDestroy {
  readonly currentYear = new Date().getFullYear();
  readonly navbarVisible = signal(true);
  
  private lastScrollY = 0;
  private scrollThreshold = 10;
  
  ngOnInit(): void {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  private handleScroll = (): void => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY < this.scrollThreshold) {
      this.navbarVisible.set(true);
    } else if (currentScrollY > this.lastScrollY) {
      // Scrolling down
      this.navbarVisible.set(false);
    } else {
      // Scrolling up
      this.navbarVisible.set(true);
    }
    
    this.lastScrollY = currentScrollY;
  };
}
