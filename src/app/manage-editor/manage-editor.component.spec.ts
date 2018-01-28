import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEditorComponent } from './manage-editor.component';

describe('ManageEditorComponent', () => {
  let component: ManageEditorComponent;
  let fixture: ComponentFixture<ManageEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
