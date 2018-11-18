import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePackageComponent } from './create-package/create-package.component';

const routes: Routes = [
  { path: 'create-package', component: CreatePackageComponent, data: { text: 'CreatePackage' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
