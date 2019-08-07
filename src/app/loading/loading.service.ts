
import { Injectable, ComponentRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoadingComponent } from './loading.component';
import { MatSnackBar } from '@angular/material';

@Injectable({providedIn: 'root'})
export class LoadingService {

  overlayRef: OverlayRef;
  constructor(private overlay: Overlay, private notify: MatSnackBar) {}

  show() {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true
    });
    this.overlayRef.attach(new ComponentPortal(LoadingComponent));
  }
  hide(message: string, error?: boolean) {
    this.overlayRef.dispose();
    this.notify.open((error ? '\u2716 ' : '\u2714 ') + message, null, {
      duration: 4000,
      horizontalPosition: 'center'
    });
  }
}
