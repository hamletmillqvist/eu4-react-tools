import {useState} from "react";
import {TestTabDialogs} from "./TestTab1/TestTabDialogs.tsx";
import {Box, Tab, Tabs} from "@mui/material";
import TabsContainer from "../../Components/TabsContainer.tsx";

const TestingView = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    const tabs = [
        {id: 0, name: "Dialogs", element: <TestTabDialogs/>},
        {id: 1, name: "Test 2", element: <>And this is the second one</>},
        {id: 2, name: "Disabled tab", element: <>This one shouldn't be openable</>, disabled: true,},
    ];

    return (
        <Box>
            <TabsContainer>
                <Tabs value={selectedTab}>
                    {tabs.map(tab =>
                        <Tab key={tab.id}
                             label={tab.name}
                             disabled={tab.disabled}
                             onClick={() => setSelectedTab(tab.id)}/>
                    )}
                </Tabs>
            </TabsContainer>
            {tabs.map(tab =>
                <Box key={tab.id}
                     sx={{display: tab.id === selectedTab ? "initial" : "none"}}>
                    {tab.element}
                </Box>
            )}
        </Box>
    );
}

export default TestingView;