import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav'
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  userdetails:any;
  ngOnInit(): void {
    this.userdetails = sessionStorage.getItem('User');
    this.userdetails = JSON.parse(this.userdetails);
  }
}
