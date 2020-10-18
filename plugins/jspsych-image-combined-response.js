jsPsych.plugins["image-combined-response"] = (function() {

    var plugin = {};
  
    jsPsych.pluginAPI.registerPreload('image-combined-response', 'stimulus', 'image');
  
    plugin.info = {
      name: 'image-combined-response',
      description: '',
      parameters: {
        stimulus: {
          type: jsPsych.plugins.parameterType.IMAGE,
          pretty_name: 'Stimulus',
          default: undefined,
          description: 'The image to be displayed'
        },
        stimulus_height: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Image height',
          default: null,
          description: 'Set the image height in pixels'
        },
        stimulus_width: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Image width',
          default: null,
          description: 'Set the image width in pixels'
        },
        maintain_aspect_ratio: {
          type: jsPsych.plugins.parameterType.BOOL,
          pretty_name: 'Maintain aspect ratio',
          default: true,
          description: 'Maintain the aspect ratio after setting width or height'
        },
        button1_choices: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Choices',
          default: undefined,
          array: true,
          description: 'The labels for the buttons.'
        },
        button2_choices: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Choices',
          default: undefined,
          array: true,
          description: 'The labels for the buttons.'
        },
        button1_html: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Button HTML',
          default: '<input type="radio" id=%choice% name="button1" value="%choice%"> <label for="%choice%">%choice%</label><br>',
          array: true,
          description: 'The html of the button. Can create own style.'
        },
        button2_html: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Button HTML',
          default: '<input type="radio" id=%choice% name="button2" value="%choice%"> <label for="%choice%">%choice%</label><br>',
          array: true,
          description: 'The html of the button. Can create own style.'
        },
        slider1_min: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name: 'Min slider',
            default: 0,
            description: 'Sets the minimum value of the slider.'
        },
        slider2_min: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name: 'Min slider',
            default: 0,
            description: 'Sets the minimum value of the slider.'
        },
        slider1_max: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name: 'Max slider',
            default: 100,
            description: 'Sets the maximum value of the slider',
        },
        slider2_max: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Max slider',
          default: 100,
          description: 'Sets the maximum value of the slider',
        },
        slider1_start: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Slider starting value',
          default: 50,
          description: 'Sets the starting value of the slider',
        },
        slider2_start: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Slider starting value',
          default: 50,
          description: 'Sets the starting value of the slider',
        },
        slider1_step: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name: 'Step',
            default: 1,
            description: 'Sets the step of the slider'
        },
        slider2_step: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name: 'Step',
            default: 1,
            description: 'Sets the step of the slider'
        },
        slider1_labels: {
            type: jsPsych.plugins.parameterType.HTML_STRING,
            pretty_name:'Labels',
            default: [],
            array: true,
            description: 'Labels of the slider.',
        },
        slider2_labels: {
          type: jsPsych.plugins.parameterType.HTML_STRING,
          pretty_name:'Labels',
          default: [],
          array: true,
          description: 'Labels of the slider.',
        },
        slider1_width: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name:'Slider width',
            default: null,
            description: 'Width of the slider in pixels.'
        },
        slider2_width: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name:'Slider width',
            default: null,
            description: 'Width of the slider in pixels.'
        },
        button_label: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Button label',
            default:  'Continue',
            array: false,
            description: 'Label of the button to advance.'
        },
        require_movement: {
            type: jsPsych.plugins.parameterType.BOOL,
            pretty_name: 'Require movement',
            default: true,
            description: 'If true, the participant will have to move the slider before continuing.'
        },
        button1_prompt: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Prompt',
          default: null,
          description: 'Any content here will be displayed under the button.'
        },
        button2_prompt: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Prompt',
          default: null,
          description: 'Any content here will be displayed under the button.'
        },
        slider1_prompt: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Slider Prompt',
          default: null,
          description: 'Any content here will be displayed below the slider.'
        },
        slider2_prompt: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Slider Prompt',
          default: null,
          description: 'Any content here will be displayed below the slider.'
        },
        stimulus_duration: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Stimulus duration',
          default: null,
          description: 'How long to hide the stimulus.'
        },
        trial_duration: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Trial duration',
          default: null,
          description: 'How long to show the trial.'
        },
        margin_vertical: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Margin vertical',
          default: '0px',
          description: 'The vertical margin of the button.'
        },
        margin_horizontal: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Margin horizontal',
          default: '8px',
          description: 'The horizontal margin of the button.'
        },
        response_ends_trial: {
          type: jsPsych.plugins.parameterType.BOOL,
          pretty_name: 'Response ends trial',
          default: true,
          description: 'If true, then trial will end when user responds.'
        },
      }
    }
  
    plugin.trial = function(display_element, trial) {
  
      // display stimulus
      var html = '<img src="'+trial.stimulus+'" id="jspsych-image-combined-response-stimulus" style="';
      if(trial.stimulus_height !== null){
        html += 'height:'+trial.stimulus_height+'px; '
        if(trial.stimulus_width == null && trial.maintain_aspect_ratio){
          html += 'width: auto; ';
        }
      }
      if(trial.stimulus_width !== null){
        html += 'width:'+trial.stimulus_width+'px; '
        if(trial.stimulus_height == null && trial.maintain_aspect_ratio){
          html += 'height: auto; ';
        }
      }
      html +='"></img>';

      html += '<br>';
      html += '<hr>';
      html += '<br>';
  
      //display buttons 1
      var buttons = [];
      if (Array.isArray(trial.button1_html)) {
        if (trial.button1_html.length == trial.button1_choices.length) {
          buttons = trial.button1_html;
        } else {
          console.error('Error in image-combined-response plugin. The length of the button_html array does not equal the length of the choices array');
        }
      } else {
        for (var i = 0; i < trial.button1_choices.length; i++) {
          buttons.push(trial.button1_html);
        }
      }
      //show prompt if there is one
      if (trial.button1_prompt !== null) {
        html += trial.button1_prompt;
      }
      html += '<div id="jspsych-image-combined-response-btngroup1">';
  
      for (var i = 0; i < trial.button1_choices.length; i++) {
        var str = buttons[i].replace(/%choice%/g, trial.button1_choices[i]);
        html += '<div class="jspsych-image-combined-response-button1" style="display: inline-block; margin:'+trial.margin_vertical+' '+trial.margin_horizontal+'" id="jspsych-image-combined-response-button1-' + i +'" data-choice="'+i+'">'+str+'</div>';
      }
      html += '</div>';

      html += '<br>';
      html += '<hr>';
      html += '<br>';

      //silder1 - show prompt if there is one
      if (trial.slider1_prompt !== null) {
        html += trial.slider1_prompt;
      }
      
      html += '<div class="jspsych-image-combined-response-container1" style="position:relative; margin: 0 auto 3em auto; ';
      if(trial.slider1_width !== null){
          html += 'width:'+trial.slider1_width+'px;';
      }
      html += '">';
      html += '<input type="range" value="'+trial.slider1_start+'" min="'+trial.slider1_min+'" max="'+trial.slider1_max+'" step="'+trial.slider1_step+'" style="width: 100%;" id="jspsych-image-combined-response-response1"></input>';
      html += '<div>'
      for(var j=0; j < trial.slider1_labels.length; j++){
        var width = 100/(trial.slider1_labels.length-1);
        var left_offset = (j * (100 /(trial.slider1_labels.length - 1))) - (width/2);
        html += '<div style="display: inline-block; position: absolute; left:'+left_offset+'%; text-align: center; width: '+width+'%;">';
        html += '<span style="text-align: center; font-size: 80%;">'+trial.slider1_labels[j]+'</span>';
        html += '</div>'
      }
      html += '</div>';
      html += '</div>';
      html += '</div>';
      html += '<br>';
      html += '<hr>';
      html += '<br>';

      //silder2 - show prompt if there is one
      if (trial.slider2_prompt !== null) {
        html += trial.slider2_prompt;
      }
      
      html += '<div class="jspsych-image-combined-response-container2" style="position:relative; margin: 0 auto 3em auto; ';
      if(trial.slider2_width !== null){
          html += 'width:'+trial.slider2_width+'px;';
      }
      html += '">';
      html += '<input type="range" value="'+trial.slider2_start+'" min="'+trial.slider2_min+'" max="'+trial.slider2_max+'" step="'+trial.slider2_step+'" style="width: 100%;" id="jspsych-image-combined-response-response2"></input>';
      html += '<div>'
      for(var j=0; j < trial.slider2_labels.length; j++){
        var width = 100/(trial.slider2_labels.length-1);
        var left_offset = (j * (100 /(trial.slider2_labels.length - 1))) - (width/2);
        html += '<div style="display: inline-block; position: absolute; left:'+left_offset+'%; text-align: center; width: '+width+'%;">';
        html += '<span style="text-align: center; font-size: 80%;">'+trial.slider2_labels[j]+'</span>';
        html += '</div>'
      }
      html += '</div>';
      html += '</div>';
      html += '</div>';
      html += '<br>';
      html += '<hr>';
      html += '<br>';

      //display buttons 2
      var buttons = [];
      if (Array.isArray(trial.button2_html)) {
        if (trial.button2_html.length == trial.button2_choices.length) {
          buttons = trial.button2_html;
        } else {
          console.error('Error in image-combined-response plugin. The length of the button_html array does not equal the length of the choices array');
        }
      } else {
        for (var i = 0; i < trial.button2_choices.length; i++) {
          buttons.push(trial.button2_html);
        }
      }
      //show prompt if there is one
      if (trial.button2_prompt !== null) {
        html += trial.button2_prompt;
      }
      html += '<div id="jspsych-image-combined-response-btngroup2">';
   
      for (var i = 0; i < trial.button2_choices.length; i++) {
        var str = buttons[i].replace(/%choice%/g, trial.button2_choices[i]);
        html += '<div class="jspsych-image-combined-response-button2" style="display: inline-block; margin:'+trial.margin_vertical+' '+trial.margin_horizontal+'" id="jspsych-image-combined-response-button2-' + i +'" data-choice="'+i+'">'+str+'</div>';
      }
      html += '</div>';
 
      html += '<br>';
      html += '<hr>';
      html += '<br>'; 
        

      // add submit button
      html += '<button id="jspsych-image-combined-response-next" class="jspsych-btn3" '+ (trial.require_movement ? "disabled" : "") + '>'+trial.button_label+'</button>';
      html += '<br><br><br>'

  
      display_element.innerHTML = html;
  
      // start timing
      var start_time = performance.now();
      // store response
      var response = {
        rt: null,
        button1_rt: null,
        button2_rt: null,
        button1: null,
        button2: null,
        response1: null,
        response2: null,
        response1_rt: null,
        response2_rt: null
      };
      response.rt = 0
      var slider1_moved = false;
      var slider2_moved = false;
      var button1_selected = false;
      var button2_selected = false;
      var slider_moved = 0;

        
      for (var i = 0; i < trial.button1_choices.length; i++) {
        display_element.querySelector('#jspsych-image-combined-response-button1-' + i).addEventListener('click', function(e){
          var choice1 = e.currentTarget.getAttribute('data-choice'); // don't use dataset for jsdom compatibility
          if (choice1 !== null && choice1 > -1){
            //console.log("Button 1 selected");
            button1_selected = true;
          }
          //console.log(slider1_moved && slider2_moved && button1_selected && button2_selected);

          if (slider1_moved && slider2_moved && button1_selected && button2_selected){
            display_element.querySelector('#jspsych-image-combined-response-next').disabled = false;
          }

          after_response(choice1, '1');
        });
      }
      for (var i = 0; i < trial.button2_choices.length; i++) {
        display_element.querySelector('#jspsych-image-combined-response-button2-' + i).addEventListener('click', function(e){
          var choice2 = e.currentTarget.getAttribute('data-choice'); // don't use dataset for jsdom compatibility
          if (choice2 !== null && choice2 > -1){
            //console.log("Button 2 selected");
            button2_selected = true;
          }
          //console.log(slider1_moved && slider2_moved && button1_selected && button2_selected);

          if (slider1_moved && slider2_moved && button1_selected && button2_selected){
            display_element.querySelector('#jspsych-image-combined-response-next').disabled = false;
          }
          after_response(choice2, '2');
        });
      }
  
          
      // function to handle responses by the subject
      function after_response(choice, num) {
  
        // measure rt
        var end_time = performance.now();
        var rt = end_time - start_time;
        eval("".concat("response.button", num, " = choice"));
        eval("".concat("response.button", num, "_rt = rt"));
        response.rt = response.rt + rt;
  
        // after a valid response, the stimulus will have the CSS class 'responded'
        // which can be used to provide visual feedback that a response was recorded
        // disable all the buttons after a response
        //var btns = document.querySelectorAll(''.concat('.jspsych-image-combined-response-button', num, ' button'));
        //for(var i=0; i<btns.length; i++){
        //  btns[i].removeEventListener('click');
        //  btns[i].setAttribute('disabled', 'disabled');
        //}
      };

      

      if(trial.require_movement){
        display_element.querySelector('#jspsych-image-combined-response-response1').addEventListener('change', function(){
          //console.log("Slider 1 moved");
          slider1_moved = true;
          //console.log(slider1_moved && slider2_moved && button1_selected && button2_selected);
          if (slider1_moved && slider2_moved && button1_selected && button2_selected){
            display_element.querySelector('#jspsych-image-combined-response-next').disabled = false;
          };
          rt = performance.now();
          response.response1_rt = rt - start_time;
          response.rt = response.rt + response.response1_rt;
          end_time = performance.now();
        })
        display_element.querySelector('#jspsych-image-combined-response-response2').addEventListener('change', function(){
          //console.log("Slider 2 moved");
          slider2_moved = true;
          //console.log(slider1_moved && slider2_moved && button1_selected && button2_selected);
          if (slider1_moved && slider2_moved && button1_selected && button2_selected){
            display_element.querySelector('#jspsych-image-combined-response-next').disabled = false;
          };
          rt = performance.now();
          response.response2_rt = rt - start_time;
          response.rt = response.rt + response.response2_rt;
          end_time = performance.now();
        })
        
        
      }
      display_element.querySelector('#jspsych-image-combined-response-stimulus').className += ' responded';  

      display_element.querySelector('#jspsych-image-combined-response-next').addEventListener('click', function() {
        // measure response time
        var endTime = performance.now();
        response.rt = response.rt + endTime - startTime;
        response.response1 = display_element.querySelector('#jspsych-image-combined-response-response1').value;
        response.response2 = display_element.querySelector('#jspsych-image-combined-response-response2').value;
  
        if(trial.response_ends_trial){
          end_trial();
        } else {
          display_element.querySelector('#jspsych-image-combined-response-next').disabled = true;
        }  
      });
  
      // function to end trial when it is time
      function end_trial() {
  
        // kill any remaining setTimeout handlers
        jsPsych.pluginAPI.clearAllTimeouts();
  
        // gather the data to store for the trial
        var trial_data = {
          "rt": response.rt,
          "stimulus": trial.stimulus,
          "button1_pressed": response.button1,
          "button2_pressed": response.button2,
          "button1_rt": response.button1_rt,
          "button2_rt": response.button2_rt,
          "response1": response.response1,
          "response2": response.response2,
          "response1_rt": response.response1_rt,
          "response2_rt": response.response2_rt
        };
  
        // clear the display
        display_element.innerHTML = '';
  
        // move on to the next trial
        jsPsych.finishTrial(trial_data);
      };  
      // hide image if timing is set
      if (trial.stimulus_duration !== null) {
        jsPsych.pluginAPI.setTimeout(function() {
          display_element.querySelector('#jspsych-image-combined-response-stimulus').style.visibility = 'hidden';
        }, trial.stimulus_duration);
      }
  
      // end trial if time limit is set
      if (trial.trial_duration !== null) {
        jsPsych.pluginAPI.setTimeout(function() {
          end_trial();
        }, trial.trial_duration);
      }

      var startTime = performance.now();
    };
  
    return plugin;
  })();
  