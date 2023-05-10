import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = false;
  hideMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleMenu() {
    this.showMenu = !this.showMenu;
    console.log(this.showMenu);
  }

  sethideMenu() {
    console.log('hello');
    this.showMenu = false;
  }
}
