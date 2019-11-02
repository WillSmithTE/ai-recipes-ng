import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from './recipe.model';
import { addError } from '../../util/Error';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less']
})
export class RecipeComponent implements OnInit {

  private recipe: Recipe;

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const maybeRecipeId: string = params.get('recipeId');
      if (maybeRecipeId !== null) {
        const maybeNumber = Number(maybeRecipeId);
        if (isNaN(maybeNumber)) {
          addError(`Failed to get recipe, invalid recipeId`);
        } else {
          this.recipe = {
            id: maybeNumber,
            title: 'derp',
            description: 'this the stuff'
          };
        }
      } else {
        addError('Failed to get recipe, null recipeId');
      }
    })
  }

}
