import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipesComponent} from './recipes.component';
import {RecipeHomeComponent} from './recipe-home/recipe-home.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {AuthGuardService} from '../auth/auth-guard.service';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';

const recipesRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeHomeComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]}
    ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
