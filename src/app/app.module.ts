import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import {RecipeService} from './recipes/recipe.service';
import {DataStorageService} from './shared/data-storage.service';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/auth-guard.service';
import {RecipesModule} from './recipes/recipes.module';
import {SharedModule} from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
