import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrellocardsComponent } from './trellocards.component';

describe('TrellocardsComponent', () => {
  let component: TrellocardsComponent;
  let fixture: ComponentFixture<TrellocardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrellocardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrellocardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
