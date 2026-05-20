import { TermsDataItem, TermsHeaderData } from "@/data/TermsData";
import TermsConditions from "./TermsConditions"

const TermsPage =()=>{
    return(
        <TermsConditions data={TermsHeaderData} innerData={TermsDataItem}/>
    )
}
export default TermsPage;