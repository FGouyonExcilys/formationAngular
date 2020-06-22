import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { MOCK_RECIPES } from '../mock/recipes.mock';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Input() recipes: Recipe[] = MOCK_RECIPES;

  constructor() { }

  ngOnInit(): void {
  }


}
