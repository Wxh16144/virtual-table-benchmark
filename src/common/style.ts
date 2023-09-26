import { TinyColor } from '@ctrl/tinycolor';
import { createStyles } from 'antd-style';

const useStyle = createStyles((props) => {
  const { css, token, cx } = props;
  const colorFillAlterSolid = new TinyColor(token.colorFillAlter)
    .onBackground(token.colorBgContainer)
    .toHexShortString();

  // https://github.com/adazzle/react-data-grid/blob/main/src/style/core.ts
  const reactDataGridCssVars = css`
    --rdg-color: ${token.colorText};
    --rdg-border-color: ${token.colorBorderSecondary};
    --rdg-summary-border-color: ${token.colorBorder};
    --rdg-background-color: ${token.colorBgContainer};
    --rdg-header-background-color: ${colorFillAlterSolid};
    --rdg-row-hover-background-color: ${colorFillAlterSolid};
    --rdg-row-selected-background-color: ${token.controlItemBgActive};
    --rdg-row-selected-hover-background-color: ${token.controlItemBgActiveHover};

    --rdg-selection-color: ${token.colorPrimary};
    --rdg-font-size: ${token.fontSize};
  `;

  const container = cx(
    reactDataGridCssVars,
    // css`
    //   border-radius: ${token.borderRadius}px;
    // `,
    css({
      borderRadius: token.borderRadius,
    }),
  );

  return {
    container,
  };
});

export default useStyle;
