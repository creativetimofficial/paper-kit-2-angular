import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { PartsComponent } from './parts/parts.component';
// import { InpartsComponent } from './parts/inparts/inparts.component';
import { CheckoutComponent } from './parts/checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
// import { CheckoutComponent } from './checkout/checkout.component';
// import { CheckoutComponent } from './parts/checkout/checkout.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        HttpClientModule,

        ReactiveFormsModule,
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent,
        PartsComponent,
        // InpartsComponent,
        CheckoutComponent,
        // CheckoutComponent,
        // CheckoutComponent
    ],
    entryComponents: [NgbdModalContent],
    exports: [ComponentsComponent, CheckoutComponent]
})
export class ComponentsModule { }
