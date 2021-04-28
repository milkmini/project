import { css } from '@emotion/react';

export const SwitcherStyles = css`
  height: 24px;
  width: 52px;
  display: inline-block;
  position: relative;
  outline: none;
  appearance: none;
  margin: 0;
  background: #80dd0a;
  border-radius: 36px;
  border: 2px solid #80dd0a;
  transition: all 0.2s ease;
  &:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 28px;
    width: 20px;
    height: 20px;
    background: white;
    box-shadow: 0px 4px 19px rgba(54, 108, 139, 0.33);
    border-radius: 42px;
    transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
  }
  &:checked {
    border-color: #e8f7ff;
    background: #e8f7ff;
    &:after {
      transform: translatex(-28px);
    }
  }
`;
