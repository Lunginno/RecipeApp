import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent {
  @Input() error: any;
  @Input() success: any; // Input property for success message
  @Output() close = new EventEmitter<void>();

  onCloseClick() {
    this.close.emit();
  }
}