import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {

  name: string;
  picture: string;
  description: string;

  submitted = false;

  recipeForm: FormGroup;

  constructor(private readonly recipeService: RecipeService,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.recipeForm = this.createFormGroupWithBuilder(formBuilder);

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    const recipe: Recipe = {name: this.name,picture:this.picture,description: this.description, ingredients: [], instructions: []};
    this.recipeService.postRecipe(recipe).subscribe();
    this.router.navigateByUrl("/recipes")
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      name: '',
      picture: '',
      description: '',
      ingredients: '',
      indications: '',
    });
  }

}
