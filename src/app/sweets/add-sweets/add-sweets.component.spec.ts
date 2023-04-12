import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSweetsComponent } from './add-sweets.component';

describe('AddSweetsComponent', () => {
  let component: AddSweetsComponent;
  let fixture: ComponentFixture<AddSweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
