import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonselectComponent } from './pokemonselect.component';

describe('PokemonselectComponent', () => {
  let component: PokemonselectComponent;
  let fixture: ComponentFixture<PokemonselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
