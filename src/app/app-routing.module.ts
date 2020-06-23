import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeListComponent,
    pathMatch: 'full',
  },
  {
    path: 'recipe/:id',
    component: RecipeDetailComponent,
    pathMatch: 'full',
  },
  {
    path: 'addRecipe',
    component: RecipeAddComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'recipes',
    pathMatch: 'full',
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
