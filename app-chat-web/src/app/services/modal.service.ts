import { Injectable } from '@angular/core';

export class ModalType {
  public name: string;
  public color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
}

export class ModalTypes {
  static INFO = new ModalType('info', 'gray');
  static VALID = new ModalType('check_circle', 'green');
  static ERROR = new ModalType('error', 'red');
  static WARNING = new ModalType('warning', 'orange');
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private static IS_OPEN: boolean = false;
  private static MESSAGE: string =
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
  private static ACTION_ON_CLOSE?: () => void;
  private static TYPE: ModalType = ModalTypes.VALID;

  constructor() {
  }

  getStatus() {
    return {
      isOpen: ModalService.IS_OPEN,
      message: ModalService.MESSAGE,
      type: ModalService.TYPE,
    };
  }

  open(message: string, type: ModalType, actionOnClose?: () => void) {
    ModalService.IS_OPEN = true;
    ModalService.MESSAGE = message;
    ModalService.ACTION_ON_CLOSE = actionOnClose;
    ModalService.TYPE = type;
  }

  close() {
    ModalService.IS_OPEN = false;
    if (ModalService.ACTION_ON_CLOSE) {
      ModalService.ACTION_ON_CLOSE();
    }

  }
}
