import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delconfirm',
  templateUrl: './delconfirm.component.html',
  styleUrls: ['./delconfirm.component.css']
})
export class DelconfirmComponent implements OnInit {
  @Input() item:string |undefined
  @Output() onCancel = new EventEmitter()
  @Output() onDelete = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this.onCancel.emit()

  }
  delete(){
    this.onDelete.emit(this.item)
  }

}
