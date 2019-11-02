import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { isUndefined } from 'util';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {

  public recipes: Recipe[] | undefined;

  constructor() { }

  ngOnInit() {
  }

  public fetchAndAssignRecipes(): void {
       if (isUndefined(this.recipes)) {
          this.recipes = [
            {
              id: 1,
              title: 'Rice and Soy Sauce',
              description: 'just do it'
            },
            {
              id: 2,
              title: 'Popcorn',
              description: 'Corn but popped style'
            }
          ];
       }
  }
}
