import PrivacyPolicy from "./privacyPolicy";
import { DummyPrivacyData, DummyPrivacyPolicyDataItem } from "@/data/privacyPolicyData";

const PrivacyPage = () => {
    return (
        <PrivacyPolicy data={DummyPrivacyData} innerData={DummyPrivacyPolicyDataItem}/>
    );
};
export default PrivacyPage;