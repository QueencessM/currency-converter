export const SkeletonLoading = () => (
    <div className='grid grid-cols-2 gap-3'>
        <div className='flex flex-col gap-1'>
            Base:
            <div className='w-full h-9 bg-gray-100 animate-pulse rounded-md' />
        </div>
        
        <div className='flex flex-col gap-1'>
            Target:
            <div className='w-full h-9 bg-gray-100 animate-pulse rounded-md' />
        </div>
    </div>
);