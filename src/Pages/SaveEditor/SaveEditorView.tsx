import {useState} from "react";
import {Box, Tab} from "@mui/material";
import * as Material from "@mui/material";
import {Add} from "@mui/icons-material";
import {SaveEditorTab} from "./SaveEditorTab.tsx";
import {TabsContainer} from "../../Components/TabsContainer.tsx";

interface ITab {
    id: number;
    name: string;
}

const defaultTabName = "Untitled";

const SaveEditorView = () => {

    const [selectedTabId, setSelectedTab] = useState(0);
    const [tabs, setTabs] = useState<ITab[]>([
        {id: 0, name: defaultTabName,}
    ]);

    const onTabClick = (tab: ITab) => {
        setSelectedTab(tab.id)
    }

    const onAddClick = () => {
        const newTab: ITab = {
            id: tabs.length,
            name: defaultTabName,
        };
        setTabs(prevState => [...prevState, newTab]);
    }

    const onRemoveTab = (tab: ITab) => {
        setTabs(prevState => [...prevState].filter(f => f.id != tab.id));
    }

    const onTabRename = (tab: ITab, newName: string) => {
        tab.name = newName;
        setTabs([...tabs]);
    }

    return (<>
        <Box>
            <TabsContainer>
                <Material.Tabs value={selectedTabId}>
                    {tabs.map(tab =>
                        <Tab key={tab.id}
                             label={tab.name}
                             onClick={() => onTabClick(tab)}
                             sx={{
                                 ":hover": {
                                     color: "#0872cf",
                                 },
                                 textTransform: "inherit",
                             }}/>
                    )}
                    <Tab key={tabs.length}
                         onClick={onAddClick}
                         sx={{
                             margin: 0,
                             minWidth: 0,
                             ":hover": {color: "#0872cf"}
                         }}
                         icon={<Add/>}
                         iconPosition={"end"}/>
                </Material.Tabs>
            </TabsContainer>
            <Box>
                {tabs.map(tab =>
                    <Box key={tab.id}
                         sx={{display: selectedTabId == tab.id ? "visible" : "none"}}>
                        <SaveEditorTab onTabNameChanged={newName => onTabRename(tab, newName)}/>
                    </Box>
                )}
            </Box>
        </Box>
    </>)
}

export default SaveEditorView;