import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/internal/observable/of';
import { TreeviewService } from './treeview.service';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent implements OnInit {
  public categories: Observable<any[]>;
  constructor(private categoryService: TreeviewService) { }

  public ngOnInit(): void {
    this.categories = this.categoryService.fetchCategories();
  }

  public hasChildren = (item: any) => 'CategoryName' in item;

  public fetchChildren = (item: any) => this.categoryService.fetchProducts(item.CategoryID);

}
