import { ShopComponent } from "./shop.component";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export function release(This: ShopComponent) {

}

export function numberToName(i: number): string {
  switch (i) {
    case 0:
      return "first";
    case 1:
      return "second";
    case 2:
      return "third";
    case 3:
      return "fourth";
    default:
      return "";
  }
}

export function rolling(rolling: boolean, This: ShopComponent) {
  if (rolling) {
    This.rolling = true;
  }
  else {
    This.rolling = false;
  }
}

export function buying(buying: boolean, This: ShopComponent) {
  if (buying) {
    This.buying = true;
  }
  else {
    This.buying = false;
  }
}

export function switching(switching: boolean, This: ShopComponent) {
  if (switching) {
    This.switching = true;
  }
  else {
    This.switching = false;
  }
}

export function selling(selling: boolean, This: ShopComponent) {
  if (selling) {
    This.selling = true;
  }
  else {
    This.selling = false;
  }
}

export async function autoHideInitialMessages(This: ShopComponent) {
  await delay();
  This.dragToReorderMessage = false;
}

function delay() {
  return new Promise(f => setTimeout(f, 5000));
}