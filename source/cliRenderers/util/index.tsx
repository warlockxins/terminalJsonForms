/*
  The MIT License

  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
export * from './i18nDefaults';
import React from 'react';
import {
  JsonFormsState,
  OwnPropsOfCell,
  OwnPropsOfControl,
  OwnPropsOfRenderer,
  RendererProps,
  StatePropsOfCell,
  StatePropsOfControl
} from '@jsonforms/core';
import { VanillaRendererProps } from '../index';
import { ComponentType } from 'react';

/**
 * Add vanilla props to the return value of calling the given
 * mapStateToProps function.
 *
 * @param mapStateToProps existing mapStateToProps function
 * @returns {VanillaControlStateProps} vanilla-specific control props
 */
export const addVanillaControlProps = <P extends StatePropsOfControl>(
  mapStateToProps: (s: JsonFormsState, p: OwnPropsOfControl) => P
) => (
  state: JsonFormsState,
  ownProps: OwnPropsOfControl
): StatePropsOfControl & VanillaRendererProps => {
    const props: StatePropsOfControl = mapStateToProps(state, ownProps);

    return {
      ...props,
    };
  };

export const withVanillaControlProps = (Component: ComponentType<any>) => (props: any) => {
  return (
    <Component
      {...props}
    />
  );
}

/**
 * Add vanilla props to the return value of calling the given
 * mapStateToProps function.
 *
 * @param mapStateToProps an existing mapStateToProps function for retrieving layout props
 * @returns {VanillaLayoutProps} vanilla specific layout props
 */
export const addVanillaLayoutProps = (
  mapStateToProps: (s: JsonFormsState, p: OwnPropsOfRenderer) => RendererProps
) => (
  state: JsonFormsState,
  ownProps: OwnPropsOfRenderer
): RendererProps & VanillaRendererProps => {
    const props = mapStateToProps(state, ownProps);

    return {
      ...props,
    };
  };

export const addVanillaCellProps = (
  mapStateToCellsProps: (
    s: JsonFormsState,
    p: OwnPropsOfCell
  ) => StatePropsOfCell
) => (
  state: JsonFormsState,
  ownProps: OwnPropsOfCell
): StatePropsOfCell & VanillaRendererProps => {
    const props = mapStateToCellsProps(state, ownProps);

    return {
      ...props,
    };
  };

const withVanillaCellPropsForType = (_type: string) => (
  Component: ComponentType<any>
) => (props: any) => {

  return (
    <Component
      {...props}
    />
  );
};

export const withVanillaCellProps = withVanillaCellPropsForType(
  'control.input'
);

export const withVanillaEnumCellProps = withVanillaCellPropsForType(
  'control.select'
);

export const withVanillaBooleanCellProps = withVanillaCellPropsForType(
  'control.checkbox'
);

