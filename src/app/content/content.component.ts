import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    console.log("ASDASDASD")

  }

  increaseVakue(val: number, inc: number): number {
    return val + inc;
  }

  setSomething(val: number): string {
    let returnValue: string;
    if (val - this.getRandomValue() < 1) {
      returnValue = 'Success';
    } else {
      returnValue = 'Fail';
    }
    return returnValue;
  }

  getRandomValue(): number {
    const a = 10;
    const c = 20;
    return (a + c) * 2;
  }

  async isPublicRepoGreaterThan(val: number): Promise<boolean> {
    let returnValue: boolean = false;
    await this.contentService.getGithubUserDetail().then(
      result => {
        console.log("result" ,result)
        if (result.public_repos > val) {
          returnValue = true;
        } else {
          returnValue = false;
        }
      }
    );
    return returnValue;
  }
}
