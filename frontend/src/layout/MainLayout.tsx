import {  ResizableHandle, ResizablePanel,ResizablePanelGroup } from '@/components/ui/resizable'
import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftSidebar from './components/LeftSidebar';

const MainLayout = () => {
  const isMobile=false;

  return (
	<div className="h-screen bg-black text-pink-300 flex flex-col">
    <ResizablePanelGroup  orientation="horizontal" className="flex-1 flex h-full overflow-hidden p-2" >
      {/* Left sidebar component */}
      <ResizablePanel defaultSize="20" minSize={isMobile ? "0" : "10"} maxSize="30">
        <LeftSidebar/>
      </ResizablePanel>

      <ResizableHandle className="w-2 bg-black rounded-lg transition-colors"/>

      {/* Main Content */}
      <ResizablePanel defaultSize={isMobile ? "80" : "60"}>
        <Outlet/>
      </ResizablePanel>
       <ResizableHandle className="w-2 bg-black rounded-lg transition-colors"/>

      {/* Righthand Side */}
      <ResizablePanel defaultSize="20" minSize="10" maxSize="30" collapsedSize={0}>
        right

      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
  )
}

export default MainLayout
