

// 
export type ComponentBreadcrumbProps = {
name? : string 
} 

// 
export type ComponentLayoutProps = {
    children? : React.ReactNode;
} & ComponentBreadcrumbProps;



export type GuidePageProps = {
  preStyle?: string | undefined;
}
