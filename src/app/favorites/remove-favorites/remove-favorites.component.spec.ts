import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFavoritesComponent } from './remove-favorites.component';

describe('RemoveFavoritesComponent', () => {
  let component: RemoveFavoritesComponent;
  let fixture: ComponentFixture<RemoveFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
