import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { ComponentsModule } from '../components/components.module';
import { DocumentationModule } from '../documentation/documentation.module';

@NgModule({
  imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      RouterModule,
      ComponentsModule,
      DocumentationModule
  ],
  declarations: [HomeComponent],
  exports:[ HomeComponent ],
  providers: []
})
export class HomeModule { }
