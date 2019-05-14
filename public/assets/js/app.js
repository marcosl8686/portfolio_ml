$(document).ready(function(){
    //  01 - Ace Editor Activation
    var editor = ace.edit("ace_editor", {
        mode: "ace/mode/javascript",
        selectionStyle: "text"
      });
      editor.session.setUseWrapMode(true);
      editor.setTheme("ace/theme/monokai");
      editor.setOptions({
      });
      editor.setValue(      `
      /* Construct Marcos Lee.*/
      const marcos = {
          bornIn: "Asuncion Paraguay",
          ethnicity: "Korean",
          interests: ["Lego","Gunpla","Zelda","Final Fantasy", "Cooking","HearthStone"],
          developmentSkills: {
              frontEnd: ["HTML5", "CSS3", "Bootstrap", "Javascript", "JQuery","Handlebars JS", "React JS", "React Native", "PWA" ],
              backEnd: ["FireBase", "MySQL", "Node JS"],
              Others: [Optimizely, DialogFlow, Tealium, BlueTriangle, Photoshop],
              learning: ["C++", "Unreal Engine", "Swift", "docker", "Phython"],
              interests: ["Legos", "Gunpla", "Final Fantasy", "Zelda", "Cooking"]
          },
          personalSKills: {
              language: ["Spanish","Korean","English"],
              fastLearner: "enthusiastic about gaining knowledge and new insights",
              highlyMotivated: "assertive individual who takes initiative with minimal supervision"
          }
      };
      /* Reasons Why Marcos its a Great Developer: .*/
      let marcos_passions = {
        lego = {
            creativity: "Learned designing and prototyping",
            organization: Planning + ProblemSolving,
            fun: "develop lateral thinking in fun enviroment",
            persistent: function(err) {
                if(err) {
                  findSolution();
                  return solution;
                }
                else if (err) {
                  takeBreak();
                  findSolution();
                  return solution;
                }
                else {
                  enjoyLife();
                }
        },
        gunpla = {
            process: "Following specific instruction to build project",
            effort: precision + concentration,
            enhance: "intensify, increase, or further improve the quality",
            build: function() {
                fs.readFile("instruction.txt", "utf8", function(error, data) {
                    if (error) {
                        readFileAgain();
                    }
                    else {
                        build(data);
                    }
                })
        },
        zelda = {
            memorization: "memorize the correct sequence",
            concept: "provides general idea on how to solve a problem",
            inquisitive: exploration + puzzle,
            senseOfAchievement: "a proud feeling of having done something difficult and worthwhile",
            //How this applies to Development
            codingSkills: {
                debugging,
                exploringNewTechnologies,
                concept,
                senseOfAchievement
            }
      }
      `);
      editor.gotoLine(1);
      editor.setShowPrintMargin(false);
      editor.getSession().setUseWorker(false);

      //custom Scroll
      function scrollTo(selector) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(selector).offset().top
        }, 1000);
      }

      $('#about_nav').on('click', function(e){
          e.preventDefault();
          scrollTo('#about');
      });
      $('#contact').on('click', function(e){
        e.preventDefault();
        scrollTo('#footer');
    });
});