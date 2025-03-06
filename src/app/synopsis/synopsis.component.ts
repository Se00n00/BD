import { Component } from '@angular/core';
import synoposisData from '../../../public/data/synopsis.json';
import { CommonModule } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { ParagraphPipe } from '../paragraph.pipe';

@Component({
  selector: 'app-synopsis',
  imports: [CommonModule,TitleCasePipe,ParagraphPipe],
  templateUrl: './synopsis.component.html',
  styleUrl: './synopsis.component.css'
})
export class SynopsisComponent {
  public synopsisData = synoposisData;
}
