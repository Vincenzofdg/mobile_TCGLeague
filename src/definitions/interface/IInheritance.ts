import React from 'react';

interface IInheritance {
      children: React.ReactNode;
}

export interface IInheritanceSafeArea extends IInheritance {}

export interface IInheritanceButton extends IInheritance {
      children: React.ReactNode;
      enabled?: boolean;
      style?: object[] | object;
      action: () => void;
}
