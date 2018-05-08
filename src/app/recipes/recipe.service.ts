import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simply a test',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Food-Dishes-Eat-Gastronomy-Lunch-Recipe-2760200.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
      ),
    new Recipe(
      'A Test Recipe 2',
      'This is a simply another test',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Pumpkin-Seed-Bowl-Seeds-Recipe-Food-Strawberries-1715284.jpg',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  constructor(
    private shoppingListService: ShoppingListService
  ) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
