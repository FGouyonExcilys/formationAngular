import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../model/recipe.model'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  displayIngredients: boolean = false;

  constructor(
    private readonly recipeService: RecipeService,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.recipeService.getRecipe(+this.route.snapshot.paramMap.get('id'))
                      .subscribe(recipe => {this.recipe = recipe;});

  }

  toggleExpand():void {
    this.displayIngredients = !this.displayIngredients;
  }

}
