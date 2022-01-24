import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [UserHomeComponent],
  imports: [
    CommonModule,
    HttpClientModule

  ],
  exports:[UserHomeComponent]
})
export class DashboardModule { }
