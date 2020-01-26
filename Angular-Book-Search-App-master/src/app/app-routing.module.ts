import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompletoComponent } from './completo/completo.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/all', pathMatch: 'full' },
  { path: 'all',  component: CompletoComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
	
}