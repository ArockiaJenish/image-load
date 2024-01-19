import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleImagesComponent } from './multiple-images.component';

describe('MultipleImagesComponent', () => {
  let component: MultipleImagesComponent;
  let fixture: ComponentFixture<MultipleImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
