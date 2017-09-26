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
import { ButtonsComponent } from './buttons/buttons.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputsComponent } from './inputs/inputs.component';
import { TextareaComponent } from './textarea/textarea.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { SlidersComponent } from './sliders/sliders.component';
import { LabelsComponent } from './labels/labels.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DocumentationRoutes)
    ],
    declarations: [
        DocumentationComponent,
        TutorialComponent,
        ModalComponent,
        NavigationComponent,
        NotificationComponent,
        ButtonsComponent,
        CheckboxComponent,
        RadioComponent,
        DropdownComponent,
        InputsComponent,
        TextareaComponent,
        PaginationComponent,
        ProgressbarComponent,
        SlidersComponent,
        LabelsComponent,
        DatepickerComponent,
        TooltipsComponent,
        PopoverComponent
    ],
    exports: [ DocumentationComponent ]
})
export class DocumentationModule { }
