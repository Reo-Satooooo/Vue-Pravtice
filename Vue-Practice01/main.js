// Vue本体で利用するデータの定義
const myData = {
  appName: "BMI Calcurator",
  message: "身長と体重を入力してください",
  cm: 160,
  kg: 60,
  bmi: 0
}

// Vueを実行するための準備
const app = Vue.createApp({
  data(){
    return myData; // Vue.jsで扱うデータを指定する
  },
  created(){// 初期化時の処理を記述する
    console.log("created!!");// Vue.jsの初期化
    this.calc();// 関数を実行する
  },
  methods:{// 実行関数を記述する
    calc(){
      console.log("calc!!");
      this.bmi = this.kg/((this.cm*0.01)**2);// BMI値の計算
    }
  }
});
app.mount("#app");// Vue.jsを起動する