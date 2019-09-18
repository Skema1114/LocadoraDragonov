import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarFilmesPage } from './cadastrar-filmes.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarFilmesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarFilmesPage]
})
export class CadastrarFilmesPageModule {}
