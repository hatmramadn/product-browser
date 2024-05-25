import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {TreeView} from '../TreeView';
import {PRODUCT_LIST} from '../../../constants';

describe('TreeView Component', () => {
  it('should render the Tree component with the static data', () => {
    const {getByTestId} = render(
      <TreeView data={PRODUCT_LIST} onSelect={() => {}} />,
    );
    expect(getByTestId('treeView')).toBeDefined();
  });

  it('should render parent nodes', () => {
    const {getByTestId} = render(
      <TreeView data={PRODUCT_LIST} onSelect={() => {}} />,
    );

    expect(getByTestId('Phones_parentNode')).toBeDefined();
  });

  it('should render leaf nodes', () => {
    const {getByTestId} = render(
      <TreeView data={PRODUCT_LIST} onSelect={() => {}} />,
    );
    const categoryNodeButton = getByTestId('Phones_parentNodeExpandButton');
    fireEvent.press(categoryNodeButton);
    const brandButton = getByTestId('Apple_parentNodeExpandButton');
    fireEvent.press(brandButton);
    const modelButton = getByTestId('iPhone 15_parentNodeExpandButton');
    fireEvent.press(modelButton);
    expect(getByTestId('64GB_leafNode')).toBeDefined();
  });

  it('should render child node with the correct title when the parent is expanded', () => {
    const {getByText, getByTestId} = render(
      <TreeView data={PRODUCT_LIST} onSelect={() => {}} />,
    );

    const brandTitleAndCount = () => {
      return PRODUCT_LIST[0]
        .data![0]!.data?.map(child => {
          return {
            title: `${child.title}`,
            count: child.count,
          };
        })
        .reduce((acc, curr, index, arr) => {
          const isLastElement = arr.length - 1 === index;
          return acc.concat(
            `+${curr.count ?? ''} ${curr.title ?? ''} devices ${
              isLastElement ? '' : ','
            } `,
          );
        }, '');
    };

    const categoryNodeButton = getByTestId('Phones_parentNodeExpandButton');
    fireEvent.press(categoryNodeButton);
    expect(getByText(brandTitleAndCount()!)).toBeDefined();
  });

  it('should collapse when the parent node is clicked again', () => {
    const {getByTestId} = render(
      <TreeView data={PRODUCT_LIST} onSelect={() => {}} />,
    );
    fireEvent.press(getByTestId('Phones_parentNodeExpandButton'));
    expect(() => getByTestId('Apple_parentNode')).toBeDefined();
    fireEvent.press(getByTestId('Phones_parentNodeExpandButton'));
    expect(() => getByTestId('Apple_parentNode')).toThrowError();
  });

  it('should select node when checkmark is clicked', () => {
    const {getByTestId} = render(
      <TreeView data={PRODUCT_LIST} onSelect={() => {}} />,
    );
    fireEvent.press(getByTestId('Phones_parentNodeSelectButton'));
    expect(getByTestId('Phones_checkmark')).toBeDefined();
  });

  it('should unSelect node when checkmark is clicked again', () => {
    const {getByTestId} = render(
      <TreeView data={PRODUCT_LIST} onSelect={() => {}} />,
    );
    fireEvent.press(getByTestId('Phones_parentNodeSelectButton'));
    expect(getByTestId('Phones_checkmark')).toBeDefined();
    fireEvent.press(getByTestId('Phones_parentNodeSelectButton'));
    expect(() => getByTestId('Phones_checkmark')).toThrowError();
  });

  it('should render selection chips list if nodes are selected', () => {
    const {getByTestId} = render(
      <TreeView data={PRODUCT_LIST} onSelect={() => {}} />,
    );
    fireEvent.press(getByTestId('Phones_parentNodeSelectButton'));
    expect(getByTestId('selectionChip')).toBeDefined();
  });
});
