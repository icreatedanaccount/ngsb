import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatCommonModule,
  MatIconModule,
  MatSidenavModule, MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, FormsModule, ReactiveFormsModule, MatCommonModule, MatButtonToggleModule, MatIconModule, MatSidenavModule, MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, FormsModule, ReactiveFormsModule, MatCommonModule, MatButtonToggleModule, MatIconModule, MatSidenavModule, MatToolbarModule],
})
export class MaterialModule {
}
