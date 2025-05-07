import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloNosotrosComponent } from './titulo-nosotros.component';

describe('TituloNosotrosComponent', () => {
  let component: TituloNosotrosComponent;
  let fixture: ComponentFixture<TituloNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloNosotrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
