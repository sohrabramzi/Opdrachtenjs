<script>

		var Quests = [{Quest:"Vraag 1",
						scores: [
							[-3,1,3], //D66 NO/NEUTRAL/YES
							[-1,0,2], //SP
							[3,0,-3]  //PVV
						],
						response: null
					},

						{Quest:"Vraag 2",
						 scores: [
							[3,0,-2], //D66 NO/NEUTRAL/YES
							[2,1,-1], //SP
							[-3,-1,3] //PVV
						],
						response: null
					},
						{Quest:"vraag 3",
						 scores: [
						 	[2,0,-3], //D66 NO/NEUTRAL/YES
						 	[-3,-1,3],//SP
						 	[-2,0,2]  //PVV
						 ],
						 response: null
					}];
		//console.log(Quests);
		var parties = [
			{party:'D66', score:0},
			{party:'50Plus', score:0},
			{party:'PVV', score:0}
			];

		var i = 0;
		var score = 0;

		function pollQuestion(pollInput) {
			//console.log('PollInput = ', pollInput);

		/*	for (var p = 0; p <= Quests[0]['scores'].length - 1; p++) {
				console.log(Quests[i]['scores'][p][pollInput]);
			}*/			

			if(i > Quests.length){
				document.getElementById("pollQ").innerHTML = "Resultaat PH";
				document.getElementById("pollButtons").style.display = "none";
				console.log("Done");
			} else{
				for (var p = 0; p <= Quests[0]['scores'].length - 1; p++) {
					console.log(Quests[i]['scores'][p][pollInput]);
				}	
				console.info('Question = ', Quests[i]["Quest"]);
				i++;
				document.getElementById("pollQ").innerHTML = Quests[i]["Quest"];
		
			}
		}

		</script>