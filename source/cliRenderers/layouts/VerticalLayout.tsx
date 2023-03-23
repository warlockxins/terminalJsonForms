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
import React, { FunctionComponent } from 'react';
import {
  RankedTester,
  rankWith,
  RendererProps,
  uiTypeIs,
  VerticalLayout
} from '@jsonforms/core';
import { withJsonFormsLayoutProps } from '@jsonforms/react';
import { withVanillaControlProps } from '../util';
import { JsonFormsLayout } from './JsonFormsLayout';
import { renderChildren } from './util';
import { VanillaRendererProps } from '../index';

/**
 * Default tester for a vertical layout.
 * @type {RankedTester}
 */
export const verticalLayoutTester: RankedTester = rankWith(1, uiTypeIs('VerticalLayout'));

export const VerticalLayoutRenderer = (props: RendererProps & VanillaRendererProps) => {
  const {data, ...otherProps} = props;
  // We don't hand over data to the layout renderer to avoid rerendering it with every data change
  return <VerticalLayoutRendererComponent {...otherProps}/>;
}

const VerticalLayoutRendererComponent: FunctionComponent<RendererProps & VanillaRendererProps> = React.memo((
  {
    schema,
    uischema,
    path,
    visible,
    enabled,
  }: RendererProps & VanillaRendererProps) => {

  const verticalLayout = uischema as VerticalLayout;

  return (
    <JsonFormsLayout
      uischema={uischema}
      schema={schema}
      visible={visible}
      enabled={enabled}
      path={path}
        flexDirection="vertical"
    >
      {renderChildren(verticalLayout, schema,  path, enabled)}
    </JsonFormsLayout>
  );
});

export default withVanillaControlProps(withJsonFormsLayoutProps(VerticalLayoutRenderer, false));