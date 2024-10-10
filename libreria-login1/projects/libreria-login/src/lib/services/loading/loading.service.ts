import {Injectable} from '@angular/core';
import {AlertasService} from '../alertas/alertas.service';
import {MatDialogRef} from "@angular/material/dialog";
import {LoadingComponent} from "../../pages/shared/loading/loading.component";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private alertService: AlertasService) {
  }

  private loading = false;
  loadingComponent: MatDialogRef<LoadingComponent> | null = null;

  showLoadingSpinner() {
    this.loading = true;
    this.loadingComponent = this.alertService.crearLoading('Aguarde un momento por favor...');
  }

  hideLoadingSpinner() {
    this.loading = false;
    if (this.loadingComponent != null) {
      this.loadingComponent?.close();
    }
  }

  isLoading(): boolean {
    return this.loading;
  }
}
