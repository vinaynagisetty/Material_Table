import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproviderComponent } from './addprovider/addprovider.component';
import { DeleteproviderComponent } from './deleteprovider/deleteprovider.component';
import { ModuleARoutingModule } from './provider-routing.module';

import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    imports: [
        CommonModule,
        ModuleARoutingModule,
        NgSelectModule,
        AddproviderComponent,
        DeleteproviderComponent
    ]
})
export class ProviderModule { }
