import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from './shared/components/modal/services/modal.service';
import { ModalRef } from './shared/components/modal/models/modal-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  public title = 'a11y-p1';
  public firstName = 'André';
  public modalRef: ModalRef;
  public info = false;
  public form: FormGroup = null;
  public formModal: FormGroup = null;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      yesNoAnswer: [null]
    });
    this.formModal = this.formBuilder.group({
      firstName: ['André', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      info: [false],
    });
  }

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }

  public submitModal(): void {
    if (this.formModal.valid) {
      this.modalRef.close();
    }
  }
}
