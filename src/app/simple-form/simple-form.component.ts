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
    let forResult:string="正しい値を入力してください";
    //forResult=足し算の結果を文字列として表示するローカル変数
    //forResult変数の初期値＝＞正しい値を入力してください
    let int1:number;
    let int2:number;
    //let => 変数の宣言
    
    int1 = Number(this.text1);
    int2 = Number(this.text2);
    //text1・2に入力された値を数値に変換してint2という変数に格納する
    
    if (!Number.isNaN(int1) && !Number.isNaN(int2)){
      //int1,int2共に数値であるので、足し算の結果を計算する
        forResult = `${int1} + ${int2} = ${int1 + int2}`;
    }
    //NaN(Not a Number、数値にあらず)

    this.result=forResult;
    
    //this=>このクラスから生成されるオブジェクト（Angularではコンポーメント＝オブジェクト）
  }
  constructor() {
    //コンポーメントが作られるときに事項したいプログラムをかく
  }

  ngOnInit() {
    //コンポーメントが初期化されるときに実行したいプログラムをかく
  }

}
