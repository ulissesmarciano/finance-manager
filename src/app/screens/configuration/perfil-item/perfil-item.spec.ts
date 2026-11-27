import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilItem } from './perfil-item';

describe('PerfilItem', () => {
  let component: PerfilItem;
  let fixture: ComponentFixture<PerfilItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilItem],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
