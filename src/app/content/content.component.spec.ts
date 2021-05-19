import { ComponentFixture, TestBed } from '@angular/core/testing';
import { from } from 'rxjs';

import { ContentComponent } from './content.component';
import { ContentService } from '../services/content.service';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  const mockContentService = jasmine.createSpyObj('ContentService', ['getGithubUserDetail'])

  const mockObject = {
    'public_repos': 7,
    'public_gists': 0
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentComponent],
      providers: [
        { provide: ContentService, useValue: mockContentService }
      ]
    })
      .compileComponents();


    const ContentServiceObject = TestBed.get(ContentService);
    const mockPromise = new Promise((resolve, reject) => { resolve(mockObject); });
    ContentServiceObject.getGithubUserDetail.and.returnValue(mockPromise);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should increaseValue ', () => {
    expect(component.increaseVakue(10, 10)).toBeTruthy(20);
  });

  it('should return Success from setSomething function', () => {
    spyOn(component, 'getRandomValue').and.returnValue(10)
    expect(component.setSomething(10)).toBe('Success');
  });


  it('should return Fail from setSomething function', () => {
    spyOn(component, 'getRandomValue').and.returnValue(10)
    expect(component.setSomething(20)).toBe('Fail');
  });


  it('should return True from isPublicRepoGreaterThan function', (async () => {
    await component.isPublicRepoGreaterThan(1).then(
      (result) => {
        expect(result).toBe(true);
      }
    );
  }));

  it('should return False from isPublicRepoGreaterThan function', (done) => {
    component.isPublicRepoGreaterThan(17).then(
      (result) => {
        expect(result).toBe(false);
        done();
      }
    );
  });

});
