import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected =new EventEmitter<Recipe>(); //listen from outside

  recipes: Recipe[]= [
    new Recipe('A Test Recipe', 'This is a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Another Test Recipe', 'This is another test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
  constructor() { }

  ngOnInit() {
  }

}
