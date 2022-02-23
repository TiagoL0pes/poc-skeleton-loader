import { Component, OnInit } from '@angular/core';
import { styles_lg, styles_sm } from './shared/styles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public styles: any;
  public isLoading: any;

  constructor() {
    this.isLoading = true;
    this.styles = window.innerWidth <= 600 ? styles_sm : styles_lg;
    setInterval(() => (this.isLoading = false), 4000);
  }

  public onResize(event?: any): void {
    this.styles =
      event?.currentTarget?.innerWidth <= 600 ? styles_sm : styles_lg;
  }
}
