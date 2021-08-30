import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoviewRoutingModule } from './repoview-routing.module';
import { RepoviewComponent } from './repoview.component';
import { RepolistComponent } from './repolist/repolist.component';
import { RepoItemComponent } from './repo-item/repo-item.component';


@NgModule({
  declarations: [
    RepoviewComponent,
    RepolistComponent,
    RepoItemComponent
  ],
  imports: [
    CommonModule,
    RepoviewRoutingModule
  ]
})
export class RepoviewModule { }
