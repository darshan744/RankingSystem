import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatListItem, MatNavList } from '@angular/material/list';
import{MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,}from '@angular/material/sidenav'
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [ MatSidenav,MatSidenavContainer,MatSidenavContent,
    RouterLink,RouterOutlet,NgFor,MatNavList,MatListItem
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  list = [
    {
      name:'Home',path:'dashboard'
    },
    {name:'pslevel',path:'pslevel'},
    {name:'Placement',path:'placement'}
  ]
}
