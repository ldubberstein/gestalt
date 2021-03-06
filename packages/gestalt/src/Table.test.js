// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Table from './Table.js';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Table>
        <div>rest of table</div>
      </Table>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
