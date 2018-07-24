//(function() {
//連想配列の書き方忘れてるわ〜。
	  var question = document.getElementById('question');
	  var btn = document.getElementById('btn');
	  var answers = document.querySelectorAll('#answers > li');
	  var shuffledAnswers;
	  
var quizset = [
	{q:'最近買ったのは?',a : ['GeogleHome','AmazonEcho','LineSpeaker']},
	{q:'何部だった?',a : ['アメフト','相撲','ラグビー']},
	{q:'好きなデザートは?',a : ['ミルクプリン','ショートケーキ','ゼリー']},
	{q:'働いていたのは?',a : ['喫茶比呂乃','鰻比呂乃','とんかつ比呂乃']}
];
var currentNum = 0;
var shuffledAnswers = 0;
//ボタンを１度しか推せなくする。これ便利。
var isAnswerd ;
var score =0;

//フィッシャーいえーずのシャッフル。
function shuffle(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      //ここよくわからんのやけどね。
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

//連想配列の表示の仕方も忘れてる。
//$('#question').text(quizset[currentNum].q);
////シャッフルしない
////$('#answers>li').eq(0).text(quizset[currentNum].a[0]);
////$('#answers>li').eq(1).text(quizset[currentNum].a[1]);
////$('#answers>li').eq(2).text(quizset[currentNum].a[2]);
//
////シャッフルする
////正解はa0、それをシャッフルして表示する。
//shuffledAnswers = shuffle(quizset[currentNum].a.slice());
////.sliceで、配列をきりぬく
//$('#answers>li').eq(0).text(shuffledAnswers[0]);
//$('#answers>li').eq(1).text(shuffledAnswers[1])
//$('#answers>li').eq(2).text(shuffledAnswers[2]);


function setquiz(){
	$('#question').text(quizset[currentNum].q);
	shuffledAnswers = shuffle(quizset[currentNum].a.slice());
	$('#answers>li').eq(0).text(shuffledAnswers[0]);
	$('#answers>li').eq(1).text(shuffledAnswers[1])
	$('#answers>li').eq(2).text(shuffledAnswers[2]);
	isAnswerd = false;
	for(var i =0;i<answers.length;i++){
		$('#answers>li').eq(i).removeClass('correct');
		$('#answers>li').eq(i).removeClass('wrong');
	}
	$('#btn').addClass('disabled');
	if(currentNum===quizset.length-1){
		$('#btn').text("Show Score");
	}
}

function setEvents() {
    for (var i = 0; i < answers.length; i++) {
    	$('#answers>li').eq(i).click(function(){
            checkAnswer(this);
    	});
    }
    $('#btn').click(function(){
    	if($(this).hasClass('disabled')){
    		return;
    	}
    	if(currentNum===quizset.length){
    		//console.log("score "+score+"/"+quizset.length);
    		$('#result>p').text("score "+score+"/"+quizset.length);
    		$('#result').addClass('show');
    	}else{
        	setquiz();
    	}

    });
  }

function checkAnswer(node) {
	if(isAnswerd){
		return;
	}
	isAnswerd = true;
    if ($(node).text() === quizset[currentNum].a[0]) {
//      console.log('correct!');
    	$(node).append(' ... Correct!');
    	$(node).addClass('correct');
    	score++;
    } else {
//    console.log('wrong!');
    	$(node).append(' ... Wrong!');
    	$(node).addClass('wrong');
    }
    $('#btn').removeClass('disabled');
    currentNum++;
  }



setEvents();
setquiz();

//document.write(quizset[currentNum].a[0]);
//document.write(quizset[currentNum].a[1]);
//document.write(quizset[currentNum].a[2]);


//var a = [1,2,3];
//var b=a
//b[0]= 6;
//console.log(a);
//console.log(b);
//	})();

