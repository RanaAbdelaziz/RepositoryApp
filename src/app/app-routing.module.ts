import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RepoComComponent } from './repocomponent/repo-com/repo-com.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./repoview/repoview.module').then( m => m.RepoviewModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
