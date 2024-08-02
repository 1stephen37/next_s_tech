import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

function Loading() {
    return (
        <div className="flex items-center justify-center space-x-4">
            <Skeleton className="h-[40rem] w-[50rem] rounded-full"/>
            <div className="space-y-2">
                <Skeleton className="h-[30rem] w-[400px]"/>
                <Skeleton className="h-[30rem] w-[200px]"/>
            </div>
        </div>
    );
}

export default Loading;
