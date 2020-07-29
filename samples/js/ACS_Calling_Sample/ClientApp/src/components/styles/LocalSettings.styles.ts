import { IStackTokens, mergeStyles, IDropdownStyles } from '@fluentui/react';

export const mainStackTokens: IStackTokens = {
  childrenGap: 24
};
export const micStackTokens: IStackTokens = {
  childrenGap: 12
};
export const dropDownStyles: Partial<IDropdownStyles> = {
  caretDownWrapper: {
    height: 40,
    lineHeight: 40
  },
  dropdownItem: { height: 40 },
  dropdown: { height: 40 },
  title: {
    height: 40,
    lineHeight: 37
  }
};
export const localSettingsContainer = mergeStyles({
  width: '100%',
  maxWidth: 300,
  minWidth: 200,
  maxHeight: 226
});
