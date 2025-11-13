import React from "react";

import Link from "next/link"

import guidePageList from './pageList';
import { ComponentBreadcrumbProps } from "./componetBreadcrumb.types";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger, 
} from "@/components/index"


// 신규 가이드 페이지 등록시 여기에 추가
const ComponentBreadcrumb = React.forwardRef<HTMLDivElement, ComponentBreadcrumbProps > (
  ({
    name, 
    ...props
  }) => {

  const  listName = name;
  const filtered = guidePageList.filter(
    (item) => item.name.trim().toLowerCase() !== listName?.trim().toLowerCase()
  );
    

    return (
      <div className="">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/components-guide">components-guide</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <span className="">{name}</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {filtered.map((page => (
                    <DropdownMenuItem key={page.name}><a href={`/components-guide/${page.name}`}>{page.name}</a></DropdownMenuItem>  
                  )))}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    );
  }

) 

ComponentBreadcrumb.displayName = 'ComponentBreadcrumb';

export default ComponentBreadcrumb;