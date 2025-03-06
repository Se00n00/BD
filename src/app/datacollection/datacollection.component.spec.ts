import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacollectionComponent } from './datacollection.component';

describe('DatacollectionComponent', () => {
  let component: DatacollectionComponent;
  let fixture: ComponentFixture<DatacollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatacollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatacollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
