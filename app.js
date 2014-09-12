$(document).ready(function() {
    //quiz question array
    var questions = [{
        qNum : "Question 1 /5 : ",
        question: "When was the first record “phonograph” invented?",
        choices: ["1877", "1912", "1928"],
        correct : 0,
        factNum:"Q1 fact: ",
        fact: "In 1877, Thomas Edison invented the phonograph. It was capable of both recording and reproducing sound."
        },
        {
        qNum : "Question 2 /5 : ",
        question: "How big was the first disc records ?",
        choices: ["5 inch", "7 inch", "10 inch"],
        correct : 0,
        factNum:"Q2 fact: ",
        fact: "The earliest discs, first marketed in 1889, but only in Europe, were 5 inches (13 cm) in diameter, and were played with a small hand-propelled machine."
        },
        {
        qNum : "Question 3 /5 : ",
        question: "In 1920’s the speed of the record was becoming standardized at a nominal value of ",
        choices: ["33 rpm", "45 rpm", "78rpm"],
        correct : 2,
        factNum:"Q3 fact: ",
        fact: "Early disc recordings were produced in a variety of speeds ranging from 60 to 130 rpm, and a variety of sizes.  By 1925, the speed of the record was becoming standardized at a nominal value of 78 rpm."
        },
        {
        qNum : "Question 4 /5 : ",
        question: "From the mid-1950s through the 1960s, in the U.S. the common home 'record player' or 'stereo' would typically have had these features other than ",
        choices: ["tall spindle", "skip", "speed changer"],
        correct : 1,
        factNum:"Q4 fact: ",
        fact: "3 Speed changer (78, 45, 33 1⁄3 rpm), a tall spindle that would hold several records and automatically drop a new record on top of the previous one when it had finished playing, and some kind of adapter for playing the 45s with their larger center hole."
        },
        {
        qNum : "Question 5 /5 : ",
        question: "Which weight of a 12” record has the best sound quality?",
        choices: ["120 gram", "140 gram", "180 gram"],
        correct : 2,
        factNum:"Q5 fact: ",
        fact: "New 'virgin' or 'heavy/heavyweight' (180–220 g) vinyl is commonly used for modern 'audiophile' vinyl releases in all genres. Many collectors prefer to have heavyweight vinyl albums, and they have been reported to have a better sound than normal vinyl as they have a higher tolerance against deformation caused by normal play."
    }]
    
    //global variables
    var numberCorrect = 0;
    var currentQuestion = 0;

    
    $("#question_wrapper").on("click", "#submit", function () {
    	var IsChecked = $('.option').is(':checked');
		if(!IsChecked){
		$("#basicModal").dialog({
	        modal: true,
	        title: "Record Quiz App Message",
	        height: 300,
	        width: 280,
	        buttons: {
        Ok: function() {
          $( this ).dialog( "close" );
        }
      }
         });
		
		
	}else{
		$("#fact_holder").css("display", "inline-block");
    	recordAdd();
        currentQuestion++;
        nextQuestion(); 
        $("#recordNum").css("display", "inline");        
        $("#recordNum").text(" "+numberCorrect+" ");
        $("#recordNumbf").css("display", "inline");
        $("#recordNumaf").css("display", "inline");
        $(".earned-score").css("border-style", "dotted")
        }
    });

     $(document).keypress(function(e){   
         
        if(e.which == 13){     
            e.preventDefault();
            $("#submit").click ();
       };
    }); 

    $("#question_wrapper").on("click", "#retry_button", function () {
    	
        numberCorrect = 0;
        currentQuestion = 0;
        $("div.earned-score").children().css("display", "none");
        $("div.records-score").children().css("display", "none");
        var newQuestion = '<span class="questionNum">'+questions[currentQuestion].qNum+'</span><br><span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><input type="button" id="retry_button" value="Try Again!"></div>';
        $("#question_wrapper").html(newQuestion);
        $("#fact_holder").css("display", "none");
        $("#last_question_fact").html("");
    	$(".earned-score").css("border-style", "none")
        $("#retry_button").remove();
	});
    
    function recordAdd() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == questions[currentQuestion].correct) {
            numberCorrect++;    
            $("#basicModal2").dialog({
            modal: true,
            title: "You are correct!",
            height: 280,
            width: 280,
            buttons: {
        Ok: function() {
          $( this ).dialog( "close" );
        }
      }
         });
        }else{
            $("#basicModal3").dialog({
            modal: true,
            title: "You are incorrect.",
            height: 280,
            width: 280,
            buttons: {
        Ok: function() {
          $( this ).dialog( "close" );
        }
      }
         });
        }
        if (numberCorrect == 1) {
             $(".record").css("display", "inline-block");
         }
        else if (numberCorrect == 2) {
             $(".record2").css("display", "inline-block"); 
         }
        else if (numberCorrect == 3) {
               $(".record3").css("display", "inline-block"); 
        }
        else if (numberCorrect == 4) {
                $(".record4").css("display", "inline-block"); 
        }
        else if (numberCorrect == 5) {
                $(".record5").css("display", "inline-block"); 
        }
    }

   
    function nextQuestion() {
        if (currentQuestion < 5) {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
			$("#last_question_fact").hide();
            var newQuestion = '<span class="questionNum">'+questions[currentQuestion].qNum+'</span><br><span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><input type="button" id="retry_button" value="Try Again!"></div>';
            $("#question_wrapper").html(newQuestion);
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact).fadeIn();
            var factNo= questions[currentQuestion-1].factNum;
            $("#factNum").html(factNo).fadeIn();
        }
        else {
            $(".questionNum").remove();
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
			// $("#last_question_fact").fadeOut();
            $("#submit").css("display", "none");
            $("#retry_button").css("display", "inline");
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact);
            var factNo= questions[currentQuestion-1].factNum;
            $("#factNum").html(factNo);
            if (numberCorrect == 1) {
                var finalScore = '<span id="final">Thanks for finishing the quiz!  You earned '+numberCorrect+' records!'
                $("#answer_holder").html(finalScore);
            }
            else {
                var finalScore = '<span id="final">Thanks for finishing the quiz!  You earned '+numberCorrect+' records!'
                $("#answer_holder").html(finalScore);
            }
        }
    }



    function blink(time, interval){
    var timer = window.setInterval(function(){
        $(".records-score").css("opacity", "0.1");
        // $("#recordNum").css("opacity", "0.1");
        $(".earned-score").css("opacity", "0.1");
        window.setTimeout(function(){
            $(".records-score").css("opacity", "1");
            // $("#recordNum").css("opacity", "1");
            $(".earned-score").css("opacity", "1");
        }, 100);
        }, interval);
        window.setTimeout(function(){clearInterval(timer);}, time);
    }
    blink(900000, 1000);

});
