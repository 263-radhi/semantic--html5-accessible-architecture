import {setupNavigation} from './components/navigation.js';
import {setupModal} from './components/modal.js';
setupNavigation();
setupModal();

const feedbackForm=document.querySelector('#feedback-form');
const feedbackStatus=document.querySelector('#feedback-status');
if(feedbackForm&&feedbackStatus){
  feedbackForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(feedbackForm.reportValidity()){
      feedbackStatus.textContent='Thank you. Your feedback was recorded in this demo.';
      feedbackForm.reset();
    }
  });
}
const preferencesForm=document.querySelector('#preferences-form');
const preferencesStatus=document.querySelector('#preferences-status');
if(preferencesForm&&preferencesStatus){
  preferencesForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    preferencesStatus.textContent='Your preferences have been saved for this demo.';
  });
}
