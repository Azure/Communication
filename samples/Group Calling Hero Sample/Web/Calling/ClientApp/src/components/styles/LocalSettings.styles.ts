import { IStackTokens, mergeStyles, IDropdownStyles } from '@fluentui/react';

export const mainStackTokens: IStackTokens = {
  childrenGap: '1.5rem'
};
export const micStackTokens: IStackTokens = {
  childrenGap: '0.75rem'
};
export const dropDownStyles: Partial<IDropdownStyles> = {
  caretDownWrapper: {
    height: '2.5rem',
    lineHeight: '2.5rem'
  },
  dropdownItem: {
    fontWeight: 600,
    fontSize: '0.875rem',
    height: '2.5rem'
  },
  dropdown: { height: '2.5rem' },
  title: {
    fontWeight: 600,
    fontSize: '0.875rem',
    height: '2.5rem',
    lineHeight: '2.3125rem'
  },
  label: {
    fontWeight: 600,
    fontSize: '0.875rem'
  }
};
export const localSettingsContainer = mergeStyles({
  width: '100%',
  maxWidth: '18.75rem',
  minWidth: '12.5rem',
  maxHeight: '14.125rem',
  marginTop: '2.125rem'
});
