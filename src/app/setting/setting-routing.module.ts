// src/app/module-b/module-b-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { UsermangementComponent } from './usermangement/usermangement.component';
import { DataTableComponent } from './data-table/data-table.component';

// Adjust the path as necessary

const routes: Routes = [
  { path: 'history', component: HistoryComponent } ,
  { path: 'user', component: UsermangementComponent } ,
  { path: 'table', component: DataTableComponent } ,
  
   // Default path for ModuleB
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleBRoutingModule { }
