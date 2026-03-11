import * as React from "react";

export interface ScFeedbackProps extends React.HTMLAttributes<HTMLDivElement> {
  titleTxt?: string | React.ReactNode;
  contTxt?: string | React.ReactNode;
  IconName?: string;
  IconImg?: React.ReactNode;
}
