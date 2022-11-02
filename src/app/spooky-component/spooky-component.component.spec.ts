import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpookyComponentComponent } from './spooky-component.component';

describe('SpookyComponentComponent', () => {
  let component: SpookyComponentComponent;
  let fixture: ComponentFixture<SpookyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpookyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpookyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
