import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output('closeEvent') closeEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    document.getElementById('modalOpenButton')?.click();
  }

  closeModalEvent(){
    this.closeEvent.emit();
  }
}
