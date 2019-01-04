import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  text1:string="0";
  text2:string="0";
  result:string= "足し算しましょう";
  addAndShow() : void {
    this.result=this.text1;
    //this=>このクラスから生成されるオブジェクト（Angularではコンポーメント＝オブジェクト）
  }
  constructor() {
    //コンポーメントが作られるときに事項したいプログラムをかく
  }

  ngOnInit() {
    //コンポーメントが初期化されるときに実行したいプログラムをかく
  }

}
