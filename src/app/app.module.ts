import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YesNoButtonGroupModule } from './shared/components/yes-no-button-group/yes-no-button-group.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisabledControlModule } from './shared/directives/disable-control/disabled-control.module';
import { ModalModule } from './shared/components/modal/modal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    DisabledControlModule,
    YesNoButtonGroupModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
