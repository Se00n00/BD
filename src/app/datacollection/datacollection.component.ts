import { Component } from '@angular/core';
import rishabhdata from '../../../public/data/rishabh.json';

@Component({
  selector: 'app-datacollection',
  imports: [],
  templateUrl: './datacollection.component.html',
  styleUrl: './datacollection.component.css'
})
export class DatacollectionComponent {
  public rishabhdata = rishabhdata.methylationPreprocessingData;
}
