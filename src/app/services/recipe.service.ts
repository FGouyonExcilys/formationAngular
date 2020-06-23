import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Recipe } from '../model/recipe.model';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private readonly http : HttpClient) { }

  private recipeUrl = 'http://10.0.1.169:8080/api/v1/recipes';

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl);
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${ this.recipeUrl }/${ id }`);
  }

  postRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.recipeUrl, recipe);
  }

  deleteRecipe(id: number): Observable<Recipe> {
    return this.http.delete<Recipe>(`${ this.recipeUrl }/${ id }`);
  }

  // getRecipes(): Observable<Recipe[]> {
  //   return of(MOCK_RECIPES);
  // }
}

class MonComponent{
  constructor(private readonly recipeService : RecipeService){}
}
