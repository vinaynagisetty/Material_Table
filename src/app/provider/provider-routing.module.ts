// src/app/module-a/module-a-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproviderComponent } from './addprovider/addprovider.component';
import { DeleteproviderComponent } from './deleteprovider/deleteprovider.component';

// Adjust the path as necessary

const routes: Routes = [
  { path: 'add', component: AddproviderComponent } ,
  { path: 'delete', component: DeleteproviderComponent } ,
   // Default path for ModuleA
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleARoutingModule { }
