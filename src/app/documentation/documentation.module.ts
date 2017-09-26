import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { DocumentationComponent } from './documentation.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DocumentationRoutes } from './documentation.routing';
import { ModalComponent } from './modal/modal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(DocumentationRoutes)
  ],
  declarations: [DocumentationComponent, TutorialComponent, ModalComponent, NavigationComponent, NotificationComponent],
  exports: [ DocumentationComponent ]
})
export class DocumentationModule { }
