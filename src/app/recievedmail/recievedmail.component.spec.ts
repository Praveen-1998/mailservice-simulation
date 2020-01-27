import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedmailComponent } from './recievedmail.component';

describe('RecievedmailComponent', () => {
  let component: RecievedmailComponent;
  let fixture: ComponentFixture<RecievedmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievedmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievedmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
