import Image from "next/image";

import { TechionikPrinciples } from "@/data/techionikPrinciplesdata";

interface TechionikPrinciplesProps {
    data: TechionikPrinciples[];
    heading: string;
    paragraph: string;
}
const TechionikPrinciplesComponent = ({data, heading, paragraph}: TechionikPrinciplesProps) => {

    return(
        <main>
            <div className="flex flex-col justify-start max-w-full mx-auto px-4 py-5 ">
                <h2 className="text-muted w-full lg:w-[70%]">{heading}</h2>
                <p className="text-muted w-full lg:w-[70%]">{paragraph}</p>
            </div>
            <div className="max-w-full mx-auto px-4 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
                {
                    data.map((item, index)=>{
                        return(
                            <div className="flex flex-col justify-center border border-gradient-cards h-65 gap-2 p-4 " key={index}>
                                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-[#26262B]">
                                    <Image  src={item.icon} alt={item.title} width={35} height={35}/>
                                </div>
                                <h3 className="text-muted">{item.title}</h3>
                                <p className="text-muted">{item.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default TechionikPrinciplesComponent;