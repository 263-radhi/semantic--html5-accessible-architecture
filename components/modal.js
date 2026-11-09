export function setupModal(){
  const dialog=document.querySelector('#report-dialog');
  const trigger=document.querySelector('[data-open-modal]');
  const status=document.querySelector('#dialog-status');
  if(!dialog||!trigger)return;
  trigger.addEventListener('click',()=>dialog.showModal());
  dialog.addEventListener('close',()=>{
    if(dialog.returnValue==='confirm'&&status)status.textContent='Report created in this demo.';
  });
}
