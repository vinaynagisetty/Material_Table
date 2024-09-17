import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'provider', loadChildren: () => import('./provider/provider.module').then(m => m.ProviderModule) },
  { path: 'settings', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule) },
  // { path: 'settings', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule) },
  { path: '', component: MainComponent },
  { path: '**', redirectTo: '' }  // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
