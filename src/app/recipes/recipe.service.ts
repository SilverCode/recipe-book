import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simply a test',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Food-Dishes-Eat-Gastronomy-Lunch-Recipe-2760200.jpg'),
    new Recipe(
      'A Test Recipe 2',
      'This is a simply another test',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Pumpkin-Seed-Bowl-Seeds-Recipe-Food-Strawberries-1715284.jpg')
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

}
