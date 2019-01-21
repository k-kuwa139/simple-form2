import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-better-form',
  templateUrl: './better-form.component.html',
  styleUrls: ['./better-form.component.css']
})
export class BetterFormComponent implements OnInit {
  calcForm: FormGroup;
  result: string = "足し算しましょう";
  constructor() { }

  ngOnInit() {
    this.calcForm = new FormGroup({
      "fieldOne" : new FormControl("0"),
      "fieldtwo" : new FormControl("0")
    });
  }

  get fieldOne(){return this.calcForm.get("fieldOne");}
  get fieldTwo(){return this.calcForm.get("fieldTwo");}
  // それぞれのformControlに格納された文字列を取得する
  addAnyway() {
    let text1:string = this.fieldOne.value;
    let text2:string = this.fieldTwo.value;
    let resultStr: string = "";

  // 文字列を結合（どちらも数字であるときは足し算する、そうでない時は連結する）
    if (Number.isNaN(Number(text1)) || Number.isNaN
    (Number(text2))) {
      resultStr = text1 + text2;
    } else {
      resultStr = `${text1}+${text2} = ${Number(text1) +
    Number(text2)}`;
    }
    this.result = resultStr;
  }

}
