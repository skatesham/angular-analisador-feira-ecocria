import { CanDeactivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Promise<boolean>;
}

export const unsavedChangesGuard: CanDeactivateFn<ComponentCanDeactivate> = (component) => {
  if (!component.canDeactivate || component.canDeactivate()) {
    return true;
  }

  const confirmationService = inject(ConfirmationService);

  return new Promise<boolean>((resolve) => {
    confirmationService.confirm({
      message: 'Você tem alterações não salvas. Deseja sair sem salvar?',
      header: 'Alterações Não Salvas',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sair sem salvar',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => resolve(true),
      reject: () => resolve(false)
    });
  });
};
