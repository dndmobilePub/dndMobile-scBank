import * as React from "react";

export type ScTextNoteVariant = "line" | "color" | "note";

export type ScTextNoteItem = string[] | React.ReactNode | React.ReactNode[] | undefined;

export interface ScTextNotesProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: ScTextNoteVariant;
  heading?: string | React.ReactNode | undefined;
  NoteData?: ScTextNoteItem[];
  isActiveBtn?: boolean; // 하단 버튼 영역
  listGap?: number;
}
