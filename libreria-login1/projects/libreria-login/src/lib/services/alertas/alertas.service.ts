import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import {LoadingComponent} from '../../pages/shared/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  dialogRef;

  constructor(private dialog: MatDialog) {
    this.dialogRef = Swal.mixin({
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-secondary mr-1",
        cancelButton: "btn btn-grey ml-1",
      },
    });
  }

  crearLoading(mensaje: string) {
    return this.dialog.open(LoadingComponent, {
      disableClose: true,
      data: {
        message: mensaje,
      },
    });
  }

  generarAlert(mensaje: string, tipo: string) {
    switch (tipo) {
      case "success":
        this.dialogRef.fire({
          icon: "success",
          text: mensaje,
          showConfirmButton: true,
        });
        break;
      case "error":
        this.dialogRef.fire({
          icon: "error",
          text: mensaje,
          showConfirmButton: true,
        });
        break;
      case "warning":
        this.dialogRef.fire({
          icon: "warning",
          text: mensaje,
          showConfirmButton: true,
        });
        break;
      case "info":
        this.dialogRef.fire({
          icon: "info",
          text: mensaje,
          showConfirmButton: true,
        });
        break;
    }
  }

  generarConfirmAlertSimple(titulo: string, texto:string) {
    return this.dialogRef.fire({
      title: titulo,
      text: texto,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: '<i class="fas fa-check mr-1"></i>Aceptar',
      cancelButtonText: '<i class="fas fa-times mr-1"></i>Cancelar',
    });
  }

  generarConfirmAlertHTML(titulo: string, texto:string) {
    return this.dialogRef.fire({
      title: titulo,
      html: texto,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: '<i class="fas fa-check mr-1"></i>Aceptar',
      cancelButtonText: '<i class="fas fa-times mr-1"></i>Cancelar',
    });
  }

  generarAlertSinCancelar(titulo: string) {
    return this.dialogRef.fire({
      text: titulo,
      icon: "error",
      showCancelButton: false,
      confirmButtonText: '<i class="fas fa-check mr-1"></i>Aceptar',
    });
  }
}
