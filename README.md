>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

# Preview
https://github.com/hatmramadn/product-browser/assets/20639687/47ce2869-009a-4a91-bdcb-aee3c9ac4229

# Data Types

```tsx
type GenericTreeNode = {
  id: number;
  objectId: string;
  title: string;
  data?: GenericTreeNode[];
  count?: number;
}

type TreeSpecificNode = GenericTreeNode & {
  isExpanded?: boolean;
  isSelected?: boolean;
  parentNode?: TreeSpecificNode;
};

type TreeData = GenericTreeNode[];

type SelectionChip = {
  title: string;
  isAll: boolean;
  selectedChildren: string;
  isLeaf: boolean | undefined;
  parentTitle: string | undefined;
};

const PRODUCT_LIST: TreeData = [
  {
    id: 1,
    objectId: "4399e8b7-921e-4c0a-895a-7de42684fd68",
    title: "Phones",
    data: [
      {
        id: 1,
        objectId: "c0b4d745-2f0a-4bcd-bdc2-eb6a8ebfc46b",
        title: "Apple",
        count: 180,
        data: [
          {
            id: 1,
            objectId: "81428cd4-ba9a-49b3-be8d-a05122e01fb3",
            title: "iPhone 15",
            count: 60,
            data: [
              {
                title: "64GB",
                count: 10,
                id: 1,
                objectId: "81428cd4-ba9a-49b3-be8d-a05122e01fb3",
              },
            ],
          },
        ],
      },
    ],
  },
];

```

# **Properties**

| Prop | Default | Type | Required | Description |
| --- | --- | --- | --- | --- |
| data | - | TreeData | true | Array of data objects Must be of TreeData Type. |
| autoSelectChildren | false | boolean | false | When parent node is selected it will recursively select all of its children. |
| autoExpandChildren | false | bool | false | When parent expand is pressed it will expand its children. |
| onSelect | - | (items: TreeSpecificNode[]) => void | true | Event handler which is called when any item is selected returning all selected items array (can be used to sync tree state with any local component state) |
| onItemExpand | - | (item: TreeSpecificNode) => void | false | Event handler which is called when the node container or expand button pressed (can be used to catch pressed item) |
| onItemSelect | - | (item: TreeSpecificNode) => void | false | Similar to onSelect but returning the selected node only instead of all selected nodes array (can be used to build your own state instead of tree state)  |
| renderSelectionChip | - | (chip: SelectionChip) => JSX.Element | false | Render selection chip instead of default component. |
| selectionChipContainerStyle | - | ViewStyle | false | Customize the chip container view. |
| nodeContainerStyle | - | ViewStyle | false | Control style of each tree node. |
| renderExpandCollapseIcon | - | (isExpanded: boolean) => React.ReactNode | false | Change the expand and collapse icon. |
| renderCheckMark | - | (isSelected: boolean) => React.ReactNode) | false | Change check mark icon. |
| renderParentItemContent | - | (itemTitle: string, subNodeTitleCount: string, isExpanded: boolean) => React.ReactNode | false | Change parent nodes content container this only includes title and sub nodes title and count.  |
| renderLeafNodeContent | - | (itemTitle: string, itemCount: string) => React.ReactNode | false | similar to renderParentItemContent |


# **How to run the project**

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.


# **How to test the project**
```bash
yarn test
```
