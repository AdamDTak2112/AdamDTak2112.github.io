
"use client"

export default function Footer(){
    const today = new Date();

    return (
        <footer className="min-h-[8%] mx-[5rem]">
            <div className="sticky bottom-0 columns-2 h-full w-full justify-around flex items-center space-x-[25px]">
                    
                    <h6 className="text-sm">© Adam Tak {today.getFullYear()}</h6>
            </div>
        </footer>
    );
}