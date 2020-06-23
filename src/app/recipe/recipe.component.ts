import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input() recipe: Recipe;

  @Output() delete = new EventEmitter<Number>();

  displayIngredients: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleExpand():void {
    this.displayIngredients = !this.displayIngredients;
  }
  onDeleteClick(id: number):void{
    this.delete.emit(id);
  }

}
