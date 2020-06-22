import { Component } from '@angular/core';
import { Recipe } from './model/recipe.model';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formationAngular';

  recipes = [];

  constructor(private recipeService: RecipeService){}

  ngOnInit(){
    this.recipeService.getRecipes().subscribe(
      (result: Recipe[]) => {
          this.recipes = result;
      },
      (error) => {
          console.log("Ca marche pas");
      }
  );

  }
}
