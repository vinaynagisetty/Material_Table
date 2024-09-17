import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { UsermangementComponent } from './usermangement/usermangement.component';
import { ModuleBRoutingModule } from './setting-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTableComponent } from './data-table/data-table.component';



@NgModule({
    imports: [
        CommonModule,
        ModuleBRoutingModule,
        ReactiveFormsModule,
        HistoryComponent,
        UsermangementComponent,
        DataTableComponent
    ]
})
export class SettingModule { }
