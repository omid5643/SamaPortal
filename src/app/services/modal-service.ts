
import {Injectable} from '@angular/core';


@Injectable({providedIn:'root'})

export class ModalService
{
  ShowModal()
  {
   document.getElementById("openModalButton").click();
   // document.getElementById("exampleModal").modal('show');
    
  }
}