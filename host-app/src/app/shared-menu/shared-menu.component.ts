import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/MenuService';
//import {MenuItem} from '../services/MenuService'

@Component({
  selector: 'app-shared-menu',
  templateUrl: './shared-menu.component.html',
  styleUrls: ['./shared-menu.component.css']
})
export class SharedMenuComponent implements OnInit{
  //menuOptions: MenuItem[] = [];

  constructor(){ }
  
  ngOnInit(): void {
    //this.menuOptions = this.menuService.getMenuOptions();
  }
}

