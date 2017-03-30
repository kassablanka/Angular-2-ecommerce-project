import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent} from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [];
@Output() recipeSelected = new EventEmitter<Recipe>();
recipe = new Recipe('Dummy', 'Dummy', 'http://ep.yimg.com/ay/trendtimes/pink-lamborghini-remote-control-car-rc-toy-28.gif');
  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}