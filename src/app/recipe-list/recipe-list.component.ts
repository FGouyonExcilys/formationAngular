import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private readonly recipeService: RecipeService) {}

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): void{
    this.recipeService.getRecipes().subscribe(
      (result: Recipe[]) => {
        this.recipes = result;
      },
      (error) => {
        console.log("C'est tout cassé !");
      }
    );
  }

  deleteRecipeById(id: number): void{
    this.recipeService.deleteRecipe(id).subscribe(
      () => this.getRecipes()
    );
  }
}
