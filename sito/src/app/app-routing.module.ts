import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { GenericComponent } from './generic/generic.component';

const routes: Routes = [
  {path: "/search", component: SearchComponent },
  {path: "/food", component: GenericComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
