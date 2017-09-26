import { Routes } from '@angular/router';

import { TutorialComponent } from './tutorial/tutorial.component';
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

export const DocumentationRoutes: Routes = [{
    path: '',
    children: [ {
        path: 'tutorial',
        component: TutorialComponent
    },{
        path: 'modal',
        component: ModalComponent
    },{
        path: 'navigation',
        component: NavigationComponent
    },{
        path: 'notification',
        component: NotificationComponent
    },{
        path: 'buttons',
        component: ButtonsComponent
    },{
        path: 'checkbox',
        component: CheckboxComponent
    },{
        path: 'radio',
        component: RadioComponent
    },{
        path: 'dropdown',
        component: DropdownComponent
    },{
        path: 'inputs',
        component: InputsComponent
    },{
        path: 'textarea',
        component: TextareaComponent
    },{
        path: 'pagination',
        component: PaginationComponent
    },{
        path: 'progressbar',
        component: ProgressbarComponent
    },{
        path: 'sliders',
        component: SlidersComponent
    },{
        path: 'datepicker',
        component: DatepickerComponent
    },{
        path: 'labels',
        component: LabelsComponent
    },{
        path: 'tooltips',
        component: TooltipsComponent
    },{
        path: 'popover',
        component: PopoverComponent
    }]
}];
