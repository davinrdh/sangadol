import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SosmedPageComponent } from './sosmed-page.component';

describe('SosmedPageComponent', () => {
  let component: SosmedPageComponent;
  let fixture: ComponentFixture<SosmedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SosmedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SosmedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
