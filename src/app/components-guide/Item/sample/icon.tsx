"use client"
import * as React from "react"
import { ShieldAlertIcon } from "lucide-react"

import {
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/index";
import { GuidePageProps } from '../../componetLayout.types'

const ItemIcon  = React.forwardRef<HTMLDivElement, GuidePageProps>(

  ( props, ref ) => {

  const { preStyle } = props;


  return (
    <div className="flex w-full flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ShieldAlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Security Alert</ItemTitle>
          <ItemDescription>
            New login detected from unknown device.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Review
          </Button>
        </ItemActions>
      </Item>
    </div>

  );
  }
);
export { ItemIcon } ;
