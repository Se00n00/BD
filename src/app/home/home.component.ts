import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import homedata from '../../../public/data/home.json';
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [RouterLink,TitleCasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public homedata = homedata;
}
